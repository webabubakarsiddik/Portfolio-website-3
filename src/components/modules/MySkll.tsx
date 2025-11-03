import Banner2 from "@/components/modules/Banner";

const techSkills = [
  { icon: "bx bxl-html5", color: "rgb(105, 36, 6)", name: "HTML" },
  { icon: "bx bxl-css3", color: "rgb(107, 11, 129)", name: "CSS" },
  { icon: "bx bxl-javascript", color: "darkgoldenrod", name: "Javascript" },
  { icon: "bx bxl-python", color: "rgb(175, 52, 151)", name: "Python" },
  { icon: "bx bxl-react", color: "rgb(54, 138, 191)", name: "React" },
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
      <Banner2
  items={[
    {
      image: "/IMG-20250913-WA0004.jpg",
      text: "HTML",
      link: "https://www.w3schools.com/html/",
    },
    {
      image: "/IMG-20250913-WA0003.jpg",
      text: "CSS",
      link: "https://www.w3schools.com/css/",
    },
     {
      image: "/IMG-20250913-WA0006.jpg",
      text: "JavaScript",
      link: "https://www.w3schools.com/js/js_intro.asp",
    },
    {
      image: "/IMG-20250913-WA0001.jpg",
      text: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      image: "/IMG-20250913-WA0005.jpg",
      text: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      image: "/IMG-20250913-WA0010.jpg",
      text: "React",
      link: "https://react.dev/",
    },
    {
      image: "/IMG-20250913-WA0009.jpg",
      text: "Node.js",
      link: "https://nodejs.org/en",
    },
    {
      image: "/IMG-20250913-WA0007.jpg",
      text: "jQuery",
      link: "https://jquery.com/",
    },
    
    {
      image: "/IMG-20250913-WA0008.jpg",
      text: "MySQL",
      link: "https://www.mysql.com/",
    },
    {
      image: "/IMG-20250913-WA0002.jpg",
      text: "API",
      link: "https://www.api.org/",
    },
    {
      image: "/IMG-20250913-WA0011.jpg",
      text: "sass",
      link: "https://sass-lang.com/",
    },
  ]}
/>

    </section>
  );
}
