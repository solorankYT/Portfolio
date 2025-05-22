import { FaReact, FaNodeJs, FaGitAlt, FaVuejs, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiLaravel, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiShadcnui, SiTypescript } from "react-icons/si";

export default function SkillsCarousel() {
  const backendSkills = [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <RiFirebaseFill />, name: "Firebase" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ];

   const frontendSkills = [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaVuejs />, name: "Vue.js" },
      { icon: <SiShadcnui />, name: "Shadcn" },
      { icon: <SiNextdotjs />, name: "Next.js" },

  ];





  return (
    <div className="container">
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex animate-scroll"
        style={{ animationDuration: "20s" }}
      >
        {frontendSkills.concat(frontendSkills).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-8 text-yellow-400 text-4xl"
            title={skill.name}
          >
            {skill.icon}
    
          </div>
        ))}
      </div>
    </div>
     <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex animate-scroll-reverse"
        style={{ animationDuration: "20s" }}
      >
        {backendSkills.concat(backendSkills).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-8 text-yellow-400 text-4xl"
            title={skill.name}
          >
            {skill.icon}
         
          </div>
        ))}
      </div>
    </div>
    
   
    

    </div>
  );
}
