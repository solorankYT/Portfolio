import "./credentials.css";

type Month = { value: string; label: string };

type Role = {
  company: string;
  title: string;
  start: Month;
  end?: Month;
  description: string;
};

const experience: Role[] = [
  {
    company: "Accenture",
    title: "Associate Software Engineer",
    start: { value: "2026-05", label: "May 2026" },
    description:
      "Investigate production incidents using ServiceNow, Splunk, and Dynatrace. Use Oracle SQL, Microsoft SQL Server, and Linux to validate data, analyze logs, and troubleshoot applications.",
  },
  {
    company: "Freelance",
    title: "Software Developer",
    start: { value: "2025-06", label: "Jun 2025" },
    description:
      "Develop and deploy full-stack web applications for clients. Design database schemas and resolve application bugs that affect day-to-day workflows.",
  },
  {
    company: "UP Information Technology Development Center",
    title: "Software Developer Intern",
    start: { value: "2024-09", label: "Sep 2024" },
    end: { value: "2024-12", label: "Dec 2024" },
    description:
      "Helped migrate a legacy PHP application to Laravel and integrated authentication for internal systems using Spatie and Tenancy.",
  },
];

export default function About() {
  return (
    <ol className="experience-list" role="list">
      {experience.map(({ company, title, start, end, description }) => (
        <li key={company} className="experience-entry">
          <div className="experience-meta">
            <p className="experience-company">{company}</p>
            <p className="experience-dates">
              <time dateTime={start.value}>{start.label}</time>
              {" – "}
              {end ? <time dateTime={end.value}>{end.label}</time> : "Present"}
            </p>
          </div>
          <div>
            <h3>{title}</h3>
            <p className="experience-description">{description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
