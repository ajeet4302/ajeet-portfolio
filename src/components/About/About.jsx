import {
  FaJava,
  FaReact,
  FaDatabase,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
} from "react-icons/si";

import portfolio from "../../Data/portfolio";

function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Get to know me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left */}

          <div>

            <p className="text-slate-300 text-lg leading-9">

              Hi! I'm <span className="text-blue-500 font-semibold">
              {portfolio.name}
              </span>, a passionate Java Full Stack Developer.

              <br /><br />

              I enjoy building scalable backend applications using
              Java, Spring Boot, Hibernate and MySQL while also
              creating responsive user interfaces with React.

              <br /><br />

              Currently I'm working as a Java Full Stack Developer
              Intern at Maxgen Technologies where I build real-world
              projects and continuously improve my development skills.

            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-900 rounded-2xl p-6">

              <FaJava
                size={38}
                className="text-orange-400"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Java
              </h3>

              <p className="text-slate-400 mt-2">
                Core Java, OOP, Collections
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <SiSpringboot
                size={38}
                className="text-green-500"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Spring Boot
              </h3>

              <p className="text-slate-400 mt-2">
                REST APIs & Backend
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <FaReact
                size={38}
                className="text-cyan-400"
              />

              <h3 className="mt-5 text-xl font-semibold">
                React
              </h3>

              <p className="text-slate-400 mt-2">
                Modern UI Development
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6">

              <FaDatabase
                size={38}
                className="text-yellow-400"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Database
              </h3>

              <p className="text-slate-400 mt-2">
                MySQL & Oracle SQL
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-slate-900 rounded-2xl p-6">

            <h3 className="font-semibold text-xl">
              Experience
            </h3>

            <p className="mt-4 text-slate-400">
              6+ Months
              <br />
              Java Full Stack Internship
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <h3 className="font-semibold text-xl">
              Education
            </h3>

            <p className="mt-4 text-slate-400">
              B.Tech Graduate
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <FaMapMarkerAlt
              className="text-blue-500"
              size={24}
            />

            <h3 className="font-semibold text-xl mt-3">
              Location
            </h3>

            <p className="mt-4 text-slate-400">
              {portfolio.location}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;