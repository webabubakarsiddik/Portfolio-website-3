// src/components/Resume.jsx


function Resume() {
  return (
    <div className="min-h-screen bg-[#f5f9ff] flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#0c2c52] text-white flex flex-col md:flex-row items-center p-6 md:p-10 gap-6">
          <img
            src="/Abu bakar.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">MD ABU BAKAR SIDDIK</h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-200">
              FRONTEND DEVELOPER
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 text-[#0c2c52]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] pb-1 mb-3">
                CONTACT
              </h3>
              <p>📞 01345340311</p>
              <p>📧 mr.siddikdev@gmail.com</p>
              <p>📍 Dhaka-1230, Dakshin Khan, Azampur kasabazar</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] pb-1 mb-3">
                SKILLS
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Frontend Development:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Next.js (currently learning)</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Tools & Workflow:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Responsive & Mobile-First Design</li>
                  <li>Figma (basic)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Soft Skills:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Teamwork & Collaboration</li>
                  <li>Quick Learner</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] pb-1 mb-3">
                PROFILE
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                I am a Frontend Developer. I have built several projects using
                React and am currently learning Next.js. I always strive to make
                websites visually appealing, responsive, and user-friendly.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] pb-1 mb-3">
                EDUCATION
              </h3>
              <div className="mb-3">
                <h4 className="font-semibold">Damudya Hamidia Kamil Madrasa</h4>
                <p className="text-sm text-gray-700">
                  Damudya, Shariatpur <br /> Alim
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Jamia Islamia Darul Ulum Madania
                </h4>
                <p className="text-sm text-gray-700">
                  Kutubkhali, Jatrabari, Dhaka <br /> 2020 – 2024
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold border-b-2 border-[#0c2c52] pb-1 mb-3">
                EXPERIENCE
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Although I haven’t worked professionally yet, I am confident that
                I can apply my skills effectively. Below, I have provided the
                links to my last two projects:
              </p>

              <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
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
                    E-commerce Next-js & Redux Toolkit  & Tailwind CSS
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
