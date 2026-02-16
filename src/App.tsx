import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./Home";
import About from "./About";
import ProjectPage from "./ProjectPage";
// import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-950 flex">
      
      {/* <ScrollToTop /> */}

      <NavBar />

        <main className="flex-1 ml-64  p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projectpage" element={<ProjectPage />} />
          </Routes>
        </main>



    </div>

  );
}
