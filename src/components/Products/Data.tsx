import { useEffect, useState } from "react";


export default function Data() {
  const [weeklyDownloads, setWeeklyDownloads] = useState<number | null>(null);
  const [alltimeDownloads, setAlltimeDownloads] = useState<number | null>(null);
  const [totalStar, setTotalStar] = useState<number>(0);
  const [latestVer, setLatestVer] = useState("1.1.0");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await fetch("https://registry.npmjs.org/@deviniter/cli");
        const weeklyResponse = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/@deviniter/cli"
        );
        const alltimedownload = await fetch(
          "https://api.npmjs.org/downloads/point/2024-10-01:3000-01-01/@deviniter/cli"
        );
        const webstar = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter"
        );
        const clistar = await fetch(
          "https://api.github.com/repos/Pet3r1512/DevIniter_CLI"
        );
        if (
          !stats.ok ||
          !weeklyResponse.ok ||
          !alltimedownload.ok ||
          !webstar.ok ||
          !clistar.ok
        ) {
          throw new Error(`Error`);
        }
        const statsdata = await stats.json();
        const weeklydata = await weeklyResponse.json();
        const alltimedata = await alltimedownload.json();
        const webstardata = await webstar.json();
        const clistardata = await clistar.json();

        console.log(webstardata.stargazers_count);
        setLatestVer(statsdata["dist-tags"].latest);
        setWeeklyDownloads(weeklydata.downloads);
        setAlltimeDownloads(alltimedata.downloads);
        setTotalStar(
          webstardata.stargazers_count + clistardata.stargazers_count
        );
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="w-1/2 rounded-xl border-4 border-primary/30 p-5 flex flex-col gap-y-5">
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">📅Latest Release: </p>
        <p className="font-semibold text-blue-500 lg:text-lg">v{latestVer}</p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">📊All time downloads: </p>
        <p className="text-primary font-semibold lg:text-lg">
          {alltimeDownloads}
        </p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">7️⃣Last week downloads: </p>
        <p className="text-primary font-semibold lg:text-lg">
          {weeklyDownloads}
        </p>
      </div>
      <div className="flex items-center gap-x-1.5">
        <p className="lg:text-xl font-semibold">⭐Total Stars Earned: </p>
        <p className="text-secondary font-semibold lg:text-lg">{totalStar}</p>
      </div>
    </section>
  );
}
