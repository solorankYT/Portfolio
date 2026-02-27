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
  image: string[];
  description: string;
  techstack: string[];
  link: string;
  type: "personal" | "client";
  review?: {
    rating: number;
    message: string;
  };
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

  const stars = (count: string) => {
    const num = parseInt(count);
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: num }, (_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.293 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z" />
          </svg>
        ))}
      </div>
    );
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
      image: [
        "./hrbs/1.png",
        "./hrbs/2.png",
        "./hrbs/3.png",
        "./hrbs/4.png",
        "./hrbs/5.png",
        "./hrbs/6.png",
        "./hrbs/7.png",
        "./hrbs/8.png"
      ],
      description:
        "Developed a full-featured Hotel Reservation and Billing System to streamline front-desk operations, automate billing workflows, and centralize customer data management. The platform includes a real-time reservation module, automated invoice generation, payment tracking, and an integrated customer records system—significantly improving operational efficiency and reducing manual administrative work.",
      techstack: ["Laravel 12", "HTML", "JavaScript", "API", "CSS"],
      link: "#",
      type: "client",
      review: {
        rating: 5,
        message:
          "The system significantly improved our daily operations. It is intuitive, reliable, and has streamlined both reservations and billing. Highly professional work and excellent support throughout the project."
      }
    },
    {
      title: "Barangay Information Management System",
      image: [
        "./barangayims/1.png",
        "./barangayims/2.png",
        "./barangayims/3.png",
        "./barangayims/4.png",
        "./barangayims/5.png",
        "./barangayims/6.png",
        "./barangayims/7.png"
      ],
      description:
        "Designed and implemented a comprehensive Barangay Information Management System to digitize resident records, automate service request processing, and improve administrative transparency. The system features resident profiling, document issuance tracking, request lifecycle monitoring, and a centralized administrative dashboard—enhancing workflow efficiency and data accessibility for local governance.",
      techstack: ["Laravel 12", "React", "Inertia", "CSS"],
      link: "#",
      type: "client",
      review: {
        rating: 5,
        message:
          "The system has greatly improved how we manage resident information and service requests. The development process was smooth, and the final product exceeded expectations in both functionality and usability."
      }
    },
  ];

  const filteredProjects = projects.filter((p) => p.type === activeTab);

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
  <div className="flex w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl p-1">
    {(["personal", "client"] as const).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-300
        ${
          activeTab === tab
            ? "bg-yellow-500 text-black shadow"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {tab === "personal" ? "Personal Projects" : "Client Work"}
      </button>
    ))}
  </div>
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
           <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 
              hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 
              transition-all duration-300">

                {/* Image */}
                <div className="relative h-60 rounded-xl overflow-hidden mb-6">
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-2 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techstack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Review */}
                {project.review && (
                  <div className="mt-5 pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2 mb-1">
                      {stars(project.review.rating.toString())}
                    </div>
                    <p className="text-gray-300 text-sm italic">
                      “{project.review.message}”
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-5 text-yellow-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                  View Project →
                </div>
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