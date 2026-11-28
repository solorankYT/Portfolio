import {
  FaJs,
  FaPhp,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiHtml5,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiOracle,
  SiGithubactions,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Server } from "lucide-react";

type Level = "core" | "familiar";

type Skill = {
  icon: React.ReactNode;
  name: string;
  color: string;
  level: Level;
};


const frontendSkills: Skill[] = [
  { icon: <SiHtml5 />, name: "HTML5", color: "group-hover:text-orange-500", level: "core" },
  { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400", level: "core" },
  { icon: <SiReact />, name: "React", color: "group-hover:text-cyan-400", level: "core" },
  { icon: <SiTypescript />, name: "TypeScript", color: "group-hover:text-blue-500", level: "core" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "group-hover:text-zinc-100", level: "familiar" },
  { icon: <SiVuedotjs />, name: "Vue.js", color: "group-hover:text-emerald-500", level: "familiar" },
];

const backendSkills: Skill[] = [
  { icon: <SiNodedotjs />, name: "Node.js", color: "group-hover:text-green-500", level: "core" },
  { icon: <FaPhp />, name: "PHP", color: "group-hover:text-indigo-400", level: "core" },
  { icon: <SiLaravel />, name: "Laravel", color: "group-hover:text-red-500", level: "core" },
  { icon: <SiMysql />, name: "MySQL", color: "group-hover:text-blue-500", level: "core" },
  { icon: <SiExpress />, name: "Express.js", color: "group-hover:text-gray-300", level: "core" },
  { icon: <SiOracle />, name: "Oracle SQL", color: "group-hover:text-red-600", level: "familiar" },
];

const devOpsSkills: Skill[] = [
  { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-zinc-200", level: "core" },
  { icon: <FaDocker />, name: "Docker", color: "group-hover:text-blue-400", level: "familiar" },
  { icon: <FaLinux />, name: "Linux / Unix", color: "group-hover:text-yellow-300", level: "core" },
  { icon: <FaAws />, name: "AWS", color: "group-hover:text-orange-400", level: "familiar" },
];


const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: 12 },
  show: {
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.li
    variants={itemVariants}
    title={`${skill.name} — ${skill.level === "core" ? "core stack" : "familiar with"}`}
    className="
      group relative flex flex-col items-center justify-center text-center
      p-4 rounded-xl
      bg-gray-900/60 backdrop-blur-sm
      border border-gray-800
      transition-colors duration-300 hover:border-gray-600
      cursor-default select-none
    "
  >
    <span
      className={`
        absolute top-2 right-2 h-1.5 w-1.5 rounded-full
        ${skill.level === "core" ? "bg-yellow-500/80" : "bg-gray-700"}
      `}
      aria-hidden="true"
    />

    <div
      aria-hidden="true"
      className={`
        text-3xl mb-2.5 text-gray-500
        transition-all duration-300 ease-out motion-reduce:transition-none
        motion-safe:group-hover:scale-110
        ${skill.color}
      `}
    >
      {skill.icon}
    </div>

    <p className="text-gray-400 text-xs font-medium tracking-wide uppercase group-hover:text-gray-200 transition-colors duration-300">
      {skill.name}
      <span className="sr-only">, {skill.level === "core" ? "core skill" : "familiar"}</span>
    </p>
  </motion.li>
);

type SkillGridProps = {
  title: string;
  skills: Skill[];
  cols?: string;
};

function SkillGrid({ title, skills, cols = "grid-cols-2 sm:grid-cols-3" }: SkillGridProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section>
      <div className="mb-6 flex items-center justify-center gap-2">
        <h3 className="text-xl font-semibold tracking-wide text-white uppercase">
          {title}
        </h3>
      </div>
      <div className="w-10 h-[2px] bg-yellow-500 mb-6 rounded-full mx-auto" />

      <motion.ul
        role="list"
        variants={containerVariants}
        initial={reducedMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`grid ${cols} gap-3 auto-rows-fr`}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.ul>
    </section>
  );
}

export default function SkillsSection() {
  return (
    <div className="w-full space-y-12">
      <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-widest text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" /> Core
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" /> Familiar
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <SkillGrid title="Frontend" skills={frontendSkills} />
        <SkillGrid title="Backend" skills={backendSkills} />
      </div>

      <SkillGrid
        title="DevOps & Tools"
        skills={devOpsSkills}
        cols="grid-cols-2 sm:grid-cols-4"
      />
    </div>
  );
}
