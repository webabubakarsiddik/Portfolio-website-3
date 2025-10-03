

function Services() {
  const servicesData = [
    {
      icon:  "bx bx-code",
      title: "Web Development",
      description:
        "Build fast, responsive, and accessible websites using modern technologies and best practices.",
    },
    {
      icon: "bx bx-crop",
      title: "UI/UX Design",
      description:
        "Craft user-friendly interfaces and seamless experiences tailored to your audience.",
    },
    {
      icon: "bx bxl-apple",
      title: "App Development",
      description:
        "Develop cross-platform mobile apps with smooth performance and engaging UI.",
    },
  ];

  return (
    <section id="services" className="mt-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#6a64dc] to-[#FF7E5F]/70 bg-clip-text text-transparent">
          My <span className="">Services</span>
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
              <h2 className="text-xl font-semibold mb-3 text-black">{service.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="read inline-block font-medium bg-gradient-to-r from-[#FF7E5F] to-[#6a64dc]/70"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
