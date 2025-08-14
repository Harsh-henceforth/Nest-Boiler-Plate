export const authRoutePatterns: RegExp[] = [
  /^\/home(\/.*)?$/,
  /^\/dashboard(\/.*)?$/,
];

export function isAuthRoute(pathname: string): boolean {
  return authRoutePatterns.some((pattern) => pattern.test(pathname));
}