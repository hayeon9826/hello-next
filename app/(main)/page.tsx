const code = `/* globals.css */
@import "hello-design-system/build/build.css";
`;

const rootCode = `import 'globals.css'
`;

const legacyCode = `// tailwind.config.js
module.exports = {
  content: [
    // your existing paths...
    "./node_modules/hello-design-system/**/*.{js,jsx,ts,tsx}",
  ],
  // other settings...
};
`;

export default function MainPage() {
  return (
    <>
      <section className="text-left max-w-4xl px-4 py-10">
        <h1 className="text-xl md:text-2xl font-semibold">
          Hello Design System
        </h1>
        <p className="mt-2">
          This package provides Tailwind CSS-based design system components for
          React projects.
        </p>
        <h1 className="font-semibold text-lg md:text-xl mt-8">Installation</h1>
        <p className="mt-2">
          Ensure that you have Node.js ({">"}=18.17.0) and Tailwind CSS
          installed in your project.
        </p>

        <h1 className="font-semibold text-lg md:text-xl mt-8">
          For Version 1.1.5 or Higher ({">"}= 1.1.5)
        </h1>
        <ol className="mt-4 list-decimal space-y-4 text-sm pl-4">
          <li>Install the package in your project directory:</li>
          <pre className="bg-gray-100 p-2 text-sm text-wrap">
            <code>
              # with npm
              <br />
              npm install -D hello-design-system
              <br />
              <br />
              # with yarn
              <br />
              yarn add --dev hello-design-system
            </code>
          </pre>
          <li>
            Add <b>hello-design-system</b> styles to your <b>globals.css</b>{" "}
            file:
          </li>
          <p>
            Open your globals.css (or any global CSS file) and add the following
            line:
          </p>
          <pre
            className="bg-gray-100 p-2 text-sm text-wrap"
            dangerouslySetInnerHTML={{ __html: code }}
          />
          <li>Import your global.css to the root file</li>
          <pre
            className="bg-gray-100 p-2 text-sm text-wrap"
            dangerouslySetInnerHTML={{ __html: rootCode }}
          />
        </ol>

        <h1 className="font-semibold text-lg md:text-xl mt-12">
          (LEGACY) For Version 1.1.4 or Lower ({"<"}= 1.1.4)
        </h1>
        <ol className="mt-4 list-decimal space-y-4 text-sm pl-4">
          <li>Install the package in your project directory:</li>
          <pre className="bg-gray-100 p-2 text-sm text-wrap">
            <code>
              # with npm
              <br />
              npm install -D hello-design-system
              <br />
              <br />
              # with yarn
              <br />
              yarn add --dev hello-design-system
            </code>
          </pre>
          <li>Add hello-design-system to your tailwind.config.js files:</li>
          <p>
            Include hello-design-system in the content array of your
            tailwind.config.js file to ensure Tailwind scans the component
            files:
          </p>
          <pre
            className="bg-gray-100 p-2 text-sm text-wrap"
            dangerouslySetInnerHTML={{ __html: legacyCode }}
          />
        </ol>
        <h2 className="font-bold text-lg mt-8">Notes</h2>
        <p className="mt-2">
          Make sure your project is properly configured to use Tailwind CSS. If
          you're new to Tailwind, please refer to the{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com/docs/installation"
            className="underline"
          >
            Tailwind CSS Documentation for the setup guide.
          </a>
        </p>
        <h2 className="font-bold text-lg mt-8">Repository</h2>
        <p className="mt-2">
          For more details and the latest updates, visit the{" "}
          <a
            className="underline text-rose-600"
            target="_blank"
            href="https://www.npmjs.com/package/hello-design-system"
          >
            npm repository for hello-design-system.
          </a>
        </p>
      </section>
    </>
  );
}
