import { Card } from "@/components/ui/card";
import ScrollSection from "./components/ScrollSection";

const stack = ["Laravel", "Vue", "PostgreSQL"];

export default function About() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* ===== Profile & About Section ===== */}
      <ScrollSection>
        <Card className="relative max-w-3xl w-full p-10 bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/40 transition-all rounded-2xl shadow-lg flex flex-col items-center text-center">
          <img
            src="./2x2.jpg"
            alt="Profile"
            className="w-36 h-36 rounded-full mb-6 object-cover ring-4 ring-yellow-400/20"
            loading="lazy"
          />

          <h1 className="text-3xl font-bold text-white mb-1">Mark Funa</h1>
          <p className="text-lg text-gray-400 mb-6">
            <span className="text-yellow-400 font-semibold">Fullstack Developer</span>
          </p>

          <div className="text-gray-400 text-lg leading-relaxed max-w-prose space-y-6">
            <p>Hi, I’m <strong>Mark Funa</strong> — a recent Information Technology graduate passionate about crafting interactive and user-centered interfaces.</p>
            <p>I’m looking to join a collaborative team where I can grow, contribute, and make an impact through clean, maintainable code.</p>
          </div>

          <div className="mt-12 w-full">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-6 text-center border-b border-gray-700 pb-2">
              Technical Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Laravel",
                "MySQL",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-700/40 hover:bg-yellow-500/10 text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* ===== Work Experience ===== */}
      <ScrollSection>
        <section className="max-w-3xl w-full space-y-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-4 text-center">
            Work Experience
          </h1>

          {/* Freelance Role */}
          <article className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-2xl text-white font-bold">
                Freelance Full-Stack Developer
              </h3>
              <p className="italic text-gray-400 text-sm mt-1 sm:mt-0">
                January 2024 – Present
              </p>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed">
              <li>
                Designed and developed complete web applications for businesses
                and academic clients using Laravel, React.js, and PostgreSQL.
              </li>
              <li>
                Built scalable backend APIs with authentication and optimized
                database structures.
              </li>
              <li>
                Collaborated closely with clients to deliver custom,
                production-ready solutions aligned with UX best practices.
              </li>
            </ul>
          </article>

          {/* Internship */}
          <article className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-2xl text-white font-bold">
                Full Stack Developer Intern
              </h3>
              <p className="italic text-gray-400 text-sm mt-1 sm:mt-0">
                UPITDC | Sep 2024 – Dec 2024
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((item) => (
                <span
                  key={item}
                  className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed">
              <li>
                Developed a student portal and admin dashboard for course
                enrollment and record tracking.
              </li>
              <li>
                Built secure RESTful APIs with input validation and authentication.
              </li>
              <li>
                Enhanced UI/UX through accessibility and design improvements.
              </li>
              <li>
                Implemented role-based access control and secure data storage.
              </li>
            </ul>
          </article>
        </section>
      </ScrollSection>

      {/* ===== Education ===== */}
      <ScrollSection>
        <section className="max-w-3xl w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-100 mb-4 text-center">
            Education
          </h1>
          <article className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-yellow-500/10 transition-all duration-300">
            <h3 className="text-xl text-yellow-400 font-semibold">
              Trinity University of Asia
            </h3>
            <p className="text-gray-300 mt-1">
              Bachelor of Science in Information Technology Specializing in Mobile, Web, and Software Development
            </p>
            <p className="text-sm text-gray-400 italic mt-1">
              2021 – 2025 
            </p>
          </article>
        </section>
      </ScrollSection>
    </main>
  );
}
