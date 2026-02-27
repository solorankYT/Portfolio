import {
  FaJs,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

type Skill = {
  icon: React.ReactNode;
  name: string;
  color: string;
  glow: string;
};

const frontendSkills: Skill[] = [
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", glow: "hover:shadow-yellow-500/40" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500", glow: "hover:shadow-blue-500/40" },
  { icon: <SiReact />, name: "React", color: "text-cyan-400", glow: "hover:shadow-cyan-400/40" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-300", glow: "hover:shadow-gray-300/40" },
];

const backendSkills: Skill[] = [
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600", glow: "hover:shadow-green-600/40" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-600", glow: "hover:shadow-blue-600/40" },
  { icon: <SiLaravel />, name: "Laravel", color: "text-red-500", glow: "hover:shadow-red-500/40" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-700", glow: "hover:shadow-blue-700/40" },

];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

const SkillGrid = ({ title, skills }: { title: string; skills: Skill[] }) => (
 <section className="mb-12 md:mb-0">
   <div className="mb-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="w-12 h-[3px] bg-yellow-500 mt-2 rounded-full mx-auto"></div>
    </div>

          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          className={`group flex flex-col items-center text-center p-4
          bg-gray-900/50 backdrop-blur 
          rounded-xl border border-gray-800
          transition-all duration-300
          hover:border-gray-600 hover:shadow-xl ${skill.glow}`}
        >
          <div
            className={`text-3xl md:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
          >
            {skill.icon}
          </div>

          <p className="text-gray-300 text-sm font-medium">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default function SkillsSection() {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-12">
      <div className="flex-1">
        <SkillGrid title="Frontend" skills={frontendSkills} />
      </div>

      <div className="flex-1">
        <SkillGrid title="Backend" skills={backendSkills} />
      </div>
    </div>
  );
}