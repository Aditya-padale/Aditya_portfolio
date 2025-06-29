import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AdityaPhoto from "../img/Aditya.jpg";
import { GraduationCap, Wrench, Leaf, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const funFacts = [
  "I love building microtools for real-world use!",
  "I contribute to open-source AI projects.",
  "I enjoy experimenting with new tech and APIs.",
  "I'm passionate about making AI accessible to everyone.",
  "I can code faster than I can type!"
];

const About = () => {
  const [fact, setFact] = useState(funFacts[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card animations
      gsap.fromTo(".info-card", 
        { 
          opacity: 0, 
          y: 50, 
          scale: 0.9,
          rotationX: 45
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Photo animation
      gsap.fromTo(photoRef.current,
        { 
          opacity: 0, 
          scale: 0.5, 
          rotationY: 180,
          x: -100
        },
        { 
          opacity: 1, 
          scale: 1, 
          rotationY: 0,
          x: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text reveal animations
      gsap.fromTo(".text-reveal", 
        { clipPath: "inset(0 100% 0 0)" },
        { 
          clipPath: "inset(0 0% 0 0)", 
          duration: 1.5, 
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".text-reveal",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements
      gsap.to(".floating-icon", {
        y: -10,
        rotation: 5,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFactChange = () => {
    const newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFact(newFact);
    
    // Animate fact change
    gsap.fromTo(".fact-text",
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  };

  return (
      <section
        id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-20 relative overflow-hidden font-sans bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
      >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

        <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          className="text-center mb-16"
          >
          <h2 className="heading-lg gradient-text mb-4">
            About Me
            </h2>
          <p className="text-body text-slate-300 max-w-2xl mx-auto">
            Passionate AI developer crafting intelligent solutions for tomorrow's challenges
          </p>
          </motion.div>

        {/* Top Profile Hero */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Left: Profile Image with Enhanced Glow */}
            <motion.div
            ref={photoRef}
            className="md:w-1/3 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <div className="w-44 h-44 md:w-64 md:h-64 rounded-full border-4 profile-glow backdrop-blur-md overflow-hidden relative flex items-center justify-center animate-pulse-glow">
                <img
                src={AdityaPhoto}
                  alt="Aditya Padale"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Enhanced glow rings */}
              <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 animate-glow"></div>
              <div className="absolute inset-2 rounded-full border-2 border-blue-400/20 animate-pulse-glow"></div>
              </div>
            </motion.div>

          {/* Right: Name, Role, Summary */}
            <motion.div
            className="md:w-2/3 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <h3 className="heading-md gradient-text mb-2 text-reveal">
              Aditya Padale
              </h3>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 rounded-full text-sm font-medium mb-4 border border-teal-500/30">
              AI Developer
            </span>
            <p className="mb-6 max-w-2xl text-body text-slate-300 text-reveal" style={{ lineHeight: 1.7 }}>
              I build smart AI tools with LangChain, Gemini APIs, and Streamlit, focused on solving real-world problems. Passionate about open-source, rapid prototyping, and making AI accessible for everyone.
              </p>
          </motion.div>
        </div>

        {/* Info Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {/* Education Card */}
          <motion.div
            className="info-card card-glass rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-4 text-teal-400 floating-icon">
              <GraduationCap size={32} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-white">Education</h4>
            <ul className="space-y-2 text-slate-300 text-base">
              <li>B.E. in Artificial Intelligence and Data Science</li>
              <li>ADCET, Ashta</li>
              <li>Expected Grad: 2027</li>
                    <li>
                <a href="https://adcet.ac.in" className="text-blue-400 underline hover:text-teal-400 transition-colors">adcet.ac.in</a>
                    </li>
                  </ul>
          </motion.div>

                {/* What I Do Card */}
          <motion.div
            className="info-card card-glass rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-4 text-blue-400 floating-icon">
              <Wrench size={32} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-white">What I Do</h4>
            <ul className="space-y-2 text-slate-300 text-base">
              <li>AI tools using LangChain, Streamlit, Python</li>
              <li>Real-time smart campus systems</li>
              <li>Open-source contributor</li>
              <li>Build microtools for everyday problems</li>
                  </ul>
          </motion.div>

          {/* Learning & Focus Card */}
          <motion.div
            className="info-card card-glass rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="mb-4 text-purple-400 floating-icon">
              <Leaf size={32} />
                </div>
            <h4 className="text-lg font-bold mb-2 text-white">Learning & Focus</h4>
            <ul className="space-y-2 text-slate-300 text-base">
              <li>Exploring agentic AI apps</li>
              <li>Improving UI/UX for dev tools</li>
              <li>Experimenting with Gemini + LangChain integrations</li>
            </ul>
          </motion.div>
              </div>

        {/* Enhanced Show Fun Fact Button */}
        <div className="text-center mt-8">
          <motion.button
            className="btn-primary btn-glow font-semibold py-3 px-8 rounded-full shadow-lg text-lg hover-lift flex items-center gap-2 mx-auto"
            onClick={handleFactChange}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
                >
            <Sparkles size={20} />
                  Show Fun Fact
          </motion.button>
          <motion.div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20">
            <span className="fact-text text-teal-300 font-bold text-lg block">{fact}</span>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;
