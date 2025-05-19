import {
  ArrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "lucide-react";

export default function ExperienceCard({
  exp,
  index,
}: {
  exp: {
    id: number;
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
  };
  index: number;
}) {
  return (
    <div
      key={exp.id}
      className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8 last:mb-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Connector line */}
      {index !== 2 && (
        <div className="absolute left-[2.75rem] bottom-[-2rem] w-0.5 h-8 bg-green-200 dark:bg-green-800" />
      )}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
          <BriefcaseIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {exp.title}
            </h3>
            <ArrowRightIcon className="w-4 h-4 text-gray-400" />
            <span className="text-green-600 dark:text-green-400 font-medium">
              {exp.company}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              <span>{exp.location}</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
