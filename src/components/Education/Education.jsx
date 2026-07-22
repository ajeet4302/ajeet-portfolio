import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
            Education
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Academic Journey
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
            My academic background that built the foundation for my software
            development journey.
          </p>

        </div>

        {/* Card */}

        <div className="max-w-5xl mx-auto">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500 transition duration-300 p-6 md:p-10">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

              {/* Left */}

              <div>

                <div className="flex items-center gap-3">

                  <FaGraduationCap className="text-3xl text-blue-500" />

                  <h3 className="text-2xl md:text-3xl font-bold">
                    Bachelor of Technology (B.Tech)
                  </h3>

                </div>

                <h4 className="text-lg md:text-xl text-blue-400 mt-4">
                  Engineering
                </h4>

                <div className="flex items-center gap-2 mt-4 text-slate-400">

                  <FaUniversity />

                  <span>
                    Deogiri Institute of Engineering and Management Studies (DIEMS)
                  </span>

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center gap-2 text-slate-400">

                <FaCalendarAlt />

                <span>2020 – 2024</span>

              </div>

            </div>

            <hr className="border-slate-700 my-8" />

            <p className="text-slate-300 leading-7 md:leading-8 text-sm md:text-base">
              Successfully completed my Bachelor of Technology (B.Tech) in 2024.
              During my academic journey, I developed a strong foundation in
              Java, Object-Oriented Programming (OOP), Data Structures &
              Algorithms (DSA), Database Management Systems (DBMS), Software
              Engineering, Web Development, and Problem Solving, which prepared
              me for building real-world full-stack applications.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;