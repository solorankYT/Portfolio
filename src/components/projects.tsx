import { useState, useEffect, type JSX } from "react";
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
  SiVercel,
  SiHeroku,
  SiNetlify,
  SiInertia,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  image: string[]; // array for multiple images
  description: string;
  techstack: string[];
  link: string;
  type: "personal" | "client";
};

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const techstackIcon: Record<string, JSX.Element> = {
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
    Vercel: <SiVercel className="text-gray-300 bg-gray-800 rounded-lg p-1 text-2xl" />,
    Heroku: <SiHeroku className="text-purple-400 text-2xl" />,
    Netlify: <SiNetlify className="text-green-500 text-2xl" />,
    Inertia: <SiInertia className="text-white text-2xl" />,
    HTML: <SiHtml5 className="text-orange-500 text-2xl" />,
    CSS: <SiTailwindcss className="text-sky-400 text-2xl" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  };

  const projects: Project[] = [
    {
      title: "Focusly",
      image: ["./taskmanagement.png"],
      description:
        "Focusly is an AI-powered productivity app with Kanban boards, Pomodoro-based focus mode, real-time analytics, and GPT-4 insights.",
      techstack: ["Laravel 12", "React", "Inertia", "MySQL", "Shadcn", "Openai"],
      link: "#",
      type: "personal",
    },
    {
      title: "Unitrack",
      image: ["./unitrack.png"],
      description:
        "Unitrack is a full-stack e-commerce system with JWT authentication, multi-step checkout, and admin dashboard for real-time stock tracking.",
      techstack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "Netlify", "Heroku", "API"],
      link: "https://unitrack.shop/",
      type: "personal",
    },
    {
      title: "Ulam Generator",
      image: ["./ulambox.png"],
      description:
        "Ulam Generator recommends dishes based on user preferences, integrates Firebase, and uses Shadcn UI for a sleek experience.",
      techstack: ["Next.js API route", "Firebase", "Shadcn", "Vercel"],
      link: "https://ulamgenerator.vercel.app/",
      type: "personal",
    },
    {
      title: "Hotel Reservation and Billing System",
      image: ["./hrbs/1.png", "./hrbs/2.png", "./hrbs/3.png", "./hrbs/4.png", "./hrbs/5.png", "./hrbs/6.png", "./hrbs/7.png", "./hrbs/8.png"],
      description: "Hotel reservation billing system",
      techstack: ["Laravel 12", "HTML", "JavaScript", "API", "CSS"],
      link: "#",
      type: "client",
    },
      {
      title: "Barangay Information Management System",
      image: ["./barangayims/1.png", "./barangayims/2.png", "./barangayims/3.png", "./barangayims/4.png", "./barangayims/5.png", "./barangayims/6.png", "./barangayims/7.png"],
      description: "Hotel reservation billing system",
      techstack: ["Laravel 12", "HTML", "JavaScript", "API", "CSS"],
      link: "#",
      type: "client",
    },
  ];

  const filteredProjects = projects.filter((p) => p.type === activeTab);

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        {["personal", "client"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeTab === tab ? "bg-yellow-500 text-black" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab as "personal" | "client")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {filteredProjects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-yellow-500/10 transition-all duration-300"
        >
          <button
            onClick={() => {
              setSelectedProject(project);
              setCarouselIndex(0);
              setIsOpen(true);
            }}
            className="w-full text-left focus:outline-none"
          >
            <div className="w-full h-64 mb-4 rounded-lg overflow-hidden">
              <img
                src={project.image[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
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
                    className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden relative"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-64 overflow-hidden">
                      {selectedProject.image.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selectedProject.title} ${idx}`}
                          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                            carouselIndex === idx ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}

                      {selectedProject.image.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              setCarouselIndex((prev) =>
                                prev === 0 ? selectedProject.image.length - 1 : prev - 1
                              )
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transition"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() =>
                              setCarouselIndex((prev) =>
                                prev === selectedProject.image.length - 1 ? 0 : prev + 1
                              )
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700 transition"
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>

                    {selectedProject.image.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto p-2 mt-2 justify-center opacity-50">
                        {selectedProject.image.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCarouselIndex(idx)}
                            className={`border-2 rounded-md overflow-hidden transition-transform hover:opacity-100 ${
                              carouselIndex === idx ? "border-yellow-500 scale-105" : "border-gray-700"
                            }`}
                          >
                            <img src={img} alt={`${selectedProject.title} thumb ${idx}`} className="w-16 h-16 object-cover hover:opacity-100" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Content */}
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