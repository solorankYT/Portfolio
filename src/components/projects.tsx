export default function Projects() {

    const projects = [
  {
    title: "Unitrack",
    image: "./unitrack.png",
    description: 
      "Unitrack is a web application designed to streamline order tracking and product management for users. Leveraging a full-stack React and Node.js architecture with a MySQL database, it ensures seamless, real-time updates and intuitive user experience across devices.",
    techstack: ["React", "Node.js", "MySQL"],
    link: "https://unitrack.shop/",
  },
  {
    title: "Ulam Generator",
    image: "./ulambox.png",
    description:
      "Ulam Generator is an innovative web app that dynamically creates personalized dish recommendations based on user-selected categories. Built with Next.js API routes, Firebase backend, and styled using Shadcn UI components, it offers fast, scalable, and visually engaging performance.",
    techstack: ["Next.js API route", "Firebase", "Shadcn"],
    link: "https://ulamgenerator.vercel.app/",
  },
  {
    title: "Valoplay",
    image: "./valoplay.png",
    description:
      "Valoplay marks my first React project — a sleek, responsive platform that delivers up-to-date Valorant tier lists to gamers. Utilizing React with Tailwind CSS, it combines modern UI design principles and dynamic data rendering to provide an engaging user experience.",
    techstack: ["React", "Tailwind CSS"],
    link: "https://valoplay.netlify.app/",
  },
  {
    title: "Taskora",
    image: "./taskmanagement.png",
    description:
      "Taskora is a Jira-inspired task management platform enhanced with a built-in Pomodoro timer to boost productivity. Built with Laravel 12 and React Inertia, it leverages ShadCN for a sleek UI and MySQL for reliable data storage, offering a seamless balance of task organization and time management.",
    techstack: ["Laravel 12", "React Inertia", "ShadCN", "MySQL"],
    link: "#",
  },

  {
    title: "Reply Craft",
    image: "./replycraft.png",
    description:
      "Taskora is a Jira-inspired task management platform enhanced with a built-in Pomodoro timer to boost productivity. Built with Laravel 12 and React Inertia, it leverages ShadCN for a sleek UI and MySQL for reliable data storage, offering a seamless balance of task organization and time management.",
    techstack: ["Laravel 12", "React", "API", "PgSQL"],
    link: "https://replycraft.framer.website/",
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
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-2">
                    {project.techstack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-yellow-500 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
               </a>
            </div>
            ))}
        </div>
    );
}