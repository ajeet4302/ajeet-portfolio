import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiGithub,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      {
        name: "Java",
        level: 90,
        icon: <FaJava className="text-orange-500 text-xl" />,
      },
      {
        name: "Spring Boot",
        level: 85,
        icon: <SiSpringboot className="text-green-500 text-xl" />,
      },
      {
        name: "Hibernate",
        level: 80,
        icon: <FaCode className="text-yellow-400 text-xl" />,
      },
      {
        name: "REST APIs",
        level: 90,
        icon: <FaCode className="text-blue-400 text-xl" />,
      },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        level: 80,
        icon: <FaReact className="text-cyan-400 text-xl" />,
      },
      {
        name: "JavaScript",
        level: 80,
        icon: <SiJavascript className="text-yellow-400 text-xl" />,
      },
      {
        name: "HTML5",
        level: 90,
        icon: <FaHtml5 className="text-orange-500 text-xl" />,
      },
      {
        name: "CSS3",
        level: 85,
        icon: <FaCss3Alt className="text-blue-500 text-xl" />,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        level: 85,
        icon: <SiMysql className="text-blue-500 text-xl" />,
      },
      {
        name: "Oracle SQL",
        level: 80,
        icon: <FaDatabase className="text-red-500 text-xl" />,
      },
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        level: 85,
        icon: <FaGitAlt className="text-orange-500 text-xl" />,
      },
      {
        name: "GitHub",
        level: 90,
        icon: <SiGithub className="text-white text-xl" />,
      },
      {
        name: "Docker",
        level: 75,
        icon: <FaDocker className="text-blue-400 text-xl" />,
      },
      {
        name: "Maven",
        level: 80,
        icon: <SiApachemaven className="text-red-500 text-xl" />,
      },
      {
        name: "Postman",
        level: 85,
        icon: <SiPostman className="text-orange-500 text-xl" />,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My Technical Skills
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to design, develop, deploy,
            and maintain modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">
                {category.title}
              </h3>

              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-3 font-medium">
                      {skill.icon}
                      {skill.name}
                    </span>

                    <span className="text-blue-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;