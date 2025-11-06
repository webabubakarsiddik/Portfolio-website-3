// src/components/Resume.jsx

function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center sm:px-6">
      <div className="bg-white dark:bg-gray-800 w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden transition-all duration-500">
        {/* Header Section */}
        <div className="bg-[#0c2c52] text-white flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 text-center md:text-left">
          <img
            src="/Abu bakar.jpg"
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
              MD ABU BAKAR SIDDIK
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-200">
              FRONTEND DEVELOPER
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 md:p-10 text-[#0c2c52] dark:text-white">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] dark:border-white pb-1 mb-3">
                CONTACT
              </h3>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>📞 01345340311</li>
                <li>📧 mr.siddikdev@gmail.com</li>
                <li>📍 Dhaka-1230, Dakshin Khan, Azampur Kasabazar</li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] dark:border-white pb-1 mb-3">
                SKILLS
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Frontend Development:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Next.js (currently learning)</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Tools & Workflow:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Responsive & Mobile-First Design</li>
                  <li>Figma (basic)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Soft Skills:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>Teamwork & Collaboration</li>
                  <li>Quick Learner</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] dark:border-white pb-1 mb-3">
                PROFILE
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                I am a Frontend Developer passionate about creating visually
                appealing, responsive, and user-friendly web experiences. I have
                built several projects using React and am currently learning
                Next.js.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] dark:border-white pb-1 mb-3">
                EDUCATION
              </h3>
              <div className="mb-3">
                <h4 className="font-semibold text-sm sm:text-base">
                  Damudya Hamidia Kamil Madrasa
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Damudya, Shariatpur <br /> Alim
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Jamia Islamia Darul Ulum Madania
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Kutubkhali, Jatrabari, Dhaka <br /> 2020 – 2024
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] dark:border-white pb-1 mb-3">
                EXPERIENCE
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
                Although I haven’t worked professionally yet, I am confident that
                I can apply my skills effectively. Below are two of my latest
                projects:
              </p>

              <ul className="list-disc list-inside text-sm sm:text-base text-blue-700 dark:text-blue-400 space-y-1">
                <li>
                  <a
                    href="https://portfolio-website-3-do6t.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Portfolio Website – React & Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://papaya-dolphin-ea9e9b.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    E-commerce – Next.js, Redux Toolkit & Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
