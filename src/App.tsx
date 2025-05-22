import NavBar from "./components/navBar";
import Projects from "./components/projects";
import SkillsCarousel from "./components/skillsCarousel";
import { CiLocationOn } from "react-icons/ci";

function App() {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 min-h-screen flex flex-col">
      <NavBar />
      <main className="container max-w-3xl mx-auto mt-20 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Hi, I’m <span className="text-yellow-400">Mark Funa</span>
        </h1>
        <h3 className="flex items-center text-xl text-gray-500 font-semibold mb-3">
          <CiLocationOn className="mr-2" />
          Quezon City, Philippines
        </h3>
      
      <p className="text-gray-400 text-lg leading-relaxed">
          <span className="text-yellow-500">Fullstack Developer </span> skilled in building efficient and scalable applications. 
        <span className="text-gray-300"> A strong team player with excellent collaboration skills</span>, 
        I thrive in dynamic environments and enjoy working with diverse teams to achieve shared goals.
      </p>

      </main>

      <section  className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
        <SkillsCarousel />
        </section>

      <section id="projects" className="container max-w-3xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
        <Projects />
      </section>
    </div>
  );
}

export default App;
