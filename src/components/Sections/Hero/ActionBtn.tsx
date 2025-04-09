import { ArrowRightIcon, DownloadIcon } from "lucide-react";

export default function ActionBtn() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#projects"
        className="group px-8 py-3 rounded-md relative overflow-hidden flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 group-hover:scale-105"></div>
        <span className="relative text-white flex items-center">
          View Projects <ArrowRightIcon size={18} className="ml-2" />
        </span>
      </a>
      <a
        href="#"
        className="group px-8 py-3 rounded-md relative overflow-hidden flex items-center justify-center bg-[#222] dark:bg-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#00000000,45%,#ffffff50,55%,#00000000)] dark:bg-[linear-gradient(110deg,#ffffff00,45%,#adb5bd,55%,#ffffff00)] animate-background-shine"></div>
        <span className="relative text-white dark:text-gray-900 flex items-center">
          Download CV <DownloadIcon size={18} className="ml-2" />
        </span>
      </a>
    </div>
  );
}
