export default function Projects() {

    const projects = [
        {
            title: "Unitrack",
            image: "./unitrack.png",
            description: "Unitrack is a web application that allows users to track their orders and manage their products.",
            techstack: ["React", "Node.js", "MYSQL"],
            link: "https://unitrack.shop/",
        },
         {
            title: "Ulam Generator",
            image: "./ulamgen.png",
            description: "Ulam Generator is a web application that random generates a list of dish based on the categories selected by the user.",
            techstack: ["Next.js API route", "Firebase", "Shadcn"],
            link: "https://ulamgenerator.vercel.app/",
        },
         {
            title: "Valoplay",
            image: "./valoplay.png",
            description: "My first project using react. Valoplay is a web application that allows users to see the latest tier list of the game Valorant.",
            techstack: ["React", "Tailwind CSS"],
            link: "https://valoplay.netlify.app/",
        },
      
    ];

    return (
        <div>
            {projects.map((project, index) => (
                
                <div key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4 mb-4 "
                >
                <a href={project.link}>
                 <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-90 object-cover rounded-lg mb-4 opacity-50 hover:opacity-100"/>
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                
                <div className="flex flex-wrap mb-2">
                    {project.techstack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-yellow-300 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="text-gray-500 mb-4">{project.description}</p>
               </a>
            </div>
            ))}
        </div>
    );
}