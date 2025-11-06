import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiMysql,
  SiTailwindcss,
  SiLaravel,
  SiShadcnui,
  SiPostgresql,
  SiExpress,
  SiOpenai,
} from "react-icons/si";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const techstackIcon = {
    React: <FaReact className="text-cyan-400 text-2xl" />,
    "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
    MySQL: <SiMysql className="text-blue-400 text-2xl" />,
    "Next.js API route": <SiNextdotjs className="text-white text-2xl" />,
    Firebase: <SiFirebase className="text-yellow-400 text-2xl" />,
    Shadcn: <SiShadcnui className="text-purple-400 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
    "Laravel 12": <SiLaravel className="text-red-500 text-2xl" />,
    API: <FaDatabase className="text-gray-400 text-2xl" />,
    PgSQL: <SiPostgresql className="text-indigo-400 text-2xl" />,
    Express: <SiExpress className="text-yellow-400 text-2xl" />,
    Openai: <SiOpenai className="text-gray-400 text-2xl" />,
  };

  const projects = [
    {
      title: "Focusly",
      image: "./taskmanagement.png",
      description:
        "Focusly is a Jira-inspired task management platform enhanced with a built-in Pomodoro timer. Built with Laravel 12 and React Inertia, it uses Shadcn UI and MySQL for a clean, efficient workflow.",
      techstack: ["Laravel 12", "React", "MySQL", "Shadcn", "Openai"],
      link: "#",
    },
    {
      title: "Unitrack",
      image: "./unitrack.png",
      description:
        "Unitrack is a full-stack React and Node.js order tracking system powered by MySQL. It delivers real-time updates and a seamless experience across devices.",
      techstack: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
      link: "https://unitrack.shop/",
    },
    {
      title: "Ulam Generator",
      image: "./ulambox.png",
      description:
        "Ulam Generator is a Next.js-based web app that creates personalized dish recommendations using Firebase and Shadcn UI components for a smooth, fast experience.",
      techstack: ["Next.js API route", "Firebase", "Shadcn"],
      link: "https://ulamgenerator.vercel.app/",
    },
  ];

  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-yellow-500/10 transition-all duration-300"
        >
          <button
            onClick={() => {
              setSelectedProject(project);
              setIsOpen(true);
            }}
            className="w-full text-left focus:outline-none"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.techstack.map((tech) => (
                <div key={tech} className="flex items-center" title={tech}>
                  {techstackIcon[tech] || (
                    <span className="text-yellow-500 text-sm font-semibold">{tech}</span>
                  )}
                </div>
              ))}
            </div>
          </button>
        </div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {isOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.techstack.map((tech) => (
                    <div key={tech} title={tech}>
                      {techstackIcon[tech]}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-6">
                  <Button
                    variant="secondary"
                    onClick={() => setIsOpen(false)}
                    className="border border-gray-700 hover:bg-gray-800"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => window.open(selectedProject.link, "_blank")}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                  >
                    Visit Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
