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
 
    
      <ScrollSection>
        <section className="max-w-3xl w-full space-y-8">
       

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

  );
}
