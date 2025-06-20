import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// New animated gradient background with floating shapes
const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const shapes = [
      { color: "#fbbf24", size: 120, blur: 40, left: "10%", top: "20%", anim: "float1" },
      { color: "#06b6d4", size: 180, blur: 60, left: "70%", top: "10%", anim: "float2" },
      { color: "#22c55e", size: 100, blur: 30, left: "60%", top: "70%", anim: "float3" },
      { color: "#f472b6", size: 140, blur: 50, left: "20%", top: "60%", anim: "float4" }
    ];
    shapes.forEach((s, i) => {
      const el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.left = s.left;
      el.style.top = s.top;
      el.style.width = `${s.size}px`;
      el.style.height = `${s.size}px`;
      el.style.background = s.color;
      el.style.opacity = '0.25';
      el.style.filter = `blur(${s.blur}px)`;
      el.style.borderRadius = '50%';
      el.style.animation = `${s.anim} ${18 + i * 3}s ease-in-out infinite alternate`;
      el.style.zIndex = '0';
      container.appendChild(el);
    });
    return () => { while (container.firstChild) container.removeChild(container.firstChild); };
  }, []);

  return (
    <motion.div
      id="animated-bg-container"
      className="absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef}
      aria-hidden="true"
      style={{ background: "linear-gradient(120deg, #e0e7ef 0%, #fdf6e3 100%)" }}
    />
  );
};

export default AnimatedBackground;

/*
Add to your global CSS (index.css):
@keyframes float1 { 0%{transform:translateY(0);} 100%{transform:translateY(-40px);} }
@keyframes float2 { 0%{transform:translateY(0);} 100%{transform:translateY(60px);} }
@keyframes float3 { 0%{transform:translateX(0);} 100%{transform:translateX(-50px);} }
@keyframes float4 { 0%{transform:translateX(0);} 100%{transform:translateX(40px);} }
*/
