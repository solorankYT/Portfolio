import { useState } from "react";
import ScrollSection from "./components/ScrollSection";

const experience = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    duration: "May 2026 – Present",
    stack: [
      "SQL",
      "PL/SQL",
      "Unix/Linux",
      "Oracle Database",
      "ServiceNow",
      "Application Support"
    ],
    responsibilities: [
      "Provide application maintenance and production support for enterprise retail business applications, ensuring system availability and operational stability.",
      "Investigate, troubleshoot, and resolve production incidents through ticket management, root cause analysis, and collaboration with cross-functional teams.",
      "Write, analyze, and optimize SQL and PL/SQL queries to validate data, resolve database-related issues, and support business operations.",
      "Utilize Unix/Linux commands for log analysis, script execution, file management, and production environment troubleshooting.",
      "Work closely with developers, QA engineers, business analysts, and stakeholders to diagnose issues, implement solutions, and support application enhancements."
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    duration: "January 2024 – Present",
    stack: ["React", "Heroku", "TypeScript", "Node.js", "Laravel", "MySQL", "Hostinger"],
    responsibilities: [
      "Design, develop, and deploy scalable full-stack web applications for diverse clients.",
      "Implemented RESTful APIs to enable seamless frontend–backend integration and third-party services.",
      "Provided technical consulting on architecture decisions, technology stack selection, and development best practices, resulting in optimized system performance and maintainable codebases",
    ],
  },
  {
    title: "Web Development Intern",
    duration: "June 2023 – December 2023",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    responsibilities: [
      "Developed a student portal and admin dashboard for course enrollment and record tracking.",
      "Designed and implemented RESTful APIs with request validation, authentication, and secure data handling.",
      "Implemented role-based access control using Spatie to manage user roles and enforce authorization policies.",
      "Contributed to debugging, feature testing, and UI enhancements, improving responsiveness and accessibility."
    ]
  }
];

export default function About() {
  const [showAll, setShowAll] = useState(false);

  const displayedExperience = showAll ? experience : experience.slice(0, 1);

  return (
    <ScrollSection>
      <section className="max-w-3xl w-full space-y-8">
        <div className="flex flex-col gap-8">
          {displayedExperience.map((exp, index) => (
            <article
              key={index}
              className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                <div>
                  <h3 className="text-2xl text-white font-bold">
                    {exp.title}
                  </h3>

                  {exp.company && (
                    <p className="text-yellow-400 font-medium">
                      {exp.company}
                    </p>
                  )}
                </div>

                <p className="italic text-gray-400 text-sm mt-1 sm:mt-0">
                  {exp.duration}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.stack.map((item) => (
                  <span
                    key={item}
                    className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {experience.length > 1 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium"
            >
              {showAll ? "Show Less" : "View More Experience"}
            </button>
          </div>
        )}
      </section>
    </ScrollSection>
  );
}