#!/usr/bin/env python3
"""Clean Jacobs Adenium logo pack edges and write web-ready assets to public/brand/.

Requires: pillow, numpy, opencv-python
"""

from __future__ import annotations

from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "jacobs_adenium_logo_pack"
OUT_PACK = SRC / "cleaned"
OUT_WEB = ROOT / "public" / "brand"
STROKE = (245, 250, 246)


def to_rgba(path: Path) -> np.ndarray:
    return np.array(Image.open(path).convert("RGBA"))


def is_near_white(rgb: np.ndarray) -> np.ndarray:
    r = rgb[..., 0].astype(np.float32)
    g = rgb[..., 1].astype(np.float32)
    b = rgb[..., 2].astype(np.float32)
    mn = np.minimum(np.minimum(r, g), b)
    mx = np.maximum(np.maximum(r, g), b)
    return (mn > 175) & (mx > 210)


def strip_outer_white(arr: np.ndarray, passes: int = 40) -> np.ndarray:
    out = arr.copy()
    for _ in range(passes):
        op = out[..., 3] > 128
        erode = cv2.erode(op.astype(np.uint8), np.ones((3, 3), np.uint8), 1)
        edge = op & (erode == 0)
        kill = edge & is_near_white(out[..., :3])
        if not kill.any():
            break
        out[kill, 3] = 0
    return out


def soft_outer(arr: np.ndarray, soft: float = 1.0) -> np.ndarray:
    mask = arr[..., 3] > 128
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    mask = cv2.morphologyEx(mask.astype(np.uint8), cv2.MORPH_CLOSE, k).astype(bool)
    dist = cv2.distanceTransform((~mask).astype(np.uint8), cv2.DIST_L2, 5)
    alpha = np.where(mask, 1.0, np.clip(1.0 - dist / max(soft, 1e-6), 0, 1))
    out = arr.copy()
    out[..., 3] = (np.minimum(out[..., 3] / 255.0, alpha) * 255).astype(np.uint8)
    return out


def outline_wordmark(src: Path, dst: Path, radius: float = 2.2, scale: int = 8) -> None:
    arr = soft_outer(strip_outer_white(to_rgba(src)))
    h, w = arr.shape[:2]
    hi = np.dstack(
        [
            cv2.resize(arr[..., :3], (w * scale, h * scale), interpolation=cv2.INTER_CUBIC),
            cv2.resize(arr[..., 3], (w * scale, h * scale), interpolation=cv2.INTER_LINEAR),
        ]
    )
    mask = hi[..., 3] > 120
    mask = cv2.GaussianBlur(mask.astype(np.float32), (0, 0), 1.2) > 0.45
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask = cv2.morphologyEx(mask.astype(np.uint8), cv2.MORPH_CLOSE, k).astype(bool)

    pad = int(radius * scale) + 4
    H, W = mask.shape
    big_mask = np.zeros((H + 2 * pad, W + 2 * pad), dtype=bool)
    big_mask[pad : pad + H, pad : pad + W] = mask
    dist = cv2.distanceTransform((~big_mask).astype(np.uint8), cv2.DIST_L2, 5)
    soft = 1.1 * scale / 2
    stroke_a = np.clip((radius * scale + soft - dist) / soft, 0, 1)
    stroke_a = np.where(dist <= radius * scale + soft, stroke_a, 0)

    canvas = np.zeros((H + 2 * pad, W + 2 * pad, 4), dtype=np.float32)
    canvas[..., 0], canvas[..., 1], canvas[..., 2] = STROKE
    canvas[..., 3] = stroke_a * 255

    logo = np.zeros_like(canvas)
    logo[pad : pad + H, pad : pad + W, :3] = hi[..., :3]
    dist_out = cv2.distanceTransform((~mask).astype(np.uint8), cv2.DIST_L2, 5)
    la = np.where(mask, 1.0, np.clip(1 - dist_out / 0.8, 0, 1))
    logo[pad : pad + H, pad : pad + W, 3] = (
        la * np.maximum(hi[..., 3] / 255.0, mask.astype(np.float32)) * 255
    )

    oa = logo[..., 3:4] / 255
    ba = canvas[..., 3:4] / 255
    out_a = oa + ba * (1 - oa)
    out_rgb = (logo[..., :3] * oa + canvas[..., :3] * ba * (1 - oa)) / np.maximum(out_a, 1e-6)
    out = np.clip(np.concatenate([out_rgb, out_a * 255], -1), 0, 255).astype(np.uint8)
    out = cv2.resize(
        out,
        ((W + 2 * pad) // scale, (H + 2 * pad) // scale),
        interpolation=cv2.INTER_AREA,
    )
    Image.fromarray(out, "RGBA").save(dst, optimize=True)


def frame_icon(src: Path, size: int, border_ratio: float = 0.06) -> Image.Image:
    arr = soft_outer(strip_outer_white(to_rgba(src)))
    ys, xs = np.where(arr[..., 3] > 8)
    content = arr[ys.min() : ys.max() + 1, xs.min() : xs.max() + 1]
    scale = 4
    S = size * scale
    bw = max(2, round(size * border_ratio)) * scale
    rad = int(S * 0.22)
    base = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(base)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=rad, fill=STROKE + (255,))
    inner = S - 2 * bw
    ch, cw = content.shape[:2]
    sc = inner / max(ch, cw)
    nh, nw = max(1, int(round(ch * sc))), max(1, int(round(cw * sc)))
    plant = Image.fromarray(
        cv2.resize(content, (nw, nh), interpolation=cv2.INTER_LINEAR), "RGBA"
    )
    ox, oy = bw + (inner - nw) // 2, bw + (inner - nh) // 2
    base.alpha_composite(plant, (ox, oy))
    out = np.array(base)
    mask_img = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask_img).rounded_rectangle([0, 0, S - 1, S - 1], radius=rad, fill=255)
    mask = np.array(mask_img) > 127
    dist = cv2.distanceTransform((~mask).astype(np.uint8), cv2.DIST_L2, 5)
    alpha = np.where(mask, 1.0, np.clip(1.0 - dist / 1.25, 0, 1))
    out[..., 3] = (np.minimum(out[..., 3] / 255.0, alpha) * 255).astype(np.uint8)
    return Image.fromarray(cv2.resize(out, (size, size), interpolation=cv2.INTER_AREA), "RGBA")


def main() -> None:
    OUT_PACK.mkdir(exist_ok=True)
    OUT_WEB.mkdir(parents=True, exist_ok=True)

    for src_name, dst_name, radius in [
        ("01-primary-logo.png", "primary-logo.png", 3.0),
        ("02-horizontal-logo.png", "horizontal-logo.png", 2.2),
        ("03-stacked-logo.png", "stacked-logo.png", 2.0),
        ("06-monochrome-logo.png", "monochrome-logo.png", 2.0),
    ]:
        outline_wordmark(SRC / src_name, OUT_WEB / dst_name, radius=radius)
        Image.open(OUT_WEB / dst_name).save(OUT_PACK / dst_name, optimize=True)
        print("wordmark", dst_name)

    Image.open(OUT_WEB / "horizontal-logo.png").save(OUT_WEB / "logo-header.png")

    for src_name, dst_name, size in [
        ("04-social-icon.png", "social-icon.png", 256),
        ("website-app-icon-320.png", "app-icon.png", 320),
        ("instagram-profile-512.png", "instagram-profile.png", 512),
        ("apple-touch-icon-180.png", "apple-touch-icon.png", 180),
        ("favicon-64.png", "favicon-64.png", 64),
        ("favicon-32.png", "favicon-32.png", 32),
    ]:
        img = frame_icon(SRC / src_name, size)
        img.save(OUT_WEB / dst_name, optimize=True)
        img.save(OUT_PACK / dst_name, optimize=True)
        print("icon", dst_name)

    # Avatar circle with cream ring
    arr = soft_outer(strip_outer_white(to_rgba(SRC / "05-avatar.png")))
    ys, xs = np.where(arr[..., 3] > 8)
    content = arr[ys.min() : ys.max() + 1, xs.min() : xs.max() + 1]
    size, scale = 210, 4
    S = size * scale
    bw = 3 * scale
    base = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(base)
    d.ellipse([0, 0, S - 1, S - 1], fill=STROKE + (255,))
    ch, cw = content.shape[:2]
    sc = (S - 2 * bw) / max(ch, cw)
    nh, nw = int(ch * sc), int(cw * sc)
    base.alpha_composite(
        Image.fromarray(cv2.resize(content, (nw, nh), interpolation=cv2.INTER_LINEAR), "RGBA"),
        ((S - nw) // 2, (S - nh) // 2),
    )
    out = np.array(base)
    yy, xx = np.ogrid[:S, :S]
    circle = (yy - S / 2) ** 2 + (xx - S / 2) ** 2 <= (S / 2 - 1) ** 2
    dist = cv2.distanceTransform((~circle).astype(np.uint8), cv2.DIST_L2, 5)
    alpha = np.where(circle, 1.0, np.clip(1 - dist / 1.2, 0, 1))
    out[..., 3] = (np.minimum(out[..., 3] / 255.0, alpha) * 255).astype(np.uint8)
    avatar = Image.fromarray(cv2.resize(out, (size, size), interpolation=cv2.INTER_AREA), "RGBA")
    avatar.save(OUT_WEB / "avatar.png", optimize=True)
    avatar.save(OUT_PACK / "avatar.png", optimize=True)

    Image.open(OUT_WEB / "favicon-64.png").save(
        OUT_WEB / "favicon.ico", format="ICO", sizes=[(32, 32), (64, 64)]
    )
    Image.open(OUT_WEB / "favicon.ico").save(ROOT / "public" / "favicon.ico")
    Image.open(OUT_WEB / "apple-touch-icon.png").save(ROOT / "public" / "apple-touch-icon.png")
    print("done")


if __name__ == "__main__":
    main()
