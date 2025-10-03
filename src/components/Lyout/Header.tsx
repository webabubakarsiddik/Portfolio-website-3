import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // read saved theme (optional)
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

   function toggleTheme() {
    setIsDark((v) => {
      const next = !v;
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <header className="w-full fixed top-0 z-50">
      <nav className="w-full  h-20 px-5 lg:px-6 xl:px-[6%] py-4 flex items-center justify-between bg-gradient-to-r from-[#8783dd] to-[#FF7E5F]/70 backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/Abu15.jpg"
            alt="Logo"
            className="w-16 h-16 rounded-[30px] object-cover cursor-pointer"
          />
          <span className="font-semibold text-lg text-black dark:text-amber-50">Abu Bakar Siddik</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 bg-gradient-to-r from-[#FEB47B] to-[#8b87d8]/70 shadow-sm text-black dark:text-cyan-950">
          <nav className="flex items-center gap-4 px-2 py-3">
            <Link to={"/"} className="px-3 py-2 hover:underline">Home</Link>
            <Link to={"about"} className="px-3 py-2 hover:underline">About</Link>
            <Link to={"services"} className="px-3 py-2 hover:underline">Services</Link>
            <Link to={"myskill"} className="px-3 py-2 hover:underline">Skill</Link>
            <Link to={"project"} className="px-3 py-2 hover:underline">Project</Link>
            <Link to={"contact"} className="px-3 py-2 hover:underline">Contact</Link>
          </nav>
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-8 h-8 flex items-center justify-center rounded-md"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact button (desktop) */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-3 px-5 py-2.5 border border-gray-500 rounded-full hover:bg-emerald-700 transition text-black dark:text-white"
          >
            যোগাযোগ করুন
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu (sliding) */}
      <div
        id="sideMenu"
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img src="/Abu15.jpg" alt="logo" className="w-12 h-12 rounded-lg" />
            <div>
              <p className="text-sm font-medium">Abu Bakar Siddik</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Developer</p>
            </div>
          </div>
          <button
            className="p-2"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6 text-lg text-black dark:text-amber-50 bg-gradient-to-r from-[#FEB47B] to-[#8b87d8]/70">
          <Link to={"/"} onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to={"about"} onClick={() => setMenuOpen(false)} className="block">About</Link>
          <Link to={"services"} onClick={() => setMenuOpen(false)} className="block">Services</Link>
          <Link to={"myskill"} onClick={() => setMenuOpen(false)} className="block">Skill</Link>
          <Link to={"project"} onClick={() => setMenuOpen(false)} className="block">Project</Link>
          <Link to={"contact"} onClick={() => setMenuOpen(false)} className="block">Contact</Link>

          <a
            href="#contact"
            className="mt-4 px-5 py-3 bg-emerald-600 text-white rounded-2xl text-center hover:bg-emerald-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
          aria-hidden="true"
        />
      )}
    </header>
  );
}
