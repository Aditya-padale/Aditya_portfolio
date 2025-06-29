import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import genratedImg from "../img/genrated.png";

const SECTION_IDS = [
  "home",
  "about",
  "projects",
  "skills",
  "certifications",
  "achievements",
  "contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Scroll progress
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section highlight logic
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.1,
    });
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
    // Resume as external PDF link
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-white/60 shadow-2xl border-b border-[#E0F7FA]" : "bg-white/30 backdrop-blur-md shadow-md"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-50">
        <div
          className="h-1 bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#F6E8FF] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold text-white">
            <span className="bg-white rounded-full p-1 shadow-lg flex items-center justify-center border border-[#E0F7FA]">
              <img
                src={genratedImg}
                alt="Logo"
                className="h-10 w-10 object-cover"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-[#0f172a] font-semibold transition-colors duration-300 relative group animated-underline${activeSection === item.href.replace('#', '') ? ' active text-[#00f0d4]' : ''}`}
                onClick={closeMenu}
              >
                <span className={`group-hover:text-[#1d4ed8] transition-colors duration-300${activeSection === item.href.replace('#', '') ? ' text-[#00f0d4]' : ''}`}>
                  {item.name}
                </span>
              </a>
            ))}
            {/* Resume PDF link */}
            <a
              href="/img/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f172a] font-semibold transition-colors duration-300 relative group"
            >
              <span className="group-hover:text-[#1d4ed8] transition-colors duration-300">Resume</span>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.querySelector(item.href);
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              {/* Resume PDF link for mobile */}
              <a
                href="/img/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
