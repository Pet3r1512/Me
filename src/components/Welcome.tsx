import { useRef } from "react";
import { useInView } from "motion/react";

export default function Welcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} id="container">
      <main className="">
        <section
          id="hero"
          className="flex flex-col gap-y-12 items-center justify-center min-h-[100dvh] lg:min-h-screen"
        >
          <h1
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="md:text-xl lg:text-2xl font-bold cursor-default flex items-center gap-x-1.5 select-none"
          >
            <span className="animate-wave inline-block">👋</span>Welcome to my{" "}
            <span className="text-primary"> Personal Website</span>
          </h1>
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold relative flex items-center gap-x-3">
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Hi, <span className="text-secondary">I'm </span>
            </p>
            <div className="relative text-4xl md:text-5xl lg:text-7xl font-bold">
              Peter Pham
              <div
                style={{
                  width: !isInView ? "0" : "340px",
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="absolute bg-secondary/75 h-1 right-0"
              ></div>
            </div>
          </div>
          <p className="max-w-3xl font-semibold md:text-lg lg:text-xl text-center">
            I am a <span className="text-primary">Software Engineer </span>
            specializing in{" "}
            <span className="text-secondary">Frontend Development</span>, with a
            strong focus on building dynamic and user-friendly applications
            using <span className="text-blue-500">React.js</span>,{" "}
            <span className="text-purple-500">Vite</span>.
          </p>
        </section>
      </main>
    </div>
  );
}
