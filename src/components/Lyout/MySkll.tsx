



const techSkills = [
  { icon: "bx bxl-html5", color: "rgb(105, 36, 6)", name: "HTML" },
  { icon: "bx bxl-css3", color: "rgb(107, 11, 129)", name: "CSS" },
  { icon: "bx bxl-javascript", color: "darkgoldenrod", name: "Javascript" },
  { icon: "bx bxl-python", color: "rgb(175, 52, 151)", name: "Python" },
  { icon: "bx bxl-react", color: "rgb(54, 138, 191)", name: "React" },
];

const logos = [
  { src: "/IMG-20250913-WA0005.jpg", label: "Tailwind" },
  { src: "/IMG-20250913-WA0001.jpg", label: "Bootstrap" },
  { src: "/IMG-20250913-WA0004.jpg", label: "HTML" },
  { src: "/IMG-20250913-WA0006.jpg", label: "JavaScript" },
  { src: "/IMG-20250913-WA0010.jpg", label: "React" },
  { src: "/IMG-20250913-WA0009.jpg", label: "Node.js" },
  { src: "/IMG-20250913-WA0007.jpg", label: "jQuery" },
  { src: "/IMG-20250913-WA0003.jpg", label: "CSS" },
  { src: "/IMG-20250913-WA0008.jpg", label: "MySQL" },
  { src: "/IMG-20250913-WA0002.jpg", label: "API" },
  { src: "/IMG-20250913-WA0011.jpg", label: "Sass" },
  { src: "/IMG-20250913-WA0005.jpg", label: "Tailwind" },
  { src: "/IMG-20250913-WA0001.jpg", label: "Bootstrap" },
  { src: "/IMG-20250913-WA0004.jpg", label: "HTML" },
  { src: "/IMG-20250913-WA0006.jpg", label: "JavaScript" },
  { src: "/IMG-20250913-WA0010.jpg", label: "React" },
  { src: "/IMG-20250913-WA0009.jpg", label: "Node.js" },
  { src: "/IMG-20250913-WA0007.jpg", label: "jQuery" },
  { src: "/IMG-20250913-WA0003.jpg", label: "CSS" },
  { src: "/IMG-20250913-WA0008.jpg", label: "MySQL" },
  { src: "/IMG-20250913-WA0002.jpg", label: "API" },
  { src: "/IMG-20250913-WA0011.jpg", label: "Sass" },
];

export default function MySkill() {
  return (
    
    <section className="w-full px-4 md:px-8 lg:px-12 mb-27 mt-30">
        <h1 className="sub-title bg-gradient-to-r from-[#140e70] to-[#FF7E5F]/70 bg-clip-text text-transparent">My<span>Skills</span></h1>
      <div className="section flex flex-col lg:flex-row gap-10">

        {/* === Left: Technical Skills === */}
        <div className="container1 flex-1" id="Skills">
          <h1 className="heading1 bg-gradient-to-r from-[#1e1974] to-[#FF7E5F]/70 bg-clip-text text-transparent">Technical Skills</h1>
          <div className="Technical-bars bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">
            {techSkills.map(({ icon, color, name }) => (
              <div className="bar" key={name}>
                <i style={{ color }} className={icon}></i>
                <div className="info"><span>{name}</span></div>
                <div className={ `progress-info ${name.toLowerCase()}`}><span></span></div>
              </div>
            ))}
          </div>
        </div>

        {/* === Right: Professional Skills === */}
        <div className="container2 flex-1">
          <h1 className="heading1 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">Professional Skills</h1>
          <div className="radial-bars">
            {[
              { percent: "90%", text: "Creativity", path: "path-1" },
              { percent: "65%", text: "Communication", path: "path-2" },
              { percent: "75%", text: "Problem Solving", path: "path-3" },
              { percent: "80%", text: "Team Work", path: "path-4" },
            ].map(({ percent, text, path }) => (
              <div className="radial-bar" key={text}>
                <svg viewBox="0 0 200 200">
                  <circle className="progress-bar" cx="100" cy="100" r="80" />
                  <circle className={`path ${path}`} cx="100" cy="100" r="80" />
                </svg>
                <div className="percentage">{percent}</div>
                <div className="text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === Horizontal Logo/Skill Slider === */}
      <div className="overflow-x-auto mt-16">
        <div className="slider py-30 gap-2">
          {logos.concat(logos).map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center bg-gray-600 text-amber-50
                         rounded-xl p-3 shadow-lg w-[150px] h-[150px]
                         hover:scale-105 hover:saturate-150 transition bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-16 h-16 object-contain rounded-3xl"
              />
              <p className="py-3 font-bold text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
