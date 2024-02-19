"use client";

import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="min-h-full px-3 py-4 overflow-y-scroll bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group",
                  {
                    underline: pathname === "/",
                  }
                )}
              >
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/button"
                className={cn(
                  "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group",
                  {
                    underline: pathname?.includes("button"),
                  }
                )}
              >
                <span className="ms-3">Button</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <section className="sm:pl-64">{children}</section>
    </>
  );
}
