import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./Home";
import About from "./About";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-950 flex flex-col">
     
      <NavBar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectpage" element={<ProjectPage />} />
        </Routes>
      </main>
      
    </div>
  );
}
