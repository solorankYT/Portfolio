import SkillsCarousel from "./components/skillsCarousel";
import Projects from "./components/projects";
import { CiLocationOn } from "react-icons/ci";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import GitHubContribution from "./components/githubContribution";
import ScrollSection from "./components/ScrollSection";

export default function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col">

      <ScrollSection>
          <main className="container max-w-3xl mx-auto mt-20 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg border-b-0">
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Hi, I’m <span className="text-yellow-400">Mark Funa</span>
            </h1>
            <h3 className="flex items-center text-xl text-gray-400 font-semibold mb-3">
              <CiLocationOn className="mr-2" />
              Quezon City, Philippines
            </h3>
          
            <p className="text-gray-400 text-lg leading-relaxed">
              I’m a <span className="text-yellow-400 font-semibold">Full-Stack Developer</span> with experience building web applications using <span className="text-yellow-400 font-semibold">RESTful APIs</span>, implementing <span className="text-yellow-400 font-semibold">unit and integration tests</span>, and ensuring reliable, maintainable code.  
              I focus on clean architecture, debugging, and practical solutions that improve user workflows and system performance.
            </p>
          <div className="flex flex-row items-center space-x-6 mt-6 justify-between">
           <a href="./MarkFunaResume.pdf" download>
            <div className="mt-4 button text-white hover:text-yellow-400  border-gray-700 border-1 p-2"><span>Download CV </span></div>
            </a> 

            <ul className="flex space-x-4 mt-6 text-gray-500 text-2xl">
                <li>
                  <a href="https://github.com/solorankYT" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-yellow-400">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/markfuna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-yellow-400">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="mailto:markfuna6@gmail.com" aria-label="Send Email" className="hover:text-yellow-400">
                    <CgMail />
                  </a>
                </li>
              </ul>

            </div>
          </main>
      </ScrollSection>

        <ScrollSection>
            <section className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                   <h2 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h2>
            <SkillsCarousel />
            </section>
        </ScrollSection>

       <ScrollSection>
          <section id="projects" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Projects</h2>
            <Projects />
          </section>
          </ScrollSection>

          <ScrollSection>
          <section className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
             <h1 className="text-2xl font-bold text-gray-200 mb-6 text-center">Github Contributions</h1>
          <GitHubContribution />
          </section>
        


          <footer className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <p className="text-gray-400 text-center">
              © 2025 Mark Funa. All rights reserved.
            </p>
            </footer>
            </ScrollSection>
        </div>
  );
}
