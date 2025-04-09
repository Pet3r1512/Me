import ActionBtn from "./ActionBtn";
import Introduction from "./Introduction";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <Introduction />
          <ActionBtn />
        </div>
        <Terminal />
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="animate-bounce bg-white dark:bg-gray-800 p-2 rounded-full shadow-md relative group"
          aria-label="Scroll down"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-400 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
