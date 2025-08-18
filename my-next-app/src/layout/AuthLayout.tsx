// libs
import { ReactNode, Suspense } from "react";

// components
import Navbar from "@/components/customComponent/navbar";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 py-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
