import {
  FaReact, FaNodeJs, FaGitAlt, FaVuejs, FaJs, FaHtml5, FaCss3
} from "react-icons/fa";
import {
  RiFirebaseFill,
  RiFirebaseLine,
  RiTailwindCssLine
} from "react-icons/ri";
import {
  SiAwslambda,
  SiCss3,
  SiFigma, SiFirebase, SiGit, SiLaravel, SiMysql, SiNetlify, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql,
  SiPostman, SiReact, SiShadcnui, SiTailwindcss, SiTypescript,
  SiVercel,
  SiVuedotjs
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";

const frontendSkills = [
{ icon: <FaJs />, name: "JavaScript" },
{ icon: <SiTypescript />, name: "TypeScript" },
{ icon: <FaHtml5 />, name: "HTML" },
{ icon: <SiCss3 />, name: "CSS" },
{ icon: <SiReact />, name: "React" },
{ icon: <SiVuedotjs />, name: "Vue.js" },
{ icon: <SiNextdotjs />, name: "Next.js" },
];

const backendSkills = [
{ icon: <SiNodedotjs />, name: "Node.js" },
{ icon: <SiFirebase />, name: "Firebase" },
{ icon: <SiMysql />, name: "MySQL" },
{ icon: <SiLaravel />, name: "Laravel" },
{ icon: <SiPostgresql />, name: "PostgreSQL" },
{ icon: <SiPhp />, name: "PHP" },
];

const tools = [
{ icon: <SiGit />, name: "Git" },
{ icon: <SiPostman />, name: "Postman" },
{ icon: <SiFigma />, name: "Figma" },
{ icon: <SiVercel />, name: "Vercel" },
{ icon: <SiNetlify />, name: "Netlify" },
{ icon: <TbBrandVisualStudio />, name: "Visual Studio Code" },
{ icon: <SiAwslambda />, name: "AWS Lambda" },
];

const Section = ({ skills, reverse = false, white = false}) => (
  <div className="overflow-hidden whitespace-nowrap">
    <div
      className={`inline-flex ${reverse ? "animate-scroll-reverse" : "animate-scroll"}`}
      style={{ animationDuration: "25s" }}
    >
      {skills.concat(skills).map((skill, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center mx-6 text-4xl ${white ? "text-gray-400" : "text-yellow-500"}`}
          title={skill.name}
        >
          {skill.icon}
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsCarousel() {
  return (
    <div className="container">
      <Section skills={frontendSkills} />
      <Section skills={backendSkills} reverse white/>
      <Section skills={tools} />
    </div>
  );
}
