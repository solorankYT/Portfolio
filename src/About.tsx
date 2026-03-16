import { Card } from "@/components/ui/card";
import ScrollSection from "./components/ScrollSection";



const experience = [
  {
    title: "Freelance Full-Stack Developer",
    duration: "January 2024 – Present",
    stack: ["React", "Heroku", "TypeScript", "Node.js", "Laravel", "MySQL", "Hostinger"],
    responsibilities: [
      "Design, develop, and deploy scalable full-stack web applications for diverse clients.",
      "Implemented RESTful APIs to enable seamless frontend–backend integration and third-party services.",
      "Provided technical consulting on architecture decisions, technology stack selection, and development best  practices, resulting in optimized system performance and maintainable codebases",
    ],
  },
  {
    title: "Web Development Intern",
    duration: "June 2023 – December 2023",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
    responsibilities: [
      "Developed a student portal and admin dashboard for course enrollment and record tracking.",
      "Designed and implemented RESTful APIs with request validation, authentication, and secure data handling.",
      "Implemented role-based access control using Spatie to manage user roles and enforce authorization policies.",
      "Contributed to debugging, feature testing, and UI enhancements, improving responsiveness and accessibility, leading to smoother student and admin workflows",
    ]
  }
]

export default function About() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 space-y-20">

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

          <div className="flex flex-col gap-8">
            {experience.map((exp, index) => (
              <article
                key={index}
                className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-md hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <h3 className="text-2xl text-white font-bold">
                    {exp.title}
                  </h3>
                  <p className="italic text-gray-400 text-sm mt-1 sm:mt-0">
                    {exp.duration}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="bg-yellow-500/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-base leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

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
