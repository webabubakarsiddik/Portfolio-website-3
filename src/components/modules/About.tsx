import { Link } from "react-router";


function About() {

  return (
    <section>
      <div id="about"
      className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 md:gap-20 mt-30 mb-22 px-5 md:px-16">
          {/* Image */}
      <div className="about-img mb-8 md:mb-0">
        <img
          src="/Abu bakar.jpg"
          alt="Portrait of Abu Bakar"
          className="w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 border-4 md:border-15 border-b-blue-900 border-t-blue-900 border-l-cyan-700 border-r-cyan-700 border-animate rounded-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="about-text text-center md:text-left home-content max-w-xl bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="">Me</span>
        </h2>
        <h4 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r  from-[#100c57] to-[#FF7E5F]/70 bg-clip-text text-transparent">
          Full Stack Developer
        </h4>
        <p className="mb-6 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellendus
          non ratione! Et maxime provident eligendi nemo recusandae magnam adipisci
          sit corrupti mollitia ratione, cumque a blanditiis cum aspernatur dolorum.
          deleniti...

        </p>
         
      </div>
      </div>
    
      <div className="flex justify-center w-full mt-4 relative">
        <span className="w-64 h-1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out-900 absolute top-5 left-86"></span>
        <span className="w-64 h-1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out absolute top-5 right-86"></span>
       
      <Link
        to="#contact"
        className="btn-box inline-block px-8 py-3 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out"
      >
        More About Me
      </Link>
    </div>

    </section>
  );
}

export default About;
