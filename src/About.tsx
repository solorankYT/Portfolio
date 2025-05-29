import { Card } from "@/components/ui/card";
import ScrollSection from "./components/ScrollSection";


const stack = [
  "Laravel",
  "Vue",
  "PostgreSQL",

];

export default function About() {
  return (
    <main className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <ScrollSection>
      <Card className="max-w-3xl w-full p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg flex flex-col items-center text-center my-8">
        <img
          src="./2x2.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-6 object-cover"
          loading="lazy"
        />
        <h1 className="text-gray-400 mb-4 text-2xl">
          <span className="text-yellow-400">Frontend</span> Developer
        </h1>

        <div className="text-gray-400 text-lg leading-relaxed max-w-prose space-y-4">
          <p>
            Hi, I'm <strong>Mark Funa</strong> — a recent Information Technology graduate excited to start my career as a <strong>Front-End Developer</strong>.
          </p>

          <p>
            I recently completed a 6-month internship as a Full Stack Developer, where I built real-world web applications using <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Firebase</strong>, and <strong>MySQL</strong>.
          </p>

          <p>
            I'm looking to join a team where I can contribute, grow, and help create products that make a difference.
          </p>

          <p>
            Outside of coding, I enjoy reading about tech and playing video games. I'm also open to connecting with others in the developer community.
          </p>
        </div>

        <div className="mt-8 w-full text-left">
          <h2 className="text-yellow-400 text-xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-base">
            <div>
              <h3 className="text-gray-200 font-medium mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-medium mb-2">Backend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
      </ScrollSection>

    <ScrollSection>
      <section className="max-w-3xl w-full mt-16 space-y-4">
        <h1 className="text-3xl text-gray-100">Work Experience</h1>

        <article className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow">
          <h1 className="text-2xl  text-gray-200 font-bold">Full Stack Developer Intern</h1>
          <p className="italic text-gray-400 mb-2">
            Information Technology Development Center | September 2024 – December 2024
          </p>

          {stack.map((item, index) => (
            <div key={index} className="inline-block bg-gray-700 text-yellow-500 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded mb-2">
              {item}
            </div>
          ))}
            
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed a student portal and admin dashboard for course enrollment and record tracking.</li>
            <li>Created RESTful APIs with input validation to ensure secure and accurate data handling.</li>
            <li>Improved the interface and usability of the portal through UI/UX updates.</li>
            <li>Implemented secure login, role-based access, and data protection features.</li>
          </ul>
        </article>
      </section>
      </ScrollSection>

      <ScrollSection>
      <section className="max-w-3xl w-full mt-16 space-y-4">
        <h1 className="text-3xl text-gray-100">Education</h1>
        <article className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow">
          <h1 className="text-xl text-gray-200">
            <span className="text-yellow-400">Trinity University of Asia</span> | 2021 – 2025
          </h1>
          <p className="text-gray-400 mt-2 italic">
            Bachelor of Science in Information Technology – Specializing in Mobile, Web, and Software Development
          </p>
        </article>
      </section>
      </ScrollSection>
    </main>
  );
}
