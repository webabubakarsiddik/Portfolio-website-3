
// import { FiExternalLink } from "react-icons/fi";
// import { Link } from "react-router";
// const projects = [
//   {
//     img: "/img5.png",
//     title: "Web Development",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
//     link: "https://online-library-navy.vercel.app/",
//   },
//   {
//     img: "/img1.png",
//     title: "Web Development",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
//     link: "https://blog-site-f7ef.vercel.app/",
//   },
//   {
//     img: "/img4.png",
//     title: "Web Development",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis hic neque odit laborum est consectetur commodi sed tempora.",
//     link: "https://papaya-dolphin-ea9e9b.netlify.app/",
//   },
// ];

// function Project() {
//   return (
//     <section id="portfolio" className="mt-30 mb-27 lg:px-12 w-full">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold bg-gradient-to-r from-[#36cc95] to-[#FF7E5F] bg-clip-text text-transparent">
//           Latest <span className="">Projects</span>
//         </h2>
//       </div>

// <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
//   {projects.map((project, i) => (
//     <div
//       key={i}
//       className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-900/10 hover:shadow-2xl transition-shadow duration-500"
//     >
//       {/* Project Image */}
//       <img
//         src={project.img}
//         alt={project.title}
//         className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
//         <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">
//           {project.title}
//         </h5>

//         <p className="text-xs sm:text-sm md:text-base mb-4 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent max-w-md leading-relaxed">
//           {project.desc}
//         </p>

//         <Link
//           to={project.link}
//           className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-white rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#FF7E5F]/40 transition-transform duration-300 ease-in-out"
//         >
//           <FiExternalLink className="text-lg sm:text-xl" />
//           <span className="text-sm sm:text-base font-medium">My Projects</span>
//         </Link>
//       </div>
//     </div>
//   ))}
// </div>
// </section>
//   );
// }



import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router'; 
const projects = [
  {
    title: "Project Alpha",
    desc: "A stunning application built with React and Tailwind for a seamless user experience.",
    img: "path/to/image1.jpg", // Replace with actual image paths
    link: "/project/alpha"
  },
  {
    title: "Project Beta",
    desc: "An e-commerce platform featuring modern design and full-stack integration.",
    img: "path/to/image2.jpg", // Replace with actual image paths
    link: "/project/beta"
  },
  {
    title: "Project Gamma",
    desc: "A data visualization tool that simplifies complex data sets for quick insights.",
    img: "path/to/image3.jpg", // Replace with actual image paths
    link: "/project/gamma"
  },
];

/**
 * A responsive grid component to display project cards with a hover effect.
 * It maps over the 'projects' array (either passed as a prop or defined locally).
 *
 * @param {object[]} projects - An array of project objects.
 */
const Project = ({ projects: projectList = projects }) => { // Using projectList and a default value for flexibility
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
      {/* Map over the projects array to render each project card */}
      {projectList.map((project, i) => (
        <div
          // Using a combination of index and title for a safer key, assuming title is somewhat unique
          key={`${project.title}-${i}`}
          className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-900/10 hover:shadow-2xl transition-shadow duration-500"
        >
          {/* Project Image */}
          <img
            src={project.img}
            alt={project.title}
            // Image scales up on hover
            className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />

          {/* Overlay - Initially transparent, appears on hover */}
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            
            {/* Project Title with Gradient Text */}
            <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-[#58bbd2] to-[#FF7E5F] bg-clip-text text-transparent">
              {project.title}
            </h5>

            {/* Project Description with Gradient Text */}
            <p className="text-xs sm:text-sm md:text-base mb-4 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent max-w-md leading-relaxed">
              {project.desc}
            </p>

            {/* Link Button with Gradient Background */}
            <Link
              to={project.link}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 text-white rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#FF7E5F]/40 transition-transform duration-300 ease-in-out"
            >
              <FiExternalLink className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-medium">View Project</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;