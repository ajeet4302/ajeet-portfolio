import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ticketwave from "../../assets/projects/TicketWave.jpeg";
import splitshare from "../../assets/projects/SplitShare.jpeg";

const projects = [
  {
    title: "TicketWave",
    image: ticketwave,
    description:
      "A full-stack online ticket booking platform that enables users to browse events, book tickets, and manage reservations. Built with Java, Spring Boot, React, Hibernate, and MySQL, featuring secure authentication, REST APIs, responsive design, and Docker deployment.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Hibernate",
      "MySQL",
      "REST API",
      "Docker",
    ],
    github: "https://github.com/ajeet4302/TicketWave",
    live: "https://ticketwave-phyq.onrender.com",
    featured: true,
  },
  {
    title: "SplitShare",
    image: splitshare,
    description:
      "A full-stack expense-sharing application that allows users to create groups, split expenses, track balances, and settle payments. Developed using Java, Spring Boot, Hibernate, MySQL, REST APIs, Docker, and deployed on Render.",
    tech: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST API",
      "Docker",
    ],
    github: "https://github.com/ajeet4302/splitShare",
    live: "https://splitshare-vfh9.onrender.com/",
    featured: true,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-7 md:leading-8 text-sm md:text-base">
            Here are some of my featured full-stack applications built using
            Java, Spring Boot, React, Hibernate, MySQL, Docker and modern web
            technologies.
          </p>
        </div>

        {/* Projects */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-lg hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition duration-500"
                />

                {project.featured && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs md:text-sm px-3 py-2 rounded-full font-semibold">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Content */}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 hover:bg-blue-600 transition px-3 py-2 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-blue-500 hover:bg-blue-600 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;