import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react"; // Make sure to install framer-motion

const animateValue = (
  start: number,
  end: number,
  duration: number,
  setValue: (value: number) => void
) => {
  const range = end - start;
  const startTime = Date.now();
  const endTime = startTime + duration;

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
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const [weeklyDownloads, setWeeklyDownloads] = useState<number | null>(null);
  const [allTimeDownloads, setAllTimeDownloads] = useState<number | null>(null);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [latestVer, setLatestVer] = useState("1.1.0");
  const [templates, setTemplates] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await fetch("https://registry.npmjs.org/@deviniter/cli");
        const weeklyResponse = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/@deviniter/cli"
        );
        const allTimeDownload = await fetch(
          "https://api.npmjs.org/downloads/point/2024-10-01:3000-01-01/@deviniter/cli"
        );
        const webStar = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter"
        );
        const cliStar = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter_CLI"
        );

        if (
          !stats.ok ||
          !weeklyResponse.ok ||
          !allTimeDownload.ok ||
          !webStar.ok ||
          !cliStar.ok
        ) {
          throw new Error(`Error fetching stats`);
        }

        const statsData = await stats.json();
        const weeklyData = await weeklyResponse.json();
        const allTimeData = await allTimeDownload.json();
        const webStarData = await webStar.json();
        const cliStarData = await cliStar.json();

        setLatestVer(statsData["dist-tags"].latest);

        if (isInView) {
          // Animate stats
          animateValue(0, weeklyData.downloads, 2000, setWeeklyDownloads);
          animateValue(0, allTimeData.downloads, 2000, setAllTimeDownloads);
          animateValue(0, 2, 2000, setTemplates);
          animateValue(
            0,
            webStarData.stargazers_count + cliStarData.stargazers_count,
            2000,
            setTotalStars
          );
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (isInView) {
      fetchStats();
    }
  }, [isInView]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section
      ref={ref}
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
    </section>
  );
}
