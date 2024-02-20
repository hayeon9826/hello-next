"use client";

import { ColorTypes, TextType, Text } from "hello-design-system";
import cn from "classnames";

export default function ColorPage() {
  return (
    <section className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Color</h1>
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
