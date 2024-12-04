import { useInView } from "motion/react";
import { useRef } from "react";

export default function Info() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : window.innerWidth >= 1024
            ? "translateX(-200px)"
            : "none", // Adjust the breakpoint as needed
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
      }}
      className="md:w-1/2 rounded-xl border-4 border-primary/30 p-5 flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-2.5">
        <p className="font-semibold lg:text-lg">🎯Missions: </p>
        <p className="lg:text-xl px-2.5">
          <span className="text-primary font-bold">DevIniter </span>
          streamlines project setup, allowing developers to focus on building
          and enhancing their products efficiently.
        </p>
      </div>
      <div className="flex flex-col gap-y-2.5">
        <p className="font-semibold lg:text-lg">🗂️Project Structure: </p>
        <p className="px-2.5 lg:text-lg">Explore the two main repositories:</p>
        <ul className="lg:text-xl px-5 list-disc list-inside space-y-3">
          <li>
            <span className="font-medium">CLI Tool:</span>{" "}
            <a
              href="https://github.com/Pet3r1512/DevIniter_CLI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-semibold lg:hover:underline transition duration-150 ease-linear"
            >
              DevIniter CLI
            </a>{" "}
            – Scaffold templates directly from your terminal for streamlined
            development.
          </li>
          <li>
            <span className="font-medium">Official Website:</span>{" "}
            <a
              href="https://github.com/Pet3r1512/DevIniter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-semibold lg:hover:underline transition duration-150 ease-linear"
            >
              DevIniter
            </a>{" "}
            – Your go-to platform to discover and learn about the product.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-2.5">
        <p className="font-semibold lg:text-lg">⚙️Built With: </p>
        <ul className="lg:text-xl px-5 list-disc list-inside space-y-3">
          <li>
            <span className="font-medium">CLI Tool:</span>{" "}
            <p>TypeScript, tsup, Changeset, inquirer, execa, Vitest</p>
          </li>
          <li>
            <span className="font-medium">Official Website:</span>{" "}
            <p>
              Next.js, TypeScript, Tailwind, Shadcn, Aceternity, Zustand, Nextra
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
