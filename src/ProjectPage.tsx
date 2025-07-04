import { Link } from "react-router-dom";

export default function ProjectPage() {
    return (

        <main className="bg-gray-900 dark:bg-gray-950 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-white text-xl text-center">Sorry, Under Construction!! <br/>
        You can check my projects in <span className="text-yellow-400"><Link to="/">home page</Link></span> for the mean time. Thank you</p>
         </main>

    );
}