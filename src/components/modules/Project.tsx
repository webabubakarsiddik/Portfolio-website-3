import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router";

const projects = [
  {
    img: "/img5.png",
    title: "Online Library",
    desc: "A responsive Online Library Website created with HTML, CSS, and JavaScript. This project focuses on a smooth user experience, clean design, and easy book browsing — perfect for readers who love digital libraries.",
    link: "https://online-library-navy.vercel.app/",
  },
  {
    img: "/img1.png",
    title: "Modern Blog Site",
    desc: "A fully responsive Blog Platform built with React.js and Tailwind CSS, designed for seamless user interaction and modern UI. It allows users to explore, read, and share insightful articles with smooth navigation and a visually appealing layout.",
    link: "https://blog-site-f7ef.vercel.app/",
  },
  {
    img: "/img4.png",
    title: "Business Website",
    desc: "A fully responsive Business Website built with Next.js and Tailwind CSS, designed to showcase professional services with modern animations, elegant layouts, and smooth user experience.",
    link: "https://papaya-dolphin-ea9e9b.netlify.app/",
  },
];

function Project() {
  return (
    <section
      id="portfolio"
      className="pt-20 pb-20 lg:px-12 w-full bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* ===== Title ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#36cc95] to-[#FF7E5F] bg-clip-text text-transparent tracking-wide">
          Latest <span className="text-[#6a64dc] dark:text-[#FF7E5F]">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          A collection of my recent works and creative experiments.
        </p>
      </div>

      {/* ===== Project Grid ===== */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg bg-white/10 dark:bg-gray-800/40 hover:shadow-2xl hover:shadow-[#FF7E5F]/20 transition-all duration-700 ease-in-out"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 sm:px-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">
                {project.title}
              </h5>

              <p className="text-xs sm:text-sm md:text-base mb-5 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent max-w-md leading-relaxed">
                {project.desc}
              </p>

              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F] text-white font-medium rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#FF7E5F]/30 transition-transform duration-300 ease-in-out"
              >
                <FiExternalLink className="text-lg sm:text-xl" />
                <span>View Project</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
