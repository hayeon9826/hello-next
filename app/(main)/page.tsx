import { Button, ButtonType } from "hello-design-system";

const code = `
module.exports = {
  //...
  content: [
    // ...
    "./node_modules/hello-design-system/**/*.{js,jsx,ts,tsx}",
  ],
};
`;

export default function MainPage() {
  return (
    <>
      <section className="text-left max-w-4xl px-4">
        <h1 className="text-xl md:text-2xl font-semibold">
          Hello Design System
        </h1>
        <p className="mt-2">
          This package provides tailwind design system components for React
          projects.
        </p>
        <h1 className="font-semibold text-lg md:text-xl mt-8">Installation</h1>
        <p className="mt-2">You need Node.js and Tailwind CSS installed.</p>
        <ol className="mt-4 list-decimal space-y-4 text-sm pl-4">
          <li>Install the package in your project directory with:</li>
          <pre className="bg-gray-100 p-2 text-sm">
            <code>
              // with npm
              <br />
              npm install -D hello-design-system
              <br />
              <br />
              // with yarn
              <br />
              yarn add --dev hello-design-system
            </code>
          </pre>
          <li>
            Then add hello-design-system to your tailwind.config.js files:
          </li>
          <pre
            className="bg-gray-100 p-2 text-sm"
            dangerouslySetInnerHTML={{ __html: code }}
          />
        </ol>
      </section>
    </>
  );
}
