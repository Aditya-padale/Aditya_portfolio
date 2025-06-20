import { motion } from "framer-motion";

const skills = {
  "Programming Languages": [
    "C", "C++", "HTML5", "JavaScript", "PHP", "Python", "SQL"
  ],
  "Libraries & Frameworks": [
    "LangChain", "LlamaIndex", "Matplotlib", "NumPy", "Pandas", "Streamlit"
  ],
  "AI & Tools": [
    "Gemini (Google)", "Hugging Face", "OpenAI"
  ],
  "Databases": [
    "MySQL"
  ],
  "Developer Tools": [
    "Git", "GitHub"
  ],
  "Soft Skills": [
    "Analytical thinking", "Communication and collaboration", "Documentation and clarity", "Self-driven learning", "Problem-solving"
  ]
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 relative"
      style={{
        background: "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">
            My <span className="text-[#1d4ed8]">Skills</span>
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">A diverse toolkit that enables me to build comprehensive solutions from concept to deployment.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#10B981] to-[#8B5CF6] rounded mx-auto mt-4"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              className="rounded-xl p-6 h-full shadow-lg backdrop-blur-md border border-transparent hover:border-[3px] hover:border-gradient-to-r hover:from-[#10B981] hover:to-[#8B5CF6] transition-all duration-300"
              style={{
                background: "#E6F4F1",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                borderImage: "none"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-lg font-bold text-[#0f172a] mb-1">{category}</h3>
              </div>
              <ul className="list-disc ml-6 space-y-1">
                {skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="text-[#334155]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
