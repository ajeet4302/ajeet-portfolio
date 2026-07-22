import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 bg-[#020617] text-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Professional Experience
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
            Hands-on experience in developing full-stack applications using
            Java, Spring Boot, React, Hibernate, MySQL, Docker, and modern
            development tools.
          </p>

        </div>

        {/* Card */}

        <div className="max-w-6xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-3xl p-6 md:p-10 shadow-lg transition duration-300">

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

              {/* Left */}

              <div>

                <div className="flex items-center gap-3">

                  <FaBriefcase className="text-blue-500 text-3xl" />

                  <h3 className="text-2xl md:text-3xl font-bold">
                    Java Full Stack Developer Intern
                  </h3>

                </div>

                <h4 className="text-lg md:text-xl text-blue-400 mt-3">
                  Maxgen Technologies Pvt. Ltd.
                </h4>

              </div>

              {/* Right */}

              <div className="space-y-3 text-slate-400">

                <div className="flex items-center gap-2">

                  <FaCalendarAlt />

                  <span>May 2026 – Present</span>

                </div>

                <div className="flex items-center gap-2">

                  <FaMapMarkerAlt />

                  <span>Pune, Maharashtra</span>

                </div>

              </div>

            </div>

            <hr className="my-8 border-slate-700" />

            {/* Responsibilities */}

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                <p className="text-slate-300 leading-7">
                  Developed scalable full-stack applications using Java,
                  Spring Boot, Hibernate, React, and MySQL.
                </p>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                <p className="text-slate-300 leading-7">
                  Designed RESTful APIs and integrated backend services with
                  responsive React-based user interfaces.
                </p>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                <p className="text-slate-300 leading-7">
                  Worked with Git, GitHub, Maven, Docker, Postman, and MySQL
                  throughout the development lifecycle.
                </p>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                <p className="text-slate-300 leading-7">
                  Built and deployed real-world projects including
                  <strong> TicketWave</strong> and
                  <strong> SplitShare</strong>, while strengthening debugging,
                  problem-solving, and software development skills.
                </p>

              </div>

            </div>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-10">

              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                Java
              </span>

              <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
                Spring Boot
              </span>

              <span className="bg-cyan-600 px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-yellow-600 px-4 py-2 rounded-full text-sm">
                Hibernate
              </span>

              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
                MySQL
              </span>

              <span className="bg-orange-600 px-4 py-2 rounded-full text-sm">
                Docker
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;