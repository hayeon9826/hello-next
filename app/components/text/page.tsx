"use client";

import CodeBlock from "@/lib/components/CodeBlock";
import { useIsClient } from "@/lib/hooks/useIsClient";
import { Text, TextType } from "hello-design-system";

const code = `
  // Default usage
  <Text label={TEXT_VALUE} />

  // Examples
  <Text label={TEXT_VALUE} type={TextType.TITLE_LARGE} />

  <Text label={TEXT_VALUE} type={TextType.TITLE} />
  
  <Text label={TEXT_VALUE} type={TextType.SUBTITLE} />
   
`;

const TEXT_VALUE = "가나다라마바사 1234567890 ~!@#$%^&*()_";

export default function TextPage() {
  const { isClient } = useIsClient();

  return (
    <section className="flex flex-col gap-6 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Text</h1>
      {isClient && <CodeBlock code={code} />}
      <Text label={TEXT_VALUE} type={TextType.TITLE_LARGE} />
      <Text label={TEXT_VALUE} type={TextType.TITLE} />
      <Text label={TEXT_VALUE} type={TextType.SUBTITLE} />
      <Text label={TEXT_VALUE} type={TextType.DESC} />
      <Text label={TEXT_VALUE} type={TextType.GRAY_DESC} />
      <Text label={TEXT_VALUE} type={TextType.PRIMARY_DESC} />
      <Text label={TEXT_VALUE} type={TextType.SMALL} />
      <Text label={TEXT_VALUE} type={TextType.GRAY_SMALL} />
      <Text label={TEXT_VALUE} type={TextType.PRIMARY_SMALL} />
    </section>
  );
}
