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
  SiShadcnui,
  SiOracle,
  SiHeroku,
  SiGithubactions,
} from "react-icons/si";

import { motion } from "framer-motion";
import { Database, Server } from "lucide-react";

type Skill = {
  icon: React.ReactNode;
  name: string;
  color: string;
  glow: string;
};

const frontendSkills: Skill[] = [
  {
    icon: <SiHtml5 />,
    name: "HTML5",
    color: "text-orange-500",
    glow: "hover:shadow-orange-500/30",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    color: "text-yellow-400",
    glow: "hover:shadow-yellow-400/30",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-blue-500",
    glow: "hover:shadow-blue-500/30",
  },
  {
    icon: <SiReact />,
    name: "React",
    color: "text-cyan-400",
    glow: "hover:shadow-cyan-400/30",
  },
  {
    icon: <SiVuedotjs />,
    name: "Vue.js",
    color: "text-emerald-500",
    glow: "hover:shadow-emerald-500/30",
  },
  {
    icon: <SiShadcnui />,
    name: "shadcn/ui",
    color: "text-zinc-100",
    glow: "hover:shadow-zinc-400/30",
  },
];

const backendSkills: Skill[] = [
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    color: "text-green-500",
    glow: "hover:shadow-green-500/30",
  },
  {
    icon: <SiLaravel />,
    name: "Laravel",
    color: "text-red-500",
    glow: "hover:shadow-red-500/30",
  },
  {
    icon: <FaPhp />,
    name: "PHP",
    color: "text-indigo-400",
    glow: "hover:shadow-indigo-400/30",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    color: "text-blue-500",
    glow: "hover:shadow-blue-500/30",
  },
  {
    icon: <SiOracle />,
    name: "Oracle SQL",
    color: "text-red-600",
    glow: "hover:shadow-red-600/30",
  },
  {
    icon: <Database />,
    name: "PL/SQL",
    color: "text-orange-400",
    glow: "hover:shadow-orange-400/30",
  },
];

const devOpsSkills: Skill[] = [
  {
    icon: <FaDocker />,
    name: "Docker",
    color: "text-blue-400",
    glow: "hover:shadow-blue-400/30",
  },
  {
    icon: <FaAws />,
    name: "AWS",
    color: "text-orange-400",
    glow: "hover:shadow-orange-400/30",
  },
  {
    icon: <FaLinux />,
    name: "Linux / Unix",
    color: "text-yellow-300",
    glow: "hover:shadow-yellow-300/30",
  },
  {
    icon: <SiGithubactions />,
    name: "CI/CD",
    color: "text-violet-400",
    glow: "hover:shadow-violet-400/30",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "text-orange-500",
    glow: "hover:shadow-orange-500/30",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: "text-zinc-200",
    glow: "hover:shadow-zinc-200/30",
  },
  {
    icon: <SiHeroku />,
    name: "Heroku",
    color: "text-purple-400",
    glow: "hover:shadow-purple-400/30",
  },
  {
    icon: <Server />,
    name: "Hostinger",
    color: "text-violet-500",
    glow: "hover:shadow-violet-500/30",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

type SkillGridProps = {
  title: string;
  skills: Skill[];
  cols?: string;
};

const SkillGrid = ({ title, skills, cols = "grid-cols-2 sm:grid-cols-3" }: SkillGridProps) => (
  <section>
    <div className="mb-6 text-center">
      <h2 className="text-xl font-semibold tracking-wide text-white uppercase letter-spacing-widest">
        {title}
      </h2>
      <div className="w-10 h-[2px] bg-yellow-500 mt-3 rounded-full mx-auto" />
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`grid ${cols} gap-3`}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`
            group flex flex-col items-center justify-center text-center
            p-4 rounded-xl
            bg-gray-900/60 backdrop-blur-sm
            border border-gray-800
            transition-all duration-300
            hover:border-gray-600 hover:shadow-lg
            ${skill.glow}
            cursor-default select-none
          `}
        >
          <div
            className={`
              text-3xl mb-2.5
              transition-transform duration-300 ease-out
              group-hover:scale-110
              ${skill.color}
            `}
          >
            {skill.icon}
          </div>
          <p className="text-gray-400 text-xs font-medium tracking-wide uppercase group-hover:text-gray-200 transition-colors duration-300">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default function SkillsSection() {
  return (
    <div className="w-full space-y-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <SkillGrid title="Frontend" skills={frontendSkills} />
        <SkillGrid title="Backend" skills={backendSkills} />
      </div>

      <div>
        <SkillGrid
          title="DevOps & Tools"
          skills={devOpsSkills}
          cols="grid-cols-2 sm:grid-cols-4"
        />
      </div>
    </div>
  );
}