"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-rose-500 text-white flex flex-col justify-center z-10 rounded-full w-10 h-10 fixed md:hidden right-4 bottom-4 shadow"
      >
        <AiOutlineMenu className="m-auto text-lg" />
      </button>
      <aside
        id="sidebar"
        className={cn(
          "fixed top-0 left-0 z-40 md:w-64 h-screen w-full hidden sm:block ",
          {
            "!block": open,
          }
        )}
        aria-label="Sidebar"
      >
        <div className="min-h-full px-3 py-4 overflow-y-scroll bg-gray-800 relative">
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-600 text-white flex flex-col justify-center z-10 rounded-full w-10 h-10 absolute md:hidden right-4 top-4 shadow"
          >
            <AiOutlineClose className="m-auto text-lg" />
          </button>
          <ul className="space-y-2 font-medium text-base">
            <li>
              <Link
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                href="/components/button"
                className={cn(
                  "flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("button"),
                  }
                )}
              >
                <span className="ms-3">Button</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/textInput"
                className={cn(
                  "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("textInput"),
                  }
                )}
              >
                <span className="ms-3">Text Input</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/text"
                className={cn(
                  "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname === "/components/text",
                  }
                )}
              >
                <span className="ms-3">Text</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/modal"
                className={cn(
                  "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("modal"),
                  }
                )}
              >
                <span className="ms-3">Modal</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/loader"
                className={cn(
                  "flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("loader"),
                  }
                )}
              >
                <span className="ms-3">Loader</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/accordion"
                className={cn(
                  "flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("accordion"),
                  }
                )}
              >
                <span className="ms-3">Accordion</span>
              </Link>
            </li>
            <li>
              <Link
                href="/components/carousel"
                className={cn(
                  "flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("carousel"),
                  }
                )}
              >
                <span className="ms-3">Carousel</span>
              </Link>
            </li>
            <li>
              <Link
                href="/foundation/color"
                className={cn(
                  "flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group font-light",
                  {
                    underline: pathname?.includes("color"),
                  }
                )}
              >
                <span className="ms-3">Color</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <section className="sm:pl-64">{children}</section>
    </>
  );
}
