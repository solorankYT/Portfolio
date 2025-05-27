import SkillsCarousel from "./components/skillsCarousel";
import Projects from "./components/projects";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import GitHubContribution from "./components/githubContribution";

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
              <span className="text-yellow-400">Front-end Developer</span> with experience building e-commerce platforms and dashboards using <span className="text-yellow-400">React and TypeScript</span>. 
              <span className="text-gray-300"> I focus on writing clean, maintainable code and following best practices</span>. 
              I enjoy working with others to build thoughtful, practical solutions.
            </p>

    
           <a href="./MarkFunaResume.pdf" download>
            <div className="mt-4 button text-white hover:text-yellow-400"><span>Download CV </span></div>
            </a> 

            <ul className="flex space-x-4 mt-6 text-gray-500 text-2xl ">
              <li>
             <a href="https://github.com/solorankYT"> 
              <div className="hover:text-yellow-400"> <FaGithub />  </div> 
             </a>
              </li>
                <li>
             <a href="https://www.facebook.com/MarkKingGT/"> 
              <div className="hover:text-yellow-400"> <FaFacebook />  </div> 
             </a>
              </li>
                <li>
             <a href="https://github.com/solorankYT"> 
              <div className="hover:text-yellow-400"> <FaLinkedin />  </div> 
             </a>
              </li>
             <li>
             <a href="https://www.linkedin.com/in/markfuna/"> 
              <div className="hover:text-yellow-400"> <CgMail />  </div> 
             </a>
              </li>
            </ul>
            
          </main>
    
          <section  className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h2>
            <SkillsCarousel />
            </section>
    
          <section id="projects" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Personal Projects</h2>
            <Projects />
          </section>

          <section className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
             <h1 className="text-2xl font-bold text-gray-200 mb-6 text-center">Github Contributions</h1>
            <GitHubContribution />
          </section>
    
          <footer className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <p className="text-gray-400 text-center">
              © 2023 Mark Funa. All rights reserved.
            </p>
            
            </footer>
        </div>
  );
}
