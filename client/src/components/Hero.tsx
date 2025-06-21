import { motion } from "framer-motion";
import AnimatedBackground from "./ui/particle-background";
import { useEffect, useRef, useState } from "react";

const typewriterTexts = [
  "AI Developer | Python Specialist | Tech Innovator",
  "Building Smart Tools with LangChain & APIs",
  "Open Source Contributor & Mentor",
];

function useTypewriter(texts: string[], speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typing) {
      if (display.length < texts[index].length) {
        timeout.current = setTimeout(() => {
          setDisplay(texts[index].slice(0, display.length + 1));
        }, speed);
      } else {
        setTyping(false);
        timeout.current = setTimeout(() => setTyping(true), pause);
      }
    } else {
      timeout.current = setTimeout(() => {
        setDisplay("");
        setIndex((i) => (i + 1) % texts.length);
        setTyping(true);
      }, pause);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [display, typing, index, texts, speed, pause]);

  return display;
}

const Hero = () => {
  const typewriter = useTypewriter(typewriterTexts);
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D parallax tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setTilt({ x: y * 12, y: x * 12 });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });
    const node = heroRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)",
      }}
    >
      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, #E0F7FA 0%, transparent 60%)",
          opacity: 0.7,
        }}
      />
      <AnimatedBackground />
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center" ref={heroRef}>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.2s cubic-bezier(.17,.67,.83,.67)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-[#3B82F6] mb-2 tracking-wider font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              HELLO THERE, I'M
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1E293B]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="block">Aditya Padale</span>
              <span className="text-[#10B981]">AI Developer</span>
            </motion.h1>
            <motion.div className="h-8 md:h-12 mb-6 text-xl md:text-2xl font-light text-[#475569]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div>
                <span>
                  {typewriter}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </motion.div>
            <motion.p className="text-[#475569] mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Creative and detail-oriented developer focused on crafting smart,
              AI-powered, and visually engaging web experiences. With a strong
              foundation in AI development, I specialize in building intelligent
              tools using LangChain, Gemini APIs, Streamlit, and Python.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg bg-[#10B981] text-white hover:bg-[#059669] hover:scale-105 hover:shadow-xl focus:outline-none"
                style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.10)" }}
              >
                Explore Projects
              </a>
            </motion.div>
            <motion.div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
              <a
                href="mailto:adityapadale25@gmail.com"
                className="text-[#64748B] hover:text-[#10B981] transition-colors duration-300 bg-[#F1F5F9] rounded-full p-3 shadow"
                aria-label="Email"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a
                href="tel:+919881861784"
                className="text-[#64748B] hover:text-[#10B981] transition-colors duration-300 bg-[#F1F5F9] rounded-full p-3 shadow"
                aria-label="Phone"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              >
                <i className="fas fa-phone text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/adityapadale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#3B82F6] transition-colors duration-300 bg-[#F1F5F9] rounded-full p-3 shadow"
                aria-label="LinkedIn"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/Aditya-padale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] hover:text-[#6366F1] transition-colors duration-300 bg-[#F1F5F9] rounded-full p-3 shadow"
                aria-label="GitHub"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <span
                className="text-[#64748B] ml-4 bg-[#FDF7FA] px-4 py-2 rounded-xl shadow"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
              >
                Sangli, Maharashtra, India
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.2s cubic-bezier(.17,.67,.83,.67)",
            }}
          >
            <div
              className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center"
              style={{
                borderRadius: "50%",
              }}
            >
              <div className="rounded-full w-11/12 h-11/12 flex items-center justify-center overflow-hidden relative z-20 bg-[#E6F4F1]">
                <img
                  src="/img/Aditya.jpg"
                  alt="Aditya Padale"
                  className="rounded-full w-full h-full object-cover border-4 border-[#E0F7FA]"
                  style={{ boxShadow: "0 4px 12px 0 rgba(230,244,241,0.25)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
