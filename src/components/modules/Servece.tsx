import { Link } from "react-router"; 


function Services() {
  const servicesData = [
    {
      icon: "bx bx-code",
      title: "Web Development",
      description:
        "Build fast, responsive, and accessible websites using modern technologies and best practices.",
      link: "https://www.youtube.com/@HabluProgrammer",
    },
    {
      icon: "bx bx-crop",
      title: "UI/UX Design",
      description:
        "Craft user-friendly interfaces and seamless experiences tailored to your audience.",
      link: "https://www.youtube.com/@atiq31416",
    },
    {
      icon: "bx bxl-apple",
      title: "App Development",
      description:
        "Develop cross-platform mobile apps with smooth performance and engaging UI.",
      link: "https://www.youtube.com/@RabbilHasanRupom",
    },
  ];

  return (
    <section
      id="services"
      className="
        pt-16 pb-20 md:pt-28 w-full 
        bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <h1 className="
          text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 
          bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F] bg-clip-text text-transparent
        ">
          My Services
        </h1>

        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="
                p-6 rounded-xl shadow-lg 
                hover:shadow-2xl hover:scale-[1.02] transition duration-500 
                bg-white dark:bg-gray-800 border border-transparent 
                hover:border-indigo-400 dark:hover:border-pink-400
              "
            >
              
              <i
                className={`${service.icon} text-5xl mb-4 
                  text-indigo-600 dark:text-pink-400 
                  block mx-auto sm:mx-0`} 
              ></i>
              
              
              <h2 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F] bg-clip-text text-transparent">
                {service.title}
              </h2>
              
           
              <p className="bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F] bg-clip-text text-transparent dark:text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              
             
              <Link
                to={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-box inline-block font-medium px-5 py-2 
                  rounded-lg shadow-md 
                  bg-gradient-to-r from-[#FF7E5F] to-[#6a64dc] 
                  text-white hover:opacity-90 transition duration-300
                "
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;