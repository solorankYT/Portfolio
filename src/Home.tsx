import { CiLocationOn } from "react-icons/ci";
import About from "./About";
import ScrollSection from "./components/ScrollSection";
import Certificate from "./components/certificate";
import GitHubContribution from "./components/githubContribution";
import Projects from "./components/projects";
import SkillsCarousel from "./components/skillsCarousel";

const panel = "container max-w-3xl mx-auto p-5 sm:p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg";

export default function Home() {
  return (
    <div className="md:ml-52 min-w-0 px-3 sm:px-4 pt-20 md:pt-10 pb-10">
      <main id="main-content" tabIndex={-1}>
        <ScrollSection>
          <section id="home" tabIndex={-1} className={`${panel} border-b-0`}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500 mb-3">
              Software Engineer
              <br />
              <span className="text-gray-300">specializing in full-stack development</span>
            </p>
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Hi, I'm <span className="text-yellow-400">Mark Funa</span>
            </h1>
            <p className="flex items-center text-sm text-gray-400 mb-5">
              <CiLocationOn className="mr-1.5 shrink-0" aria-hidden="true" />
              Quezon City, Philippines
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              I've built full-stack applications for hotel reservations and billing, e-commerce
              and inventory, and local government records.{" "}
              <span className="text-gray-200 font-medium">
                I also support enterprise applications at Accenture.
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/MarkFunaResume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-200 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="skills" tabIndex={-1} className={`${panel} mt-10`}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h2>
            <SkillsCarousel />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="projects" tabIndex={-1} className={`${panel} mt-10`}>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Projects</h2>
            <p className="text-gray-400 text-sm text-center mb-6">
              Client projects and capstone work for local organizations.
            </p>
            <Projects />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="experience" tabIndex={-1} className={`${panel} mt-10`}>
            <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">Experience</h2>
            <About />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="certificates" tabIndex={-1} className={`${panel} mt-10`}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Certificates</h2>
            <Certificate />
          </section>
        </ScrollSection>

        <ScrollSection>
          <section id="contributions" tabIndex={-1} className={`${panel} mt-10`}>
            <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">GitHub Contributions</h2>
            <GitHubContribution />
          </section>
        </ScrollSection>
      </main>

      <footer className={`${panel} mt-10`}>
        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} Mark Funa. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
