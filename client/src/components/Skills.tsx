import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealSections = document.querySelectorAll(".reveal-section");
    revealSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My technical expertise across programming languages, frameworks, and tools
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex md:flex-row flex-col gap-8 items-start"
            id="programming-languages"
          >
            <div className="w-full md:w-1/5 text-slate-400 text-lg font-bold sticky top-18">
              <div className="category-label cursor-pointer hover:text-white transition-colors duration-300">
                Programming Languages
              </div>
            </div>
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section">
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-6 h-6" alt="C" />
                <span className="text-lg text-slate-300">C</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-6 h-6" alt="C++" />
                <span className="text-lg text-slate-300">C++</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />
                <span className="text-lg text-slate-300">HTML5</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />
                <span className="text-lg text-slate-300">JavaScript</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-6 h-6" alt="PHP" />
                <span className="text-lg text-slate-300">PHP</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
                <span className="text-lg text-slate-300">Python</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <i className="fas fa-database social-icon text-slate-300"></i>
                <span className="text-lg text-slate-300">SQL</span>
              </div>
            </div>
          </motion.div>

          {/* Libraries & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex md:flex-row flex-col gap-8 items-start"
            id="libraries-frameworks"
          >
            <div className="w-full md:w-1/5 text-slate-400 text-lg font-bold sticky top-18">
              <div className="category-label cursor-pointer hover:text-white transition-colors duration-300">
                🧩 Libraries & Frameworks
              </div>
            </div>
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section">
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="LangChain" />
                <span className="text-lg text-slate-300">LangChain</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="LlamaIndex" />
                <span className="text-lg text-slate-300">LlamaIndex</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" className="w-6 h-6" alt="Matplotlib" />
                <span className="text-lg text-slate-300">Matplotlib</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-6 h-6" alt="NumPy" />
                <span className="text-lg text-slate-300">NumPy</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-6 h-6" alt="Pandas" />
                <span className="text-lg text-slate-300">Pandas</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" className="w-6 h-6" alt="Streamlit" />
                <span className="text-lg text-slate-300">Streamlit</span>
              </div>
            </div>
          </motion.div>

          {/* AI & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:flex-row flex-col gap-8 items-start"
            id="ai-tools"
          >
            <div className="w-full md:w-1/5 text-slate-400 text-lg font-bold sticky top-18">
              <div className="category-label cursor-pointer hover:text-white transition-colors duration-300">
                🤖 AI & Tools
              </div>
            </div>
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section">
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <span className="inline-block w-6 h-6 bg-white rounded p-0.5 flex items-center justify-center">
                  <span className="text-black font-bold text-base">G</span>
                </span>
                <span className="text-lg text-slate-300">Gemini (Google)</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" className="w-6 h-6 bg-white rounded p-0.5" alt="Hugging Face" />
                <span className="text-lg text-slate-300">Hugging Face</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <span className="inline-block w-6 h-6 bg-white rounded p-0.5 flex items-center justify-center">
                  <span className="text-black font-bold text-base">O</span>
                </span>
                <span className="text-lg text-slate-300">OpenAI</span>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex md:flex-row flex-col gap-8 items-start"
            id="databases"
          >
            <div className="w-full md:w-1/5 text-slate-400 text-lg font-bold sticky top-18">
              <div className="category-label cursor-pointer hover:text-white transition-colors duration-300">
                🗄️ Databases
              </div>
            </div>
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section">
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6" alt="MySQL" />
                <span className="text-lg text-slate-300">MySQL</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" className="w-6 h-6" alt="Oracle" />
                <span className="text-lg text-slate-300">Oracle</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-6 h-6" alt="MongoDB" />
                <span className="text-lg text-slate-300">MongoDB</span>
              </div>
            </div>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex md:flex-row flex-col gap-8 items-start"
            id="developer-tools"
          >
            <div className="w-full md:w-1/5 text-slate-400 text-lg font-bold sticky top-18">
              <div className="category-label cursor-pointer hover:text-white transition-colors duration-300">
                🛠️ Developer Tools
              </div>
            </div>
            <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section">
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-6 h-6" alt="Git" />
                <span className="text-lg text-slate-300">Git</span>
              </div>
              <div className="card-glass flex items-center gap-2 p-3 rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-6 h-6" alt="GitHub" />
                <span className="text-lg text-slate-300">GitHub</span>
              </div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
