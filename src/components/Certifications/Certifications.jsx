import { FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Training & Certification
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional Training
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Professional training that strengthened my expertise in Java Full Stack Development.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">

          <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-blue-500 transition duration-300">

            <div className="flex flex-wrap justify-between gap-6">

              <div>

                <div className="flex items-center gap-3">
                  <FaCertificate className="text-3xl text-yellow-400" />

                  <h3 className="text-3xl font-bold">
                    Java Full Stack Development
                  </h3>

                </div>

                <h4 className="text-xl text-blue-400 mt-4">
                  Full Stack Guru IT Solutions
                </h4>

              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <FaCalendarAlt />
                <span>1 Year Professional Training</span>
              </div>

            </div>

            <hr className="border-slate-700 my-8" />

            <p className="text-slate-300 leading-8">
              Successfully completed an intensive one-year Java Full Stack Development training program covering Core Java, Advanced Java, Spring Boot, Hibernate, React.js, HTML, CSS, JavaScript, MySQL, REST APIs, Git, GitHub, Maven, Docker, and real-world project development.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Java",
                "Spring Boot",
                "Hibernate",
                "React",
                "MySQL",
                "REST API",
                "Git",
                "GitHub",
                "Docker",
                "Maven"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-600 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

            <div className="mt-8 flex items-center gap-3 text-green-400 font-semibold">
              <FaAward />
              Certificate Successfully Completed
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;