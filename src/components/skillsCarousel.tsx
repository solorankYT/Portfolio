import {
 FaJs, FaHtml5,
} from "react-icons/fa";

import {
  SiCss3,
 SiFirebase,  SiLaravel, SiMysql,  SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiTypescript,
  SiVuedotjs
} from "react-icons/si";


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

// const tools = [
// { icon: <SiGit />, name: "Git" },
// { icon: <SiPostman />, name: "Postman" },
// { icon: <SiFigma />, name: "Figma" },
// { icon: <SiVercel />, name: "Vercel" },
// { icon: <SiNetlify />, name: "Netlify" },
// { icon: <TbBrandVisualStudio />, name: "Visual Studio Code" },
// { icon: <SiAwslambda />, name: "AWS Lambda" },
// ];

type Skill = {
  icon: React.ReactNode;
  name: string;
};

type SectionProps = {
  skills: Skill[];
  reverse?: boolean;
  white?: boolean;
};

const Section: React.FC<SectionProps> = ({ skills, reverse = false, white = false }) => (
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
   
    </div>
  );
}
