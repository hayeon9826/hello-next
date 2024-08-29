"use client";

import CodeBlock from "@/lib/components/CodeBlock";
import { useIsClient } from "@/lib/hooks/useIsClient";
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
  const { isClient } = useIsClient();

  return (
    <>
      <section className="flex flex-col gap-6 justify-center align-middle">
        <h1 className="font-semibold text-lg md:text-xl">Loader</h1>
        {isClient && <CodeBlock code={code} />}
        <Loader />
      </section>
    </>
  );
}
