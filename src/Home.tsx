import SkillsCarousel from "./components/skillsCarousel";
import Projects from "./components/projects";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col">
          <main className="container max-w-3xl mx-auto mt-20 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg border-b-0">
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Hi, I’m <span className="text-yellow-400">Mark Funa</span>
            </h1>
            <h3 className="flex items-center text-xl text-gray-500 font-semibold mb-3">
              <CiLocationOn className="mr-2" />
              Quezon City, Philippines
            </h3>
          
            <p className="text-gray-400 text-lg leading-relaxed">
              <span className="text-yellow-400">Front-end Developer</span> with experience building e-commerce platforms and dashboards using React and TypeScript. 
              <span className="text-gray-300"> I focus on writing clean, maintainable code and following best practices</span>. 
              I enjoy working with others to build thoughtful, practical solutions.
            </p>

    
           <a href="./MarkFunaResume.pdf" download>
            <div className="mt-4 button text-white hover:text-yellow-400"><span>Download CV </span></div>
            </a> 

            <ul>
              <li>
             <a href="https://github.com/solorankYT"> <FaGithub /> </a>
              </li>
            </ul>
            
          </main>
    
          <section  className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <SkillsCarousel />
            </section>
    
          <section id="projects" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <Projects />
          </section>
    
          <footer className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <p className="text-gray-400 text-center">
              © 2023 Mark Funa. All rights reserved.
            </p>
            
            </footer>
        </div>
  );
}
