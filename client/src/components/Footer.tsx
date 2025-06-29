import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import genratedImg from "../img/genrated.png";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-50"></div>
                <div className="relative bg-slate-800 rounded-full p-2 border border-slate-600/50 shadow-lg">
                  <img 
                    src={genratedImg} 
                    alt="Logo" 
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Aditya Padale</h3>
                <p className="text-slate-300 text-sm">AI Engineer & Tech Innovator</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="mailto:adityapadale25@gmail.com" 
              className="group relative p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 social-icon" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="tel:+919881861784" 
              className="group relative p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 social-icon" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://linkedin.com/in/aditya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 social-icon" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://github.com/Aditya-padale" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 social-icon" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {year} <span className="text-slate-200 font-semibold">Aditya Padale</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group animated-underline"
            >
              Privacy Policy
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group animated-underline"
            >
              Terms of Service
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
