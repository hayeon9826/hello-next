"use client";

import { ColorTypes, TextType, Text } from "hello-design-system";
import cn from "classnames";
import usePrismJs from "@/lib/hooks/usePrismJs";

const code = `
  // Types
  const ColorTypes: {
    Primary50: string;
    Primary300: string;
    Primary400: string;
    Primary: string;
    Primary600: string;
    Primary700: string;
    Primary800: string;
    BlackOpacity5: string;
    BlackOpacity25: string;
    Black: string;
    Gray50: string;
    Gray100: string;
    Gray200: string;
    Gray300: string;
    Gray400: string;
    Gray: string;
    Gray700: string;
    Gray800: string;
    Gray900: string;
    White: string;
  };
  
`;

export default function ColorPage() {
  usePrismJs();

  return (
    <section className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Color</h1>
      <pre className="bg-slate-100 pb-4 px-2 text-sm text-wrap rounded-md mb-8 text-gray-700">
        <code className="language-js">{code}</code>
      </pre>
      <div className="flex gap-4 flex-wrap">
        {Object.entries(ColorTypes)?.map(([key, value]) => (
          <div className="flex flex-col gap-2 pt-4" key={key}>
            <div className={cn("rounded-md w-24 h-32 shadow", value)} />
            <Text label={key} type={TextType.SMALL} className="text-center" />
          </div>
        ))}
      </div>
    </section>
  );
}
