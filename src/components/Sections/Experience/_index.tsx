import ExperienceCard from "./ExperienceCard";
export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "ReactJS Developer Intern",
      company: "CareerLink",
      period: "July - October 2022",
      location: "Vietnam",
      description:
        "Contributed to CareerLink, a job-seeking platform with 1M+ monthly users, by optimizing performance, refactoring code, and implementing mobile-friendly CV builder features in a small agile team.",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Tailwind CSS",
        "JSS",
        "Git",
      ],
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Aureole IT Vietnam",
      period: "July - December 2022",
      location: "Vietnam",
      description:
        "Collaborated in an AGILE team to design and develop a dynamic, interactive lottery website for a major Japanese client, ensuring cross-browser compatibility, high performance, and a seamless user experience while strengthening teamwork and product design skills.",
      technologies: [
        "NextJS",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "TailwindCSS",
        "Git",
        "Redux",
        "Firebase",
      ],
    },
    {
      id: 3,
      title: "Teaching Assistant & Tutor",
      company: "MindX Technology School",
      period: "November 2023 - April 2024",
      location: "Vietnam",
      description:
        "Supported technology education for students of all ages at MindX by assisting instructors, preparing materials, leading select modules, and guiding students through lessons and hands-on activities.",
      technologies: ["Python", "Web Development", "Game Development"],
    },
  ];
  return (
    <section id="experience" className="py-20 bg-green-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Work{" "}
          <span className="text-green-600 dark:text-green-400">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
