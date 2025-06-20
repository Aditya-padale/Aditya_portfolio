import { motion } from "framer-motion";

const NotFound = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F6E8FF] to-[#E0F7FA] text-center px-6">
    <motion.h1
      className="text-7xl font-extrabold text-[#3B82F6] mb-4 drop-shadow-lg"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      404
    </motion.h1>
    <motion.h2
      className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Oops! Page not found.
    </motion.h2>
    <p className="text-[#475569] mb-8 max-w-md mx-auto">
      The page you are looking for does not exist or has been moved. Let’s get you back to something awesome!
    </p>
    <a
      href="/"
      className="px-6 py-3 rounded-full font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] shadow-lg transition-colors duration-300"
    >
      Go Home
    </a>
  </section>
);

export default NotFound;
