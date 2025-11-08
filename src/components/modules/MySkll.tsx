import Banner2 from "@/components/modules/Banner";


const techSkills = [
  { icon: "bx bxl-html5", color: "rgb(227, 79, 38)", name: "HTML", percent: 90 }, 
  { icon: "bx bxl-css3", color: "rgb(38, 77, 228)", name: "CSS", percent: 60 }, 
  { icon: "bx bxl-javascript", color: "rgb(240, 219, 79)", name: "Javascript", percent: 85 }, 
  { icon: "bx bxl-python", color: "rgb(55, 115, 155)", name: "Python", percent: 50 },
  { icon: "bx bxl-react", color: "rgb(97, 218, 251)", name: "React", percent: 75 }, 
];


const professionalSkills = [
  { percent: 90, color: "rgb(255, 140, 0)", text: "Creativity", path: "path-1" }, 
  { percent: 65, color: "rgb(155, 89, 182)", text: "Communication", path: "path-2" }, 
  { percent: 75, color: "rgb(26, 188, 156)", text: "Problem Solving", path: "path-3" },
  { percent: 80, color: "rgb(97, 218, 251)", text: "Team Work", path: "path-4" }, 
];

export default function MySkill() {
  return (
    <section 
      className="w-full px-6 md:px-12 lg:px-20 pt-20 md:pt-28 md:pb-32 
        bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      
      <style>
        {`
        /* Linear Bar Initialization Animation (scaleX(0) to scaleX(1)) */
        @keyframes animate { 100% { transform: scaleX(1); } }
        /* Text/Percentage Fade-In Animation */
        @keyframes showText { 100% { opacity: 1; } }

        /* Radial Bar Animations (Stroke Dashoffset) */
        @keyframes animate-path1 { 100% { stroke-dashoffset: 50; } } 
        @keyframes animate-path2 { 100% { stroke-dashoffset: 175; } } 
        @keyframes animate-path3 { 100% { stroke-dashoffset: 125; } } 
        @keyframes animate-path4 { 100% { stroke-dashoffset: 100; } } 

        /* Base SVG Styles */
        .progress-bar-base {
            stroke-width: 10;
            stroke: #e5e7eb; /* Light background stroke (Tailwind gray-200) */
            fill: transparent;
            stroke-dasharray: 502;
            stroke-dashoffset: 502;
        }

        .path-base {
            stroke-width: 10;
            /* stroke: rgb(45, 131, 152); <-- REMOVED: Color now comes from inline style */
            fill: transparent;
            stroke-dasharray: 502;
            stroke-dashoffset: 502;
            stroke-linecap: round;
        }

        /* Applying Keyframes to paths via classes */
        .path-1 { animation: animate-path1 2s forwards; }
        .path-2 { animation: animate-path2 2s forwards; }
        .path-3 { animation: animate-path3 2s forwards; }
        .path-4 { animation: animate-path4 2s forwards; }
        
        /* General layout adjustments for better responsiveness */
        .radial-bar .percentage, .radial-bar .text {
            /* Ensures text/percentage also fades in with animation */
            opacity: 0; 
            animation: showText 0.5s 1.5s linear forwards;
        }
        `}
      </style>
      
      <h1 className="
        text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 
        bg-gradient-to-r from-[#140e70] to-[#FF7E5F] bg-clip-text text-transparent
      ">
        My<span className="text-transparent">Skills</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
        
        
        <div className="flex-1 space-y-8 p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 transition hover:shadow-2xl">
          <h2 className="
            text-3xl font-bold text-center lg:text-left mb-8 pb-3 border-b-2 border-indigo-500/50
            bg-gradient-to-r from-[#1e1974] to-[#FF7E5F]/70 bg-clip-text text-transparent
          ">
            Technical Skills
          </h2>
          
          <div className="space-y-8">
            {techSkills.map(({ icon, color, name, percent }, index) => (
              <div className="space-y-2 relative" key={name}>
                <div className="flex justify-between items-center text-gray-800 dark:text-gray-200">
                  <div className="flex items-center space-x-3">
                    <i style={{ color }} className={`${icon} text-3xl transition duration-500`}></i>
                    <span className="font-semibold text-lg">{name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{percent}%</span>
                </div>
                
            
                <div 
                  className="w-full h-2 bg-gray-900/10 dark:bg-gray-700/50 rounded-full overflow-hidden" 
                  style={{ 
                    animation: `animate 1s ease-in-out forwards`, 
                    transform: 'scaleX(0)', 
                    transformOrigin: 'left',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                
                  <div 
                    className="h-full rounded-full relative" 
                    style={{ 
                      width: `${percent}%`, 
                      backgroundColor: color,
                      animation: `animate 1s 1s ease-in-out forwards`, 
                      transform: 'scaleX(0)', 
                      transformOrigin: 'left',
                      animationDelay: `${index * 0.2 + 0.3}s`
                    }}
                  >
                   
                    <span 
                      className="absolute top-[-28px] right-0 translate-x-1/2 px-2 py-0.5 text-xs rounded shadow bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                      style={{ opacity: 0, animationDelay: `${index * 0.2 + 1.5}s` }}
                    >
                      {percent}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    

      
        <div className="flex-1 p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 transition hover:shadow-2xl">
          <h2 className="
            text-3xl font-bold text-center lg:text-left mb-12 pb-3 border-b-2 border-indigo-900/50
            bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent
          ">
            Professional Skills
          </h2>
          
          {/* Removed bg-gradient from parent div to keep text color consistent */}
          <div className="radial-bars grid grid-cols-2 gap-y-12 gap-x-6 justify-items-center">
            {professionalSkills.map(({ percent, color, text, path }, index) => (
              <div 
                className="radial-bar w-full max-w-[170px] h-[170px] relative text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center" 
                key={text}
              >
                {/* SVG (Animated Circle) */}
                <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 w-[120px] h-[120px]">
                  <circle className="progress-bar-base" cx="100" cy="100" r="80" />
                  <circle 
                    className={`path-base ${path}`} 
                    cx="100" cy="100" r="80"
                    /* --- FIX 1: SVG Path-এ dynamic color --- */
                    style={{ 
                        animationDelay: `${index * 0.3 + 0.5}s`,
                        stroke: color 
                    }}
                  />
                </svg>
                
                {/* Percentage Text (Fades in) */}
                <div 
                  /* --- FIX 2: Percentage Text Color --- */
                  className="percentage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold dark:text-pink-400"
                  style={{ 
                    animationDelay: `${index * 0.3 + 1.5}s`,
                    color: color // Percentage-এও dynamic color 
                  }}
                >
                  {percent}%
                </div>
                
                {/* Skill Name (Fades in) */}
                <div 
                  className="text w-full absolute bottom-4 text-center text-md font-semibold dark:text-gray-300"
                  /* --- FIX 3: Single style prop  animationDelay  --- */
                  style={{ 
                    animationDelay: `${index * 0.3 + 1.5}s`,
                    color: color, // Skill Name-এ dynamic color 
                    opacity: 0, // Ensure initial opacity is set for animation
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- */}
      
      {/* Banner2 কম্পোনেন্ট (টেকনোলজি লোগো স্লাইডার) */}
      <div className="mt-20">
        <Banner2
          items={[
            { image: "/IMG-20250913-WA0004.jpg", text: "HTML", link: "https://www.w3schools.com/html/" },
            { image: "/IMG-20250913-WA0003.jpg", text: "CSS", link: "https://www.w3schools.com/css/" },
            { image: "/IMG-20250913-WA0006.jpg", text: "JavaScript", link: "https://www.w3schools.com/js/js_intro.asp" },
            { image: "/IMG-20250913-WA0001.jpg", text: "Bootstrap", link: "https://getbootstrap.com/" },
            { image: "/IMG-20250913-WA0005.jpg", text: "Tailwind", link: "https://tailwindcss.com/" },
            { image: "/IMG-20250913-WA0010.jpg", text: "React", link: "https://react.dev/" },
            { image: "/IMG-20250913-WA0009.jpg", text: "Node.js", link: "https://nodejs.org/en" },
            { image: "/IMG-20250913-WA0007.jpg", text: "jQuery", link: "https://jquery.com/" },
            { image: "/IMG-20250913-WA0008.jpg", text: "MySQL", link: "https://www.mysql.com/" },
            { image: "/IMG-20250913-WA0002.jpg", text: "API", link: "https://www.api.org/" },
            { image: "/IMG-20250913-WA0011.jpg", text: "sass", link: "https://sass-lang.com/" },
          ]}
        />
      </div>

    </section>
  );
}