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
      className="pt-24 w-full bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-4xl sm:text-1xl font-bold text-center mb-20 mt-3 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">
          My Services
        </h1>

        {/* Responsive grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition duration-300 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70"
            >
              <i
                className={`${service.icon} text-5xl mb-4`}
                style={{ color: "darkgoldenrod" }}
              ></i>
              <h2 className="text-xl font-semibold mb-3 text-black">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-box inline-block font-medium bg-gradient-to-r from-[#FF7E5F] to-[#6a64dc]/70 px-4 py-2 rounded text-white"
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
