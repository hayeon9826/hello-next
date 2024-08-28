"use client";

import usePrismJs from "@/lib/hooks/usePrismJs";
import { Button, ButtonType, Modal } from "hello-design-system";
import { useState } from "react";

const code = `
  // Default usage
  <Modal
    title="Lorem ipsum dolor sit amet"
    isOpen={isOpen}
    closeModal={() => {
      setIsOpen(false);
    }}
  >
    <div className="mt-4 text-gray-500 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </div>
  </Modal>
  
`;

export default function ModalPage() {
  usePrismJs();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-6 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Modal</h1>
      <pre className="bg-slate-100 pb-4 px-2 text-sm text-wrap rounded-md mb-8 text-gray-700">
        <code className="language-js">{code}</code>
      </pre>
      <div>
        <Button
          label="Open Modal"
          type={ButtonType.BLACK_SMALL_ROUNDED}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Modal
        title="Lorem ipsum dolor sit amet"
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      >
        <div className="mt-4 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ante urna, semper quis finibus a, pellentesque vitae lectus. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Nulla tellus
          erat, pharetra in dui vitae, dignissim laoreet nunc. Praesent ultrices
          ullamcorper libero, a tincidunt nisl facilisis ac. Duis vitae purus
          risus. Morbi eu dui in quam laoreet varius at lacinia diam. Duis
          consequat bibendum justo, sit amet rutrum enim eleifend eget. Duis
          nisi est, tincidunt ut placerat vitae, lacinia et ligula. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Curabitur quam eros, pharetra ac aliquet non, scelerisque quis
          urna.
        </div>
      </Modal>
    </section>
  );
}
