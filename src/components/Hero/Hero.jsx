import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaEye,
} from "react-icons/fa";

import profile from "../../assets/images/Ajeet.jpeg";
import portfolio from "../../Data/portfolio";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE */}

        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt={portfolio.name}
              className="relative
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-96 md:h-96
              lg:w-[430px] lg:h-[430px]
              object-cover
              rounded-3xl
              border-4 md:border-[6px]
              border-blue-500
              shadow-2xl"
            />

          </div>
        </div>

        {/* CONTENT */}

        <div className="order-2 lg:order-1">

          {/* Available */}

          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-full px-4 py-2 mb-6">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-sm">
              Available for Full-Time Opportunities
            </span>

          </div>

          <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4 text-sm">
            Welcome to my Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

            Hi, I'm

            <span className="block text-blue-500 mt-2">
              {portfolio.name}
            </span>

          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-bold mt-6 min-h-[60px]">

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "Backend Developer",
                2000,
                "REST API Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 text-slate-400 text-base md:text-lg leading-7 md:leading-8 max-w-xl">
            {portfolio.subtitle}
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">

            <Button href={portfolio.resume} download>
              <FaDownload className="mr-2" />
              Download Resume
            </Button>

            <Button
              href={portfolio.resume}
              primary={false}
              target="_blank"
            >
              <FaEye className="mr-2" />
              View Resume
            </Button>

            <Button href="#contact" primary={false}>
              <FaEnvelope className="mr-2" />
              Contact Me
            </Button>

          </div>

          {/* Social */}

          <div className="flex gap-6 mt-8 text-2xl md:text-3xl">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 border-t border-slate-800 pt-8 text-center">

            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                6+
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mt-2">
                Months Experience
              </p>

            </div>

            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                5+
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mt-2">
                Projects
              </p>

            </div>

            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                15+
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mt-2">
                Technologies
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;