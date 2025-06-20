import { motion } from "framer-motion";
import { useState } from "react";

const funFacts = [
  "I love building microtools for real-world use!",
  "I contribute to open-source AI projects.",
  "I enjoy experimenting with new tech and APIs.",
  "I’m passionate about making AI accessible to everyone.",
  "I can code faster than I can type!"
];

const About = () => {
  const [fact, setFact] = useState(funFacts[0]);
  return (
    <>
      <section
        id="about"
        className="py-16 px-6 md:px-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)",
        }}
      >
        {/* Animated floating pastel blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F6E8FF] opacity-60 rounded-full blur-3xl animate-pulse-slow z-0"></div>
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-[#E0F7FA] opacity-60 rounded-full blur-3xl animate-pulse-slower z-0"></div>
        {/* Radial glow overlay, matching Hero */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top right, #E0F7FA 0%, transparent 60%)",
            opacity: 0.7,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4">
              <span className="text-[#0f172a]">About </span>
              <span className="text-[#1d4ed8]">Me</span>
            </h2>
            <div className="border-b-2 border-[#3B82F6] w-20 mx-auto mb-2"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div
              className="md:w-2/5 flex justify-center relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="rounded-full p-2 shadow-lg relative bg-white border-4 border-[#E0F7FA] flex items-center justify-center"
                style={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  display: "inline-block",
                }}
              >
                <img
                  src="/src/img/Aditya.jpg"
                  alt="Aditya Padale"
                  className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover border-4 border-white shadow-md"
                  style={{background: '#E6F4F1'}}
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                <span className="text-[#0f172a]">Aditya Padale</span>
                <span className="ml-2 text-[#059669]">AI Developer</span>
              </h3>
              <p className="text-[#1e293b] mb-6 leading-relaxed max-w-2xl text-base md:text-lg">
                Creative and detail-oriented developer focused on crafting smart, AI-powered, and visually engaging web experiences. With a strong foundation in AI development, I specialize in building intelligent tools using LangChain, Gemini APIs, Streamlit, and Python.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Education Card */}
                <div
                  className="rounded-2xl p-6 shadow-md mb-6 md:mb-0 flex-1 bg-white/60 backdrop-blur-lg border border-[#E0F7FA]"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <h4 className="text-lg font-bold mb-3 text-[#0f172a]">Education</h4>
                  <ul className="space-y-2 text-[#1e293b] text-base">
                    <li>Bachelor of Engineering in Artificial Intelligence and Data Science</li>
                    <li>Annasaheb Dange College of Engineering and Technology, Ashta</li>
                    <li>Expected Graduation: 2027</li>
                    <li>
                      <a href="https://www.adcet.ac.in/" className="text-[#3B82F6] underline hover:text-[#2563EB]">adcet.ac.in</a>
                    </li>
                  </ul>
                </div>
                {/* What I Do Card */}
                <div
                  className="rounded-2xl p-6 shadow-md flex-1 bg-white/60 backdrop-blur-lg border border-[#E0F7FA]"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <h4 className="text-lg font-bold mb-3 text-[#0f172a]">What I Do</h4>
                  <ul className="space-y-2 text-[#1e293b] text-base">
                    <li>Build AI-powered tools and web apps using Python, Streamlit, LangChain, and Gemini APIs</li>
                    <li>Develop smart campus systems and real-time AI solutions</li>
                    <li>Contribute to open-source and help others learn AI workflows</li>
                    <li>Experiment with new tech and build microtools for real-world use</li>
                  </ul>
                </div>
              </div>
              {/* Fun Fact Generator */}
              <div className="mt-8 flex flex-col items-center">
                <button
                  className="px-4 py-2 rounded-full bg-[#3B82F6] text-white font-semibold shadow hover:bg-[#2563EB] transition-colors mb-2"
                  onClick={() => setFact(funFacts[Math.floor(Math.random() * funFacts.length)])}
                >
                  Show Fun Fact
                </button>
                <span className="text-[#059669] font-bold text-lg">{fact}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
