"use client";

import usePrismJs from "../hooks/usePrismJs";

export default function CodeBlock({ code }: { code: string }) {
  usePrismJs();

  return (
    <pre className="bg-slate-100 pb-4 px-2 text-sm text-wrap rounded-md mb-8 text-gray-700">
      <code className="language-js">{code}</code>
    </pre>
  );
}
