
import { FaArrowUp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="mt-30 mb-9 px-6 lg:px-12 w-full relative">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        {/* === Left Side === */}
        <div>
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r  from-[#54bcc2] to-[#FF7E5F]/70 bg-clip-text text-transparent">
            Contact <span className="">Me</span>
          </h2>
          <h4 className="text-xl sm:text-lg mb-4 bg-gradient-to-r  from-[#726fa8] to-[#FF7E5F]/70 bg-clip-text text-transparent">Let's Work Together</h4>
          <p className=" mb-6 text-sm sm:text-base bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            aliquam magnam iste repudiandae dignissimos quae ullam esse rem
            voluptate odit commodi ducimus, inventore tenetur rerum!
          </p>

          <ul className="space-y-3 mb-6 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <i className="bx bxs-send bg-gradient-to-r  from-[#36cc95] to-[#FF7E5F] bg-clip-text text-transparent text-xl"></i>
              <span className="bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">contact@email.com</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bxs-phone bg-gradient-to-r  from-[#36b79b] to-[#FF7E5F]/70 bg-clip-text text-transparent text-xl"></i>
              <span className="bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent"> 01345340311</span>
            </li>
          </ul>

          <div className="contact-icons flex gap-4 text-2xl">
            {["facebook-circle", "twitter", "instagram", "linkedin", "github"].map((icon) => (
              <a
                key={icon}
                href="#"
                className=" bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent transition-colors"
              >
                <i className={`bx bxl-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* === Right Side: Contact Form === */}
        <form className=" shadow-lg rounded-lg p-6 space-y-4 w-full bg-gradient-to-r  from-[#dad9e7] to-[#FF7E5F]/70">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full border-3 rounded-md p-3 outline-none focus:ring-2 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent focus:ring-cyan-900"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="w-full border-3 rounded-md p-3 outline-none focus:ring-2 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent focus:ring-cyan-900"
          />
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="w-full border-3 rounded-md p-3 outline-none focus:ring-2 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent focus:ring-cyan-900"
          />
          <textarea
            placeholder="Enter Your Message"
            required
            className="w-full border-3 rounded-md p-3 outline-none focus:ring-2 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent focus:ring-cyan-900"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="sent w-full bg-gradient-to-r from-[#8783dd] to-[#FF7E5F]/70  font-semibold py-3 rounded-md hover:bg-amber-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-gradient-to-r from-[#8783dd] to-[#FF7E5F]/70 hover:bg-blue-300 transition z-50"
      >
        <FaArrowUp className="bx bx-up-arrow-alt text-2xl bg-gradient-to-r from-[#8783dd] to-[#FF7E5F]/70"></FaArrowUp>

      </a>
    </section>
  );
}

export default Contact;
