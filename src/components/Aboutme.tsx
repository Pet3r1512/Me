import { useRef } from "react";
import { useInView } from "motion/react";
import Info from "./Products/Info";
import Data from "./Products/Data";

export default function Aboutme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center gap-y-12 pb-24 lg:pb-0"
    >
      <div className="flex flex-col items-center gap-y-10">
        <h1
          style={{
            transform: isInView
              ? "none"
              : window.innerWidth >= 1024
                ? "translateY(200px)"
                : "none", // Adjust the breakpoint as needed
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:text-xl lg:text-2xl font-bold"
        >
          About <span className="text-secondary">Me</span>
        </h1>
        <p
          style={{
            transform: isInView
              ? "none"
              : window.innerWidth >= 1024
                ? "translateY(-200px)"
                : "none", // Adjust the breakpoint as needed
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="font-bold text-center text-3xl md:text-5xl lg:text-6xl"
        >
          <span>Who is</span>{" "}
          <a
            href="https://www.deviniter.site/"
            target="_blank"
            className="text-primary underline"
          >
            Peter Pham
          </a>
        </p>
      </div>
      <div
        style={{
          transform: isInView
            ? "none"
            : window.innerWidth >= 1024
              ? "translateY(200px)"
              : "none", // Adjust the breakpoint as needed
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
        }}
        className="flex flex-col gap-y-12 mt-8"
      >
        <p className="lg:text-xl font-semibold">
          {`I'm Peter`}, a passionate problem-solver and perpetual learner who
          thrives on creating innovative solutions. With a foundation in{" "}
          <span className="text-secondary">Front-end </span>
          development, I take pride in my ability to bridge technical expertise
          with creativity to develop impactful projects. I aspire to grow as a
          <span className="text-primary">Software Engineer</span>, building
          robust applications that solve real-world challenges while staying at
          the forefront of emerging technologies. My curiosity drives me to
          explore areas like scalable{" "}
          <span className="text-teal-400">Back-end systems</span>,{" "}
          <span className="text-purple-700">Testing</span> and{" "}
          <span className="text-indigo-500">UI/UX design</span>.
        </p>
        <p className="lg:text-xl font-semibold">
          Beyond my technical pursuits, I value collaboration and sharing
          knowledge, whether it's through mentoring peers or contributing to
          open-source projects. Fun fact: my Vietnamese name, Phong, means{" "}
          <span className="text-primary">wind</span>, symbolizing adaptability
          and a knack for navigating challenges with ease and grace.
        </p>
      </div>
    </section>
  );
}
