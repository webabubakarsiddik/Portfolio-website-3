import { Link } from "react-router";


function About() {

  return (
    <section>
      <div
      id="about"
      className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 md:gap-20 pt-25 pb-20 px-6 md:px-16 scroll-mt-20"
    >
      {/* Image Section */}
           <div className="home-imgHover p-[6px] rounded-full">
          <img
            src="/Abu bakar.jpg"
            alt="Abu Bakar"
            className="w-[400px] h-[400px]  border-15  rounded-full object-cover  border-animate"
          />
        </div>

      {/* Text Section */}
      <div className="about-text text-center md:text-left max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">
          About <span className="text-transparent">Me</span>
        </h2>

        <h4 className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-[#100c57] to-[#FF7E5F]/70 bg-clip-text text-transparent">
          Full Stack Developer
        </h4>
        <div className="space-y-3 px-4 sm:px-6 sm:py-8 md:px-12 md:py-10 leading-relaxed text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent text-left">
            <p>
              I’m a passionate Full Stack Developer who loves crafting clean,
              responsive, and interactive user interfaces using modern web
              technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p>
              My goal is to turn creative ideas into real-world digital
              experiences that are fast, accessible, and visually engaging. I
              enjoy solving problems through code and continuously learning new
              tools to stay ahead in the evolving world of frontend development.
            </p>
            <p>
              When I’m not coding, I love exploring UI/UX trends, contributing to
              open-source projects, and building side projects that push my
              creativity further.
            </p>
        </div>
      </div>
    </div>
    
       <div className="relative flex flex-col items-center justify-center w-full pt-10 pb-10 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Decorative Gradient Lines */}
      <div className="hidden md:flex justify-between w-full max-w-3xl absolute top-1/2 -translate-y-1/2">
        <span className="w-1/3 h-1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-500 ease-in-out"></span>
        <span className="w-1/3 h-1 bg-gradient-to-l from-[#6a64dc] to-[#FF7E5F]/70 rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-500 ease-in-out"></span>
      </div>

      {/* Center Button */}
      <Link
        to="#contact"
        className="btn-box relative z-10 inline-block px-8 py-3 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-in-out"
      >
        More About Me
      </Link>
    </div>

    </section>
  );
}

export default About;
