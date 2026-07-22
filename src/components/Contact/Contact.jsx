import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import portfolio from "../../data/portfolio";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrzam0y",
        "template_3ng3rpl",
        form.current,
        "RHLMAZwgsNi5feORC"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Email Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };


  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
            I'm actively looking for Java Full Stack Developer opportunities.
            Feel free to reach out if you have an opportunity or would like to
            connect.
          </p>

        </div>


        {/* Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">


          {/* Left Contact Information */}

          <div className="bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800">


            <div className="mb-8">

              <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-full text-sm">

                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                Available for Full-Time Opportunities

              </span>

            </div>


            <div className="space-y-8">


              <div className="flex items-center gap-4">

                <FaEnvelope className="text-blue-500 text-2xl flex-shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-slate-400 break-all">
                    {portfolio.email}
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <FaPhone className="text-blue-500 text-2xl flex-shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-slate-400">
                    {portfolio.phone}
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-blue-500 text-2xl flex-shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    {portfolio.location}
                  </p>
                </div>

              </div>


            </div>


            <div className="flex gap-6 mt-10 text-3xl">

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


          </div>



          {/* Contact Form */}


          <div className="bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800">


            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />


              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />


              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full rounded-xl bg-slate-800 p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>


              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>


            </form>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Contact;