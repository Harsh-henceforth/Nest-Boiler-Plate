'use client';
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import AuthLayout from "./AuthLayout";
import Layout from "./Layout";
import pkg from '../../package.json';
import { parseCookies, setCookie, destroyCookie } from 'nookies'


const cookies = parseCookies()
console.log({ cookies })

setCookie(null, 'fromClient', 'value', {
  maxAge: 30 * 24 * 60 * 60,
  path: '/',
})

type Props = {
  children: ReactNode;
};
export const PROJECT_NAME = pkg.name;
console.log(PROJECT_NAME, 'PROJECT_NAME')

const STATIC_TOKEN = true;

const authRoutePatterns = [/^\/home(\/.*)?$/, /^\/dashboard(\/.*)?$/];

const publicRoutes = ["/login"];

export default function LayoutSelector({ children }: Props) {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (!STATIC_TOKEN) {
      localStorage.clear();
      sessionStorage.clear();
    }
  }, []);

  const isAuthRoute = authRoutePatterns.some((pattern) => pattern.test(pathname));
  const isPublicRoute = publicRoutes.includes(pathname);

  if (!STATIC_TOKEN && isAuthRoute) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-semibold mb-2">Access Denied</h1>
        <p className="text-gray-600">No valid token found. Please log in.</p>
      </div>
    );
  }

  if (!isAuthRoute && !isPublicRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>404 - Unknown layout route</p>
      </div>
    );
  }

  return isAuthRoute ? (
    <AuthLayout>{children}</AuthLayout>
  ) : (
    <Layout>{children}</Layout>
  );
}
