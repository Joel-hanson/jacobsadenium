/** Prefix public asset paths with the Next.js basePath (required for next/image). */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
