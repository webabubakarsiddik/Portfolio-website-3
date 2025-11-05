import HeroTitle from '@/components/modules/HeroTitle';
import { PiFacebookLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { Link } from 'react-router';

function Home() {
  return (
  <div>
      {/* === HOME SECTION === */}
      <section
        id="home"
        className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-30 pt-30 px-5 md:px-16"
      >   
        {/* Left Content */}
        <div className="home-content max-w-xl ">
          <h3 className='bg-gradient-to-r  from-[#6e67ef] to-[#FF7E5F]/70 bg-clip-text text-transparent'>Hello, It's Me</h3>
          <h1 className='bg-gradient-to-r  from-[#6c66dd] to-[#FF7E5F]/70 bg-clip-text text-transparent'>Web Developer</h1>
          <h3>
            <HeroTitle />
          </h3>
          <p className='bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent'>
            I'm a web developer with 1+ years of experience. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quod, rem...
          </p>

          {/* Social Icons */}
          <div className="home-scl flex gap-7 mt-2 mb-8 text-1xl ">
            <Link to={"https://www.facebook.com/"}>
            <PiFacebookLogoFill className=" bx bxl-facebook text-blue-500" />
            </Link>
            <Link to={"https://www.instagram.com/"}>
            <PiInstagramLogoFill className="bx bxl-instagram text-pink-500" />
            </Link>
            <Link to={"https://www.whatsapp.com/"}>
            <PiWhatsappLogoFill  className="bx bxl-whatsapp text-green-500" />
            </Link>
            <Link to={"https://www.linkedin.com/feed/"}>
             <PiLinkedinLogoFill className="bx bxl-linkedin text-blue-300" />
            </Link> 
      </div>
    <div className="relative flex flex-col items-center justify-center w-full mt-10 mb-10">
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
      </div>

        {/* Right Image */}
        <div className="home-imgHover p-[6px] rounded-full">
          <img
            src="/Abu bakar.jpg"
            alt="Abu Bakar"
            className="w-[400px] h-[400px]  border-15  rounded-full object-cover  border-animate"
          />
        </div>
         </section>
    </div>
  );
}

export default Home;
