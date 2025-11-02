
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router";
const projects = [
  {
    img: "/img5.png",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
    link: "https://online-library-navy.vercel.app/",
  },
  {
    img: "/img1.png",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
    link: "https://blog-site-f7ef.vercel.app/",
  },
  {
    img: "/img4.png",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
    link: "https://papaya-dolphin-ea9e9b.netlify.app/",
  },
];

function Project() {
  return (
    <section id="portfolio" className="mt-30 mb-27 lg:px-12 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#36cc95] to-[#FF7E5F] bg-clip-text text-transparent">
          Latest <span className="">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition">
              <h5 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">{project.title}</h5>
              <p className="text-sm mb-4 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">{project.desc}</p>
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r  from-[#6a64dc] to-[#FF7E5F]/70 text-white rounded-lg hover:bg-amber-600 transition"
              >
                <FiExternalLink  className="bx bx-link-external text-lg"/>
                My Projects
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
