import DevIcons from "./DevIcons";
import Learning from "./Learning";
import Proficiency from "./Proficiency";

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="py-20 bg-green-50 dark:bg-gray-800 dark:text-white text-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Technologies{" "}
          <span className="text-green-600 dark:text-green-400">Involved</span>
        </h2>
        <div className="mx-1 md:mx-10 lg:mx-24 space-y-10 text-lg md:text-xl">
          <Proficiency />
          <Learning />
          <DevIcons />
        </div>
      </div>
    </section>
  );
}
