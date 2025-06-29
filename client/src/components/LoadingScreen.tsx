import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import genratedImg from "../img/genrated.png";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <span className="bg-white rounded-full p-3 shadow-lg flex items-center justify-center border border-[#E0F7FA]">
        <motion.img
          src={genratedImg}
          alt="Logo"
          className="h-16 w-16 object-cover mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </span>
    </div>
  );
};

export default LoadingScreen;
