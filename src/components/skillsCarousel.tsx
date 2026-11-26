const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Backend & data",
    skills: ["Laravel / PHP", "Node.js / Express", "MySQL", "Supabase", "Oracle SQL"],
  },
  {
    title: "Tools & operations",
    skills: ["Git", "Linux", "Docker", "ServiceNow", "Splunk"],
  },
];

export default function Skills() {
  return (
    <div className="skills-grid">
      {skillGroups.map(({ title, skills }) => (
        <div className="skill-group" key={title}>
          <h3>{title}</h3>
          <ul role="list">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
