import { UserIcon, CodeIcon, GlobeIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About <span className="text-green-600 dark:text-green-400">Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-green-500 dark:border-green-400 shadow-lg">
                <img
                  src="/avatar.JPG"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                <CodeIcon
                  size={32}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Software Developer & Tool Creator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate and motivated <strong>software engineer</strong>{" "}
              at the beginning of my professional journey. With a strong
              foundation in programming and a keen interest in building
              practical, user-focused solutions, I’m excited to explore the
              world of software development. I enjoy learning new technologies,
              solving real-world problems through code, and continuously growing
              as a developer. Whether it's working on web applications,
              experimenting with backend logic, or collaborating on projects,
              I’m eager to contribute, grow, and make an impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in tech started when I built{" "}
              <strong>
                my first website as a gift for my mother in Vietnamese Mothers'
                day when I was 18
              </strong>
              , and since then, I've been constantly learning and expanding my
              skillset. I'm particularly interested in developer experience and
              productivity tools, which led me to create a template system that
              helps developers bootstrap new projects quickly with best
              practices already implemented.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg">
                <UserIcon
                  size={24}
                  className="text-green-600 dark:text-green-400 mb-2"
                />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Personal Traits
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Problem solver, detail-oriented, continuous learner
                </p>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg">
                <CodeIcon
                  size={24}
                  className="text-green-600 dark:text-green-400 mb-2"
                />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Coding Philosophy
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Clean code, reusability, performance optimization
                </p>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg">
                <GlobeIcon
                  size={24}
                  className="text-green-600 dark:text-green-400 mb-2"
                />
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                  Work Environment
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Remote-friendly, collaborative, agile methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
