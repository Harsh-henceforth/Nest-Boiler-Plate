import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {children}
    </div>
  );
}
