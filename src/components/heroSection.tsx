import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { motion, type Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
    delay,
  } satisfies Transition,
});

export default function HeroSection() {
  return (
    <main className="container max-w-3xl mx-auto mt-20 p-8 bg-gray-800/80 backdrop-blur border border-gray-700 rounded-xl shadow-lg">
      
      {/* Eyebrow */}
      <motion.p
        {...fadeUp(0)}
        className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500 mb-3"
      >
        Full-Stack Developer
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.08)}
        className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3"
      >
        Hi, I'm{" "}
        <span className="text-yellow-400">Mark Funa</span>
      </motion.h1>

      {/* Location */}
      <motion.p
        {...fadeUp(0.14)}
        className="flex items-center gap-1.5 text-sm text-gray-500 mb-5"
      >
        <CiLocationOn className="text-base shrink-0" />
        Quezon City, Philippines
      </motion.p>

      {/* Divider */}
      <motion.div
        {...fadeUp(0.18)}
        className="w-10 h-[2px] bg-yellow-500 rounded-full mb-6"
      />

      {/* Bio */}
      <motion.p
        {...fadeUp(0.22)}
        className="text-gray-400 text-base leading-relaxed mb-6"
      >
        I build full-stack web applications end-to-end — from REST APIs and
        database design to React UIs and CI/CD pipelines. I work across{" "}
        <span className="text-gray-200 font-medium">
          Node.js, Laravel, PostgreSQL, Docker, and AWS
        </span>
        , with a focus on clean architecture, test coverage, and systems that
        are easy to debug and extend.
      </motion.p>

      {/* Tech tags */}
      <motion.div
        {...fadeUp(0.28)}
        className="flex flex-wrap gap-2 mb-8"
      >
        {[
          "React", "TypeScript", "Node.js", "Laravel",
          "PostgreSQL", "Docker", "AWS", "Python",
        ].map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 rounded-full
              bg-gray-700/60 text-gray-300 border border-gray-600
              hover:border-yellow-500/60 hover:text-yellow-400
              transition-colors duration-200 cursor-default"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div
        {...fadeUp(0.34)}
        className="flex items-center justify-between"
      >
        <a
          href="./MarkFunaResume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5
            text-sm font-semibold text-gray-900 bg-yellow-400
            rounded-lg hover:bg-yellow-300
            transition-colors duration-200 focus-visible:outline
            focus-visible:outline-2 focus-visible:outline-yellow-400"
        >
          Download CV
        </a>

        <ul className="flex items-center gap-5 text-gray-500 text-xl">
          <li>
            <a
              href="https://github.com/solorankYT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/markfuna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:markfuna6@gmail.com"
              aria-label="Send Email"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <CgMail className="text-2xl" />
            </a>
          </li>
        </ul>
      </motion.div>
    </main>
  );
}