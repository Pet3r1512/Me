import { useRef } from "react";
import { useInView } from "motion/react";
import Info from "./Products/Info";
import Data from "./Products/Data";

export default function LatestProduct() {
  const ref = useRef(null);
  const isLatestProductInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center gap-y-12 pb-24 lg:pb-0"
    >
      <div className="flex flex-col items-center gap-y-10">
        <h1
          style={{
            transform: isLatestProductInView
              ? "none"
              : window.innerWidth >= 1024
                ? "translateY(200px)"
                : "none", // Adjust the breakpoint as needed
            opacity: isLatestProductInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:text-xl lg:text-2xl font-bold"
        >
          My <span className="text-secondary">Latest Product</span>
        </h1>
        <p
          style={{
            transform: isLatestProductInView
              ? "none"
              : window.innerWidth >= 1024
                ? "translateY(-200px)"
                : "none", // Adjust the breakpoint as needed
            opacity: isLatestProductInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="font-bold text-center text-3xl md:text-5xl lg:text-6xl"
        >
          <span>Introducing</span>{" "}
          <a
            href="https://www.deviniter.site/"
            target="_blank"
            className="text-primary underline"
          >
            DevIniter
          </a>
        </p>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <Info />
        <Data />
      </div>
    </section>
  );
}
