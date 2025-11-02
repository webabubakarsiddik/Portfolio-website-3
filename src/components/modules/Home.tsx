import HeroTitle from '@/components/modules/HeroTitle';
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { PiTiktokLogoFill } from "react-icons/pi";
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      {/* === HOME SECTION === */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-30 mt-30 px-5 md:px-16"
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
            <Link to={"https://www.tiktok.com/en/"}>
             <PiTiktokLogoFill className="bx bxl-tiktok text-purple-400" />
            </Link>
            
          </div>
         <div className="relative">
           
            <span className=" w-75 h-1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out absolute top-5 left-47"></span>
          
          <Link
            to="#contact"
            className="btn-box inline-block px-8 py-3 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-black font-semibold rounded-lg shadow-md hover:opacity-90 hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out"
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
