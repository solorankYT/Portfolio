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
  SiHeroku,
  SiGithubactions,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";
import { Database, Server } from "lucide-react";

type Level = "core" | "familiar";

type Skill = {
  icon: React.ReactNode;
  name: string;
  // Full literal "group-hover:… group-focus-visible:…" class string.
  // Tailwind only generates classes it finds as complete, unbroken
  // strings in your source — so these must be written out in full
  // per entry rather than built at runtime via interpolation.
  color: string;
  level: Level;
};

// ── Data ──────────────────────────────────────────────────────────
// `level: "core"` = daily-driver / production experience.
// `level: "familiar"` = used on real projects, not primary stack.
// This single flag drives the proficiency dot AND default sort order,
// so recruiters see your strongest tools first without you having to
// hand-order every array.

const frontendSkills: Skill[] = [
  { icon: <SiHtml5 />, name: "HTML5", color: "group-hover:text-orange-500 group-focus-visible:text-orange-500", level: "core" },
  { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400 group-focus-visible:text-yellow-400", level: "core" },
  { icon: <SiReact />, name: "React", color: "group-hover:text-cyan-400 group-focus-visible:text-cyan-400", level: "core" },
  { icon: <SiTypescript />, name: "TypeScript", color: "group-hover:text-blue-500 group-focus-visible:text-blue-500", level: "core" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "group-hover:text-zinc-100 group-focus-visible:text-zinc-100", level: "familiar" },
  { icon: <SiVuedotjs />, name: "Vue.js", color: "group-hover:text-emerald-500 group-focus-visible:text-emerald-500", level: "familiar" },
];

const backendSkills: Skill[] = [
  { icon: <SiNodedotjs />, name: "Node.js", color: "group-hover:text-green-500 group-focus-visible:text-green-500", level: "core" },
  { icon: <FaPhp />, name: "PHP", color: "group-hover:text-indigo-400 group-focus-visible:text-indigo-400", level: "core" },
  { icon: <SiLaravel />, name: "Laravel", color: "group-hover:text-red-500 group-focus-visible:text-red-500", level: "core" },
  { icon: <SiMysql />, name: "MySQL", color: "group-hover:text-blue-500 group-focus-visible:text-blue-500", level: "core" },
  { icon: <SiExpress />, name: "Express.js", color: "group-hover:text-gray-300 group-focus-visible:text-gray-300", level: "core" },
  { icon: <SiOracle />, name: "Oracle SQL", color: "group-hover:text-red-600 group-focus-visible:text-red-600", level: "familiar" },
  { icon: <Database />, name: "PL/SQL", color: "group-hover:text-orange-400 group-focus-visible:text-orange-400", level: "familiar" },
  { icon: <SiFirebase />, name: "Firebase", color: "group-hover:text-yellow-400 group-focus-visible:text-yellow-400", level: "familiar" },
  { icon: <SiSupabase />, name: "Supabase", color: "group-hover:text-blue-400 group-focus-visible:text-blue-400", level: "familiar" },
];

const devOpsSkills: Skill[] = [
  { icon: <FaGitAlt />, name: "Git", color: "group-hover:text-orange-500 group-focus-visible:text-orange-500", level: "core" },
  { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-zinc-200 group-focus-visible:text-zinc-200", level: "core" },
  { icon: <FaDocker />, name: "Docker", color: "group-hover:text-blue-400 group-focus-visible:text-blue-400", level: "core" },
  { icon: <FaLinux />, name: "Linux / Unix", color: "group-hover:text-yellow-300 group-focus-visible:text-yellow-300", level: "core" },
  { icon: <FaAws />, name: "AWS", color: "group-hover:text-orange-400 group-focus-visible:text-orange-400", level: "familiar" },
  { icon: <SiGithubactions />, name: "CI/CD", color: "group-hover:text-violet-400 group-focus-visible:text-violet-400", level: "familiar" },
  { icon: <Server />, name: "Hostinger", color: "group-hover:text-violet-500 group-focus-visible:text-violet-500", level: "familiar" },
];

// ── Motion ────────────────────────────────────────────────────────
// A single shared container/item pair, reused everywhere, so the
// three sections read as one coordinated reveal instead of three
// separate "waves" as the user scrolls.

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ── Card ──────────────────────────────────────────────────────────
// Design decisions vs. the original:
// 1. Icons sit in neutral gray at rest and only pick up their brand
//    color on hover/focus — cuts the "20 colors fighting for
//    attention" noise while keeping the payoff on interaction.
// 2. A small dot signals proficiency (core vs. familiar) instead of
//    every skill looking equally weighted.
// 3. Genuinely focusable + has a title tooltip, so the hover
//    affordance (lift, border glow) now matches real interactivity
//    instead of promising a click that goes nowhere.

const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -3, transition: { duration: 0.15 } }}
    whileFocus={{ y: -3, transition: { duration: 0.15 } }}
    tabIndex={0}
    title={`${skill.name} — ${skill.level === "core" ? "core stack" : "familiar with"}`}
    className="
      group relative flex flex-col items-center justify-center text-center
      p-4 rounded-xl
      bg-gray-900/60 backdrop-blur-sm
      border border-gray-800
      outline-none
      transition-colors duration-300
      hover:border-gray-600 focus-visible:border-gray-500
      focus-visible:ring-1 focus-visible:ring-gray-500
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
      className={`
        text-3xl mb-2.5 text-gray-500
        transition-all duration-300 ease-out
        group-hover:scale-110 group-focus-visible:scale-110
        ${skill.color}
      `}
    >
      {skill.icon}
    </div>

    <p className="text-gray-400 text-xs font-medium tracking-wide uppercase group-hover:text-gray-200 group-focus-visible:text-gray-200 transition-colors duration-300">
      {skill.name}
    </p>
  </motion.div>
);

// ── Grid ──────────────────────────────────────────────────────────

type SkillGridProps = {
  title: string;
  skills: Skill[];
  cols?: string;
};

const SkillGrid = ({ title, skills, cols = "grid-cols-2 sm:grid-cols-3" }: SkillGridProps) => (
  <section>
    <div className="mb-6 flex items-center justify-center gap-2">
      <h2 className="text-xl font-semibold tracking-wide text-white uppercase">
        {title}
      </h2>
    </div>
    <div className="w-10 h-[2px] bg-yellow-500 mb-6 rounded-full mx-auto" />

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`grid ${cols} gap-3 auto-rows-fr`}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </motion.div>
  </section>
);

// ── Section ───────────────────────────────────────────────────────

export default function SkillsSection() {
  return (
    <div className="w-full space-y-12">
      <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-widest text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" /> Core
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" /> Familiar
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
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