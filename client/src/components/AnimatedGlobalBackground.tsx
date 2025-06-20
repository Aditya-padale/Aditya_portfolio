import { useEffect, useRef } from "react";

// Animated pastel blobs with parallax effect
const AnimatedGlobalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;
    const blobs = Array.from({ length: 7 }).map((_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 120 + Math.random() * 80,
      dx: 0.5 + Math.random(),
      dy: 0.5 + Math.random(),
      color: [
        "#F6E8FF99",
        "#E0F7FA99",
        "#3B82F699",
        "#10B98199",
        "#FDE68A99",
        "#FCA5A599",
        "#A5B4FC99",
      ][i % 7],
      parallaxFactor: 0.1 + Math.random() * 0.2,
    }));
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((b) => {
        ctx.beginPath();
        // Parallax offset
        const px = b.x + parallax.current.x * b.parallaxFactor;
        const py = b.y + parallax.current.y * b.parallaxFactor;
        ctx.arc(px, py, b.r, 0, 2 * Math.PI);
        ctx.fillStyle = b.color;
        ctx.filter = "blur(32px)";
        ctx.fill();
        ctx.filter = "none";
        b.x += b.dx * (Math.random() > 0.5 ? 1 : -1) * 0.2;
        b.y += b.dy * (Math.random() > 0.5 ? 1 : -1) * 0.2;
        if (b.x < -b.r) b.x = window.innerWidth + b.r;
        if (b.x > window.innerWidth + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = window.innerHeight + b.r;
        if (b.y > window.innerHeight + b.r) b.y = -b.r;
      });
      animationFrameId = requestAnimationFrame(draw);
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      parallax.current.x = x * 80;
      parallax.current.y = y * 80;
    };
    const handleScroll = () => {
      parallax.current.y = (window.scrollY / window.innerHeight) * 80;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default AnimatedGlobalBackground;
