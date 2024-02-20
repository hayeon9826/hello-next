import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <section className="max-w-2xl mx-auto">{children}</section>;
}
