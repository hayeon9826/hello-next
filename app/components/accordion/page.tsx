"use client";

import CodeBlock from "@/lib/components/CodeBlock";
import { useIsClient } from "@/lib/hooks/useIsClient";

import { Accordion } from "hello-design-system";

const code = `
  // Default usage
  <Accordion
    title="Lorem ipsum dolor sit amet,.."
    content="Cras id pharetra leo. Phasellus nec pretium est..."
    id="accordion-1"
   />

  // Types
  interface AccordionProps {
    rightIcon?: ReactNode;
    title: string;
    content: string;
    id: string;
    defaultOpen?: boolean;
  }
    
`;

export default function AccordionPage() {
  const { isClient } = useIsClient();

  return (
    <section className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Accordion</h1>
      {isClient && <CodeBlock code={code} />}
      <div className="flex flex-col gap-0">
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          content="Cras id pharetra leo. Phasellus nec pretium est. Duis congue quam et rhoncus semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra sit amet nunc non congue. Maecenas sagittis tortor sem, eu volutpat ante volutpat sit amet."
          id="accordion-1"
        />
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          content="Cras id pharetra leo. Phasellus nec pretium est. Duis congue quam et rhoncus semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra sit amet nunc non congue. Maecenas sagittis tortor sem, eu volutpat ante volutpat sit amet."
          id="accordion-2"
        />
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          content="Cras id pharetra leo. Phasellus nec pretium est. Duis congue quam et rhoncus semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra sit amet nunc non congue. Maecenas sagittis tortor sem, eu volutpat ante volutpat sit amet."
          id="accordion-3"
        />
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          content="Cras id pharetra leo. Phasellus nec pretium est. Duis congue quam et rhoncus semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis viverra sit amet nunc non congue. Maecenas sagittis tortor sem, eu volutpat ante volutpat sit amet."
          id="accordion-4"
        />
      </div>
    </section>
  );
}
