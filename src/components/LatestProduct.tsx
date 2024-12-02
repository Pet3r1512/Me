import { useRef } from "react";
import { useInView } from "motion/react";

export default function LatestProduct() {
  const ref = useRef(null);
  const isLatestProductInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className="min-h-screen flex flex-col items-center justify-center gap-y-12">
        <h1 className="md:text-xl lg:text-2xl font-bold">
          My <span className="text-secondary">Latest Product</span>
        </h1>
        <p className="font-bold text-4xl md:text-5xl lg:text-7xl">
          <span
            style={{
              transform: isLatestProductInView ? "none" : "translateX(-200px)",
              opacity: isLatestProductInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Introducing
          </span>{" "}
          <a
            href="https://www.deviniter.site/"
            target="_blank"
            className="text-primary underline"
            style={{
              transform: isLatestProductInView ? "none" : "translateX(200px)",
              opacity: isLatestProductInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            DevIniter
          </a>
        </p>
      </div>
    </section>
  );
}
