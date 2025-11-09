import Resume from "@/components/modules/abuPage/aboutmePage";
import { Link } from "react-router"; 


function Cive() {
  return (
  
    <div className="max-w-4xl mt-25 mx-auto p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-2xl rounded-xl space-y-10 font-sans my-10">
      
  
      <Resume/>
  
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">MD: Abu Bakar Siddik</h1>
        <h2 className="text-xl md:text-2xl text-indigo-500 font-semibold">Full Stack Developer</h2>
        
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300 mt-2">
          <span>📞 +8801345340311</span>
          <span>📧 mr.siddikdev@gmail.com</span>
          <span className="break-all">📍 Dhaka, Dakshin Khan, Azampur kasabazar</span>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <Link to="https://github.com/webabubakarsiddik" target="_blank" className="text-indigo-500 hover:text-indigo-400 transition hover:underline">GitHub</Link>
          <Link to="https://portfolio-website-3-do6t.vercel.app/" target="_blank" className="text-indigo-500 hover:text-indigo-400 transition hover:underline">Portfolio</Link>
          <Link to="https://linkedin.com/in/yourprofile" target="_blank" className="text-indigo-500 hover:text-indigo-400 transition hover:underline">LinkedIn</Link>
        </div>
      </header>

      {/* 2. Career Objective */}
      <section className="space-y-3 pt-4">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Career Objective</h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          As a Full Stack Developer, I focus on developing <span className="font-medium">scalable applications</span> with optimized database queries and API integrations. In my recent projects, I built solutions that improved efficiency. I aim to leverage my expertise in <span className="font-medium">Node.js, Express, React, and MongoDB</span> to create innovative web solutions and support company growth.
        </p>
      </section>

      {/* 3. Skills */}
      <section className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Skills</h3>
        <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-gray-700 dark:text-gray-300">
          <li><strong>Programming Languages:</strong> JavaScript</li>
          <li><strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, React.js, Next.js, Vue.js, React Router, Axios, TanStack Query, Framer Motion, Shadcn UI</li>
          <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, Firebase, JWT</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Stripe, Figma, Netlify, Vercel, Chrome DevTools, EmailJS</li>
          <li><strong>Soft Skills:</strong> Hardworking, Responsible, Team Collaboration, Quick Learner, Communication</li>
        </ul>
      </section>

      {/* 4. Projects */}
      <section className="space-y-8">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Projects</h3>

        {/* Project 1 */}
        <div className="space-y-3 border-l-4 border-indigo-200 pl-4">
          <h4 className="text-lg md:text-xl font-bold">RideX - Smart Ride Sharing Platform (Team Project)</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
            <Link to="https://linkedin.com/in/yourprofile" target="_blank" className="hover:underline">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Server Link</Link>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">A smart ride-sharing platform connecting riders and passengers in real-time. Provides seamless trip management, intelligent ride tracking, and hassle-free booking with responsive design and secure authentication.</p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Developed Rider Dashboard with real-time ride tracking, available rides access, and live location updates.</li>
            <li>Built Rider Earnings Overview and key statistics for efficient ride and earnings management.</li>
            <li>Optimized responsive dashboards for Users, Riders, and Admins.</li>
          </ul>
          <p className="text-sm"><strong>Technologies:</strong> Next.js, React, Shadcn UI, Tailwind CSS, Node.js, MongoDB, Express.js, AI, Axios, GSAP</p>
        </div>
        
        {/* Project 2 */}
        <div className="space-y-3 border-l-4 border-indigo-200 pl-4">
          <h4 className="text-lg md:text-xl font-bold">Fitness - Fitness Tracker</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
            <Link to="https://linkedin.com/in/yourprofile" target="_blank" className="hover:underline">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Server Link</Link>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">A MERN-based fitness tracking platform where users can explore workout classes, book trainers, and manage fitness journeys, with secure authentication and online payment integration.</p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Enabled users to view trainer availability and book sessions online, improving overall booking efficiency.</li>
            <li>Developed admin dashboard to manage fitness classes and trainers efficiently.</li>
            <li>Implemented secure JWT authentication, enhancing account security and reducing login issues.</li>
          </ul>
          <p className="text-sm"><strong>Technologies:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Axios, Firebase, Stripe, JWT</p>
        </div>

        {/* Project 3 */}
        <div className="space-y-3 border-l-4 border-indigo-200 pl-4">
          <h4 className="text-lg md:text-xl font-bold">Open Journal - Blog & Journal Web App</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
            <Link to="https://linkedin.com/in/yourprofile" target="_blank" className="hover:underline">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik" target="_blank" className="hover:underline">GitHub Server Link</Link>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">A web platform where users can write, edit, and share personal journal entries securely, with organized categories and search functionality.</p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Built CRUD functionality for personal journal entries, allowing create, edit, delete entries easily.</li>
            <li>Implemented authorized entries with search and dark/light mode for better UX.</li>
            <li>Integrated secure login and registration system using Firebase for robust data privacy.</li>
          </ul>
          <p className="text-sm"><strong>Technologies:</strong> JavaScript, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase</p>
        </div>
      </section>

      {/* 5. Training */}
      <section className="space-y-3 pt-4">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Professional Training</h3>
        <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-gray-700 dark:text-gray-300">
          <li>Completed Web Development Course from Programming Hero.</li>
          <li>Completed English Language Course under BMET at Technical Training Center.</li>
        </ul>
      </section>

      {/* 6. Languages */}
      <section className="space-y-3">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Languages</h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">Bangla (Native) | English (Intermediate)</p>
      </section>

    </div>
  );
}

export default Cive;