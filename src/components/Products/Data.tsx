import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const animateValue = (
  start: number,
  end: number,
  duration: number,
  setValue: (value: number) => void
) => {
  const range = end - start;
  const startTime = Date.now();

  const step = () => {
    const now = Date.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(start + range * progress);

    setValue(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  step();
};

export default function Data() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [weeklyDownloads, setWeeklyDownloads] = useState<number | null>(null);
  const [allTimeDownloads, setAllTimeDownloads] = useState<number | null>(null);
  const [totalStars, setTotalStars] = useState<number>(11);
  const [latestVer, setLatestVer] = useState("1.1.0");
  const [templates, setTemplates] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const token = import.meta.env.VITE_TOKEN;

      try {
        const statsResponse = await fetch(
          "https://registry.npmjs.org/@deviniter/cli"
        );
        const weeklyResponse = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/@deviniter/cli"
        );
        const allTimeDownloadResponse = await fetch(
          "https://api.npmjs.org/downloads/point/2020-10-01:3000-10-31/@deviniter/cli"
        );
        const webStarResponse = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const cliStarResponse = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter_CLI",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if responses are successful
        if (
          !statsResponse.ok ||
          !weeklyResponse.ok ||
          !allTimeDownloadResponse.ok ||
          !webStarResponse.ok ||
          !cliStarResponse.ok
        ) {
          //   throw new Error("Failed to fetch one or more stats");
        }

        const statsData = await statsResponse.json();
        const weeklyData = await weeklyResponse.json();
        const allTimeData = await allTimeDownloadResponse.json();
        const webStarData = await webStarResponse.json();
        const cliStarData = await cliStarResponse.json();

        setLatestVer(statsData["dist-tags"].latest);

        if (isInView) {
          // Check and animate stats if in view
          if (weeklyData && weeklyData.downloads) {
            animateValue(0, weeklyData.downloads, 2000, setWeeklyDownloads);
          }

          if (allTimeData && allTimeData.downloads) {
            animateValue(0, allTimeData.downloads, 2000, setAllTimeDownloads);
          }

          animateValue(0, 2, 2000, setTemplates);

          const totalStarsCount =
            (webStarData.stargazers_count + cliStarData.stargazers_count) | 0;
          animateValue(0, totalStarsCount || 11, 2000, setTotalStars);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (isInView) {
      fetchStats();
    }
  }, [isInView]);

  useEffect(() => {
    console.log("isInView: ", isInView);
  }, [isInView]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : window.innerWidth >= 1024
            ? "translateX(200px)"
            : "none", // Adjust the breakpoint as needed
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
      }}
      className="md:w-1/2 rounded-xl border-4 border-primary/30 p-5 flex flex-col gap-y-5"
    >
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">📅 Latest Release: </p>
        <p className="font-semibold text-blue-500 lg:text-lg lg:pt-0.5">
          v{latestVer}
        </p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">📊 All time downloads: </p>
        <p className="text-primary font-semibold lg:text-lg lg:pt-0.5">
          {allTimeDownloads !== null ? allTimeDownloads : "0"}
        </p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">7️⃣ Last week downloads: </p>
        <p className="text-primary font-semibold lg:text-lg lg:pt-0.5">
          {weeklyDownloads !== null ? weeklyDownloads : "0"}
        </p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">⭐ Total Stars Earned: </p>
        <p className="text-secondary font-semibold lg:text-lg lg:pt-0.5">
          {totalStars}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-y-5">
        <p className="lg:text-xl font-semibold">
          💚 Total Templates:{" "}
          <span className="text-secondary font-semibold lg:text-lg lg:pt-0.5">
            {templates}
          </span>
        </p>
        <ul className="lg:text-xl px-5 list-disc list-inside space-y-3">
          <li className="space-y-2">
            <span className="font-medium">Next.js:</span>{" "}
            <p>Next.js, TypeScript, Tailwind, Shadcn, Prisma, Vitest</p>
          </li>
          <li className="space-y-2">
            <span className="font-medium">Vite:</span>{" "}
            <p>Vite, React.js, TypeScript, Tailwind, Vitest</p>
          </li>
        </ul>
      </div>
      <a
        href="https://github.com/Pet3r1512/DevIniter"
        target="_blank"
        className="dark:bg-secondary/90 bg-secondary/80 p-2.5 rounded-xl mt-auto w-fit text-black font-semibold lg:hover:bg-secondary transition-all duration-200 ease-linear"
      >
        Give me a star 🌠
      </a>
    </section>
  );
}
