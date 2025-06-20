import { motion } from "framer-motion";

const tech = [
  { name: "Python", icon: "fab fa-python", color: "#3776AB" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
  { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#38BDF8" },
  { name: "Streamlit", icon: "devicon-streamlit-plain", color: "#FF4B4B" },
  { name: "LangChain", icon: "fas fa-link", color: "#10B981" },
  { name: "Gemini API", icon: "fas fa-gem", color: "#3B82F6" },
  { name: "GitHub", icon: "fab fa-github", color: "#181717" },
];

const TechStack = () => (
  <section className="py-16 px-6 md:px-20 bg-transparent">
    <motion.h2
      className="text-2xl md:text-3xl font-extrabold text-center mb-8 text-[#0f172a] dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Tech Stack & Tools
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-6">
      {tech.map((t) => (
        <motion.div
          key={t.name}
          className="flex flex-col items-center bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-md p-4 w-28 h-28 hover:scale-105 transition-transform"
          style={{ border: `2px solid ${t.color}` }}
          whileHover={{ scale: 1.08 }}
        >
          <i className={`${t.icon} text-3xl mb-2`} style={{ color: t.color }}></i>
          <span className="text-xs font-semibold text-[#1e293b] dark:text-slate-200 text-center">{t.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechStack;
