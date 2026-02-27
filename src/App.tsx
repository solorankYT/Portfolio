import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./Home";
import About from "./About";
import ProjectPage from "./ProjectPage";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-950 flex flex-col">
     
      <NavBar />
      
      <main className="flex-grow">
         <Suspense fallback={<div>Loading...</div>}>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectpage" element={<ProjectPage />} />
        </Routes>
          </Suspense>
      </main>
      
    </div>
  );
}
