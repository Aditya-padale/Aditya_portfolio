import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import genratedImg from "../img/genrated.png";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="py-10 shadow-lg rounded-2xl" style={{background: 'linear-gradient(135deg, #F6F7FB 0%, #EAFBF4 100%)', boxShadow: '0 2px 16px 0 rgba(16,185,129,0.07), 0 4px 32px 0 rgba(59,130,246,0.06)'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold text-[#0f172a]">
              <span className="relative inline-block">
                <span className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <motion.img 
                    src={genratedImg} 
                    alt="Logo" 
                    className="h-10 w-10 object-contain bg-white rounded-full border border-[#E0F7FA] shadow-lg"
                    style={{boxShadow: '0 0 32px 0 #10B98133, 0 0 16px 0 #3B82F633'}}
                    initial={{ scale: 0 }}
                    animate={{ scale: isLoading ? 0 : 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </span>
              </span>
              <span className="ml-2">Aditya Padale</span>
            </div>
            <p className="text-[#0f172a] mt-2 font-semibold">AI Engineer <span className="text-[#059669]">& Tech Innovator</span></p>
          </motion.div>
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="mailto:adityapadale25@gmail.com" 
              className="bg-[#E6F4F1] hover:bg-[#3B82F6] text-[#475569] hover:text-white rounded-2xl p-2 transition-colors duration-300 shadow-lg" 
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="tel:+919881861784" 
              className="bg-[#E6F4F1] hover:bg-[#10B981] text-[#475569] hover:text-white rounded-2xl p-2 transition-colors duration-300 shadow-lg" 
              aria-label="Phone"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/aditya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#E6F4F1] hover:bg-[#3B82F6] text-[#475569] hover:text-white rounded-2xl p-2 transition-colors duration-300 shadow-lg" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/Aditya-padale" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#E6F4F1] hover:bg-[#10B981] text-[#475569] hover:text-white rounded-2xl p-2 transition-colors duration-300 shadow-lg" 
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{borderColor: '#E2E8F0'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[#1e293b] text-sm mb-4 md:mb-0">
            © {year} <span className="font-bold text-[#0f172a]">Aditya Padale</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#1e293b] hover:text-[#059669] hover:underline text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-[#1e293b] hover:text-[#1d4ed8] hover:underline text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
