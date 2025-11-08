import HeroTitle from '@/components/modules/HeroTitle';
import { PiFacebookLogoFill, PiLinkedinLogoFill, PiInstagramLogoFill, PiWhatsappLogoFill } from "react-icons/pi";
import { Link } from 'react-router'; // 'react-router'-এর বদলে 'react-router-dom' ব্যবহার করা হলো

function Home() {
  return (
    <div>
      {/* === HOME SECTION === */}
      <section
        id="home"
        className="
          bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
          flex flex-col-reverse md:flex-row items-center justify-center w-full 
          gap-10 md:gap-20 pt-20 md:pt-30 px-5 md:px-16 min-h-screen scroll-mt-20
        "
      >
        
        <div className="home-content max-w-xl text-center md:text-left">
          {/* H3 - Hello, It's Me */}
          <h3 className='text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-[#6e67ef] to-[#FF7E5F]/70 bg-clip-text text-transparent'>
            Hello, It's Me
          </h3>
          
          {/* H1 - Web Developer */}
          <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#6c66dd] to-[#FF7E5F]/70 bg-clip-text text-transparent'>
            Web Developer
          </h1>
          
          {/* HeroTitle Component */}
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>
            <HeroTitle />
          </h3>
          
          
          <p className='text-lg mb-6 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent'>
            I'm a web developer with 1+ years of experience. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quod, rem...
          </p>

          
          <div className="home-scl flex justify-center md:justify-start gap-5 mt-4 mb-8">
            <Link to={"https://www.facebook.com/"} target="_blank" className="hover:scale-110 transition-transform duration-300">
              <PiFacebookLogoFill className="text-4xl text-blue-500 hover:text-blue-600" />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank" className="hover:scale-110 transition-transform duration-300">
              <PiInstagramLogoFill className="text-4xl text-pink-500 hover:text-pink-600" />
            </Link>
            <Link to={"https://www.whatsapp.com/"} target="_blank" className="hover:scale-110 transition-transform duration-300">
              <PiWhatsappLogoFill className="text-4xl text-green-500 hover:text-green-600" />
            </Link>
            <Link to={"https://www.linkedin.com/feed/"} target="_blank" className="hover:scale-110 transition-transform duration-300">
              <PiLinkedinLogoFill className="text-4xl text-blue-300 hover:text-blue-400" />
            </Link>
          </div>
          
          {/* "Check Resume */}
                <div className="relative flex flex-col items-center justify-center w-full pt-10 pb-10 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        
            
               <div className="hidden md:flex justify-between w-full max-w-3xl absolute top-1/2 -translate-y-1/2">
                <span className="w-1/3 h-1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-500 ease-in-out"></span>
                <span className="w-1/3 h-1 bg-gradient-to-l from-[#6a64dc] to-[#FF7E5F]/70 rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-transform duration-500 ease-in-out"></span>
              </div>

             
            <Link
             to="/CivePage"
              className="
            btn-box relative z-10 inline-block px-8 py-3 
            bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-white font-semibold 
            rounded-lg shadow-xl hover:opacity-90 hover:scale-105 hover:rotate-1 
            transition-all duration-500 ease-in-out
          "
        >
           Check Resume
        </Link>
      </div>
        </div>

        
        <div className="home-imgHover p-[6px] rounded-full mt-10 md:mt-0">
          <img
            src="/Abu bakar.jpg"
            
            className="w-64 h-64 md:w-[400px] md:h-[400px] border-15 rounded-full object-cover border-animate shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;