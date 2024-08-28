"use client";

import usePrismJs from "@/lib/hooks/usePrismJs";
import { Button, ButtonType } from "hello-design-system";

const code = `
  // Default usage
  <Button label="Label" />

  // Examples
  <Button type={ButtonType.BLACK_LARGE} label="BLACK_LARGE" />

  <Button
    type={ButtonType.PRIMARY_SMALL_OUTLINE}
    label="PRIMARY_SMALL_OUTLINE"
  />

  <Button type={ButtonType.PRIMARY_SMALL} label="PRIMARY_SMALL" />

  // Types
  enum ButtonType {
    PRIMARY_LARGE = "PRIMARY_LARGE",
    PRIMARY_SMALL = "PRIMARY_SMALL",
    PRIMARY_LARGE_OUTLINE = "PRIMARY_LARGE_OUTLINE",
    PRIMARY_SMALL_OUTLINE = "PRIMARY_SMALL_OUTLINE",
    PRIMARY_LARGE_ROUNDED = "PRIMARY_LARGE_ROUNDED",
    PRIMARY_SMALL_ROUNDED = "PRIMARY_SMALL_ROUNDED",
    BLACK_LARGE = "BLACK_LARGE",
    BLACK_LARGE_OUTLINE = "BLACK_LARGE_OUTLINE",
    BLACK_SMALL_ROUNDED = "BLACK_SMALL_ROUNDED",
    GRAY_LARGE = "GRAY_LARGE"
  }

`;

export default function ButtonPage() {
  usePrismJs();

  return (
    <section className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Button</h1>
      <pre className="bg-slate-100 pb-4 px-2 text-xs text-wrap rounded-md mb-8 text-gray-700">
        <code className="language-js">{code}</code>
      </pre>
      <Button label="Label" />
      <div>
        <Button label="Primary true" primary={true} />
      </div>
      <div>
        <Button type={ButtonType.BLACK_LARGE} label="BLACK_LARGE" />
      </div>
      <div>
        <Button
          type={ButtonType.BLACK_LARGE_OUTLINE}
          label="BLACK_LARGE_OUTLINE"
        />
      </div>
      <div>
        <Button
          type={ButtonType.BLACK_SMALL_ROUNDED}
          label="BLACK_SMALL_ROUNDED"
        />
      </div>
      <div>
        <Button type={ButtonType.GRAY_LARGE} label="GRAY_LARGE" />
      </div>
      <div>
        <Button type={ButtonType.PRIMARY_LARGE} label="PRIMARY_LARGE" />
      </div>
      <div>
        <Button
          type={ButtonType.PRIMARY_LARGE_OUTLINE}
          label="PRIMARY_LARGE_OUTLINE"
        />
      </div>
      <div>
        <Button
          type={ButtonType.PRIMARY_LARGE_ROUNDED}
          label="PRIMARY_LARGE_ROUNDED"
        />
      </div>
      <div>
        <Button type={ButtonType.PRIMARY_SMALL} label="PRIMARY_SMALL" />
      </div>
      <div>
        <Button
          type={ButtonType.PRIMARY_SMALL_OUTLINE}
          label="PRIMARY_SMALL_OUTLINE"
        />
      </div>
      <div>
        <Button
          type={ButtonType.PRIMARY_SMALL_ROUNDED}
          label="PRIMARY_SMALL_ROUNDED"
        />
      </div>
    </section>
  );
}
