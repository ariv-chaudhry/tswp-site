const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const publicBasePath = base;

export function withBasePath(path: string): string {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  if (!path.startsWith("/")) return path;
  if (base && path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
