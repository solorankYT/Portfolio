import SkillsCarousel from "./components/skillsCarousel";
import Projects from "./components/projects";
import { CiLocationOn } from "react-icons/ci";
import GitHubContribution from "./components/githubContribution";
import ScrollSection from "./components/ScrollSection";
import Certificate from "./components/certificate";
import About from "./About";
import SideNav from "./components/navBar";

export default function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col">

      <SideNav />

      <div className="md:ml-52">

        <ScrollSection>
          <section id="home">
            <main className="container max-w-3xl mx-auto mt-20 md:mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg border-b-0">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500 mb-3">
                Software Engineer
                <br />
                <span className="text-gray-300">specializing in full-stack development</span>
              </p>
              <h1 className="text-4xl font-extrabold text-white mb-3">
                Hi, I'm <span className="text-yellow-400">Mark Funa</span>
              </h1>
              <h3 className="flex items-center text-sm text-gray-500 mb-5">
                <CiLocationOn className="mr-1.5" />
                Quezon City, Philippines
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                I've built 5+ full-stack applications, including three developed as
                undergraduate capstone projects in partnership with real small businesses —
                a hotel booking and billing platform, an e-commerce and inventory system,
                and a local government records system.{" "}
                <span className="text-gray-200 font-medium">
                  Day job is enterprise support — side projects are where I build.
                </span>
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="./MarkFunaResume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5
                    text-sm font-semibold text-gray-900 bg-yellow-400
                    rounded-lg hover:bg-yellow-300 transition-colors duration-200"
                >
                  Download CV
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5
                    text-sm font-semibold text-gray-200 border border-gray-600
                    rounded-lg hover:border-gray-400 hover:text-white transition-colors duration-200"
                >
                  View Projects
                </a>
              </div>
            </main>
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="skills" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h2>
            <SkillsCarousel />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="projects" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Projects</h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Client projects were developed as undergraduate capstone work, built and deployed for real businesses.
            </p>
            <Projects />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="experience" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">Experience</h2>
            <About />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="certificates" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Certificates</h2>
            <Certificate />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="contributions" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">GitHub Contributions</h2>
            <GitHubContribution />
          </section>
        </ScrollSection>

        <footer className="container max-w-3xl mx-auto mt-10 mb-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Mark Funa. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}