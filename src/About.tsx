import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <main className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl w-full p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg flex flex-col items-center text-center">
        <img
          src="./2x2.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-6 object-cover"
          loading="lazy"
        />
        <h1 className="text-gray-400 mb-4 text-2xl">
          <span className="text-yellow-400">Frontend</span> Developer
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-prose">
          I build responsive and maintainable web applications using modern tools and frameworks.
          I enjoy working with others and contribute effectively to team goals.
          <br />
          <br />
          My experience includes delivering projects that meet both technical and user needs.
          I’m always learning and exploring better ways to solve problems through code.
          <br />
          <br />
          I’m open to new opportunities and enjoy connecting with others in the tech community.
          <br />
          <br />
          Outside of work, I like reading about tech and playing video games.
        </p>
      </Card>

      <section className="max-w-3xl w-full mt-16 space-y-4">
        <h1 className="text-3xl text-gray-100">Work Experience</h1>

        <article className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow">
          <h1 className="text-2xl text-yellow-400">Full Stack Developer Intern</h1>
          <p className="italic text-gray-400 mb-2">
            Information Technology Development Center | September 2024 – December 2024
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed a student portal and admin dashboard for course enrollment and record tracking.</li>
            <li>Created RESTful APIs with input validation to ensure secure and accurate data handling.</li>
            <li>Improved the interface and usability of the portal through UI/UX updates.</li>
            <li>Implemented secure login, role-based access, and data protection features.</li>
          </ul>
        </article>
      </section>

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
    </main>
  );
}
