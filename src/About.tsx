import { useId, useState } from "react";

type Experience = {
  title: string;
  company?: string;
  duration: string;
  stack: string[];
  responsibilities: string[];
};

const [currentExperience, ...moreExperience]: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    duration: "May 2026 – Present",
    stack: ["Oracle SQL", "Microsoft SQL Server", "Unix/Linux", "ServiceNow", "Splunk", "Dynatrace"],
    responsibilities: [
      "Provide production support and resolve application incidents using ServiceNow.",
      "Monitor applications and analyze logs with Splunk and Dynatrace.",
      "Query Oracle SQL and Microsoft SQL Server to validate records and diagnose issues.",
      "Use Unix/Linux to run scripts and troubleshoot production applications.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    duration: "June 2025 – Present",
    stack: ["React", "TypeScript", "Node.js", "Laravel", "MySQL"],
    responsibilities: [
      "Develop and deploy full-stack web applications for clients.",
      "Design database schemas to support client workflows.",
      "Diagnose and resolve bugs in deployed applications.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "UP Information Technology Development Center",
    duration: "September 2024 – December 2024",
    stack: ["PHP", "Laravel", "Spatie", "Tenancy"],
    responsibilities: [
      "Helped migrate a legacy PHP application to Laravel.",
      "Integrated authentication and access control for internal systems using Spatie and Tenancy.",
    ],
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-yellow-500/10 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
        <div>
          <h3 className="text-2xl text-white font-bold">{experience.title}</h3>
          {experience.company && (
            <p className="text-yellow-400 font-medium">{experience.company}</p>
          )}
        </div>
        <p className="italic text-gray-400 text-sm mt-1 sm:mt-0">{experience.duration}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {experience.stack.map((item) => (
          <span key={item} className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>

      <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed">
        {experience.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}

export default function About() {
  const [showAll, setShowAll] = useState(false);
  const detailsId = useId();

  return (
    <div className="max-w-3xl w-full space-y-7">
      <div className="flex flex-col gap-8">
        <ExperienceCard experience={currentExperience} />
        <div className="space-y-8" id={detailsId} hidden={!showAll}>
          {moreExperience.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          aria-expanded={showAll}
          aria-controls={detailsId}
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          {showAll ? "Show Less" : "View More Experience"}
        </button>
      </div>
    </div>
  );
}
