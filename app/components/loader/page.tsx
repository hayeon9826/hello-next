"use client";

import usePrismJs from "@/lib/hooks/usePrismJs";
import { Loader } from "hello-design-system";

const code = `
  // Default usage
  <Loader />

  // Examples
  <ListLoader />
  <GridLoader />
  <FullPageLoader />
  <ColorLoader />
  
`;

export default function LoaderPage() {
  usePrismJs();

  return (
    <>
      <section className="flex flex-col gap-6 justify-center align-middle">
        <h1 className="font-semibold text-lg md:text-xl">Loader</h1>
        <pre className="bg-slate-100 pb-4 px-2 text-sm text-wrap rounded-md mb-8 text-gray-700">
          <code className="language-js">{code}</code>
        </pre>
        <Loader />
      </section>
    </>
  );
}
