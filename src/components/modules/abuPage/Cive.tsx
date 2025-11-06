import Resume from "@/components/modules/abuPage/aboutmePage";
import { Link } from "react-router";


function Cive() {
  return (

    
    <div className="max-w-4xl  mx-auto p-25 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl rounded-xl space-y-10 font-sans">
            < Resume/>
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-5xl font-bold">MD: Abu Bakar Siddik</h1>
        <h2 className="text-2xl text-indigo-500 font-semibold">Full Stack Developer</h2>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
          <span>📞 +8801345340311</span>
          <span>📧 mr.siddikdev@gmail.com</span>
          <span>📍 Dhaka, Dakshin Khan, Azampur kasabazar</span>
        </div>
        <div className="flex justify-center gap-6 mt-2">
          <Link to="https://github.com/webabubakarsiddik" className="text-indigo-500 hover:underline">GitHub</Link>
          <Link to="https://portfolio-website-3-do6t.vercel.app/" className="text-indigo-500 hover:underline">Portfolio</Link>
          <Link to="https://linkedin.com/in/yourprofile" className="text-indigo-500 hover:underline">LinkedIn</Link>
        </div>
      </header>

      {/* Career Objective */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Career Objective</h3>
        <p>
          As a Full Stack Developer, I focus on developing <span className="font-medium">scalable applications</span> with optimized database queries and API integrations. In my recent projects, I built solutions that improved efficiency. I aim to leverage my expertise in <span className="font-medium">Node.js, Express, React, and MongoDB</span> to create innovative web solutions and support company growth.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Skills</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Programming Languages:</strong> JavaScript</li>
          <li><strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, React.js, Next.js, Vue.js, React Router, Axios, TanStack Query, Framer Motion, Shadcn UI</li>
          <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, Firebase, JWT</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Stripe, Figma, Netlify, Vercel, Chrome DevTools, EmailJS</li>
          <li><strong>Soft Skills:</strong> Hardworking, Responsible, Team Collaboration, Quick Learner, Communication</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Projects</h3>

        {/* Project 1 */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">RideX - Smart Ride Sharing Platform (Team Project)</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
            <Link to="https://linkedin.com/in/yourprofile">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Server Link</Link>
          </div>
          <p>A smart ride-sharing platform connecting riders and passengers in real-time. Provides seamless trip management, intelligent ride tracking, and hassle-free booking with responsive design and secure authentication.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed Rider Dashboard with real-time ride tracking, available rides access, and live location updates.</li>
            <li>Built Rider Earnings Overview and key statistics for efficient ride and earnings management.</li>
            <li>Optimized responsive dashboards for Users, Riders, and Admins.</li>
          </ul>
          <p><strong>Technologies:</strong> Next.js, React, Shadcn UI, Tailwind CSS, Node.js, MongoDB, Express.js, AI, Axios, GSAP</p>
        </div>

        {/* Project 2 */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Fitness - Fitness Tracker</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
             <Link to="https://linkedin.com/in/yourprofile">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Server Link</Link>
          </div>
          <p>A MERN-based fitness tracking platform where users can explore workout classes, book trainers, and manage fitness journeys, with secure authentication and online payment integration.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Enabled users to view trainer availability and book sessions online, improving overall booking efficiency.</li>
            <li>Developed admin dashboard to manage fitness classes and trainers efficiently.</li>
            <li>Implemented secure JWT authentication, enhancing account security and reducing login issues.</li>
          </ul>
          <p><strong>Technologies:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Axios, Firebase, Stripe, JWT</p>
        </div>

        {/* Project 3 */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Open Journal - Blog & Journal Web App</h4>
          <div className="flex flex-wrap gap-4 text-indigo-500 text-sm">
            <Link to="https://linkedin.com/in/yourprofile">Live Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Client Link</Link>
            <Link to="https://github.com/webabubakarsiddik">GitHub Server Link</Link>
          </div>
          <p>A web platform where users can write, edit, and share personal journal entries securely, with organized categories and search functionality.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Built CRUD functionality for personal journal entries, allowing create, edit, delete entries easily.</li>
            <li>Implemented authorized entries with search and dark/light mode for better UX.</li>
            <li>Integrated secure login and registration system using Firebase for robust data privacy.</li>
          </ul>
          <p><strong>Technologies:</strong> JavaScript, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase</p>
        </div>
      </section>

      {/* Training */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Professional Training</h3>
        <ul className="list-disc list-inside">
          <li>Completed Web Development Course from Programming Hero.</li>
          <li>Completed English Language Course under BMET at Technical Training Center.</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">Languages</h3>
        <p>Bangla (Native) | English (Intermediate)</p>
      </section>

    </div>
  );
}

export default Cive;
