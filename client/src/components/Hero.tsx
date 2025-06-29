import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AdityaPhoto from "../img/Aditya.jpg";
import ResumePDF from "../img/Resume.pdf";
import { Send, Bot, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const typewriterTexts = [
  "AI Developer | Python Specialist | Tech Innovator",
  "Building Smart Tools with LangChain & APIs",
  "Open Source Contributor & Mentor",
  "Creating Intelligent Solutions for Tomorrow",
];

function useTypewriter(texts: string[], speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typing) {
      if (display.length < texts[index].length) {
        timeout.current = setTimeout(() => {
          setDisplay(texts[index].slice(0, display.length + 1));
        }, speed);
      } else {
        setTyping(false);
        timeout.current = setTimeout(() => setTyping(true), pause);
      }
    } else {
      timeout.current = setTimeout(() => {
        setDisplay("");
        setIndex((i) => (i + 1) % texts.length);
        setTyping(true);
      }, pause);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [display, typing, index, texts, speed, pause]);

  return display;
}

// Personal QA Bot Component
const PersonalQABot = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi! Ask me anything about Aditya! 🤖",
      sender: 'bot',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleResponses: Record<string, string> = {
    'skills': "Aditya is an AI Developer and Python Specialist with expertise in machine learning, React, TypeScript, and Node.js. He also has experience in cloud computing and DevOps.",
    'projects': "Aditya has worked on chatbots, AI assistants, and smart tools with LangChain and APIs. He's contributed to open-source projects and created user-friendly applications.",
    'experience': "Aditya has experience in frontend/backend development, cloud computing, DevOps, and creating intelligent solutions. He's passionate about mentoring developers.",
    'contact': "Aditya can be contacted via email or LinkedIn. He's available for freelance work and his resume is available for download.",
    'education': "Aditya has certifications in Cloud Computing and Artificial Intelligence. He's always learning new technologies and frameworks.",
    'github': "Aditya's GitHub showcases his coding projects and open-source contributions. He believes in writing clean, maintainable code."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = async (question: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const lowerQuestion = question.toLowerCase();
    
    for (const [keyword, response] of Object.entries(sampleResponses)) {
      if (lowerQuestion.includes(keyword)) {
        return response;
      }
    }
    
    return "I can tell you about Aditya's skills, projects, experience, education, contact info, or GitHub. What interests you?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user' as const,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await getResponse(inputValue.trim());
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot' as const,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble right now. Please try again!",
        sender: 'bot' as const,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 h-80 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
          <Bot size={16} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Ask Aditya's AI</h3>
          <p className="text-xs text-slate-300">Personal Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-slate-700/50 text-slate-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700/50 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about skills, projects, experience..."
          className="flex-1 px-3 py-2 bg-slate-700/50 rounded-full text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isLoading}
          className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const typewriter = useTypewriter(typewriterTexts);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const qaBotRef = useRef<HTMLDivElement>(null);

  // Advanced GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation with enhanced timing
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100, scale: 0.8, rotationX: 90 },
        { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.5, ease: "back.out(1.7)" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, x: -100, skewX: 15 },
        { opacity: 1, x: 0, skewX: 0, duration: 1 },
        "-=1"
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8, rotationY: 180 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(socialRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.4"
      );

      // Enhanced photo animation with 3D effects
      gsap.fromTo(photoRef.current,
        { opacity: 0, scale: 0.3, rotationY: 180, rotationX: 45 },
        { 
          opacity: 1, 
          scale: 1, 
          rotationY: 0, 
          rotationX: 0, 
          duration: 2, 
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );

      // QA Bot animation
      gsap.fromTo(qaBotRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        { 
          opacity: 1, 
          scale: 1, 
          x: 0, 
          duration: 1.2, 
          ease: "back.out(1.7)",
          delay: 1.2
        }
      );

      // Enhanced floating elements animation
      gsap.to(".floating-element", {
        y: -30,
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: 4,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true
      });

      // Parallax effect for background elements
      gsap.to(".parallax-bg", {
        y: -150,
        rotation: 5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Text reveal animation with enhanced effects
      gsap.fromTo(".text-reveal", 
        { clipPath: "inset(0 100% 0 0)", scale: 0.8 },
        { 
          clipPath: "inset(0 0% 0 0)", 
          scale: 1,
          duration: 2, 
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".text-reveal",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Particle system animation
      gsap.to(".particle", {
        y: -100,
        x: "random(-50, 50)",
        opacity: 0,
        scale: 0,
        duration: 3,
        ease: "power2.out",
        stagger: 0.1,
        repeat: -1,
        delay: "random(0, 2)"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="flex flex-col justify-center py-24 md:py-32 pb-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid overlay */}
        <div className="absolute inset-0 grid-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 240, 212, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Enhanced floating geometric shapes */}
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-sm" />
          <div className="floating-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg blur-sm" />
          <div className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-sm" />
          <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-lg blur-sm" />
        </div>

        {/* Particle system */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-1 text-center lg:text-left"
          >
            <motion.p
              ref={subtitleRef}
              className="text-teal-300/80 mb-4 tracking-wider font-semibold text-lg neon-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              HELLO THERE, I'M
            </motion.p>
            
            <motion.h1
              ref={titleRef}
              className="heading-xl gradient-text mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="block text-reveal gradient-text-cyan animate-text-glow">
                Aditya
              </span>
              <span className="block text-reveal gradient-text animate-gradient-shift">
                Padale
              </span>
            </motion.h1>

            <motion.p
              ref={descriptionRef}
              className="text-body text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {typewriter}
              <span className="animate-pulse">|</span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <button
                className="btn-primary btn-glow font-semibold py-3 px-8 rounded-full shadow-lg text-lg hover-lift"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                View My Work
              </button>
              <button 
                onClick={() => window.open(ResumePDF, '_blank')}
                className="btn-neon font-semibold py-3 px-8 rounded-full shadow-lg text-lg hover-lift"
              >
                Download CV
              </button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              ref={socialRef}
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <a href="#" className="social-link hover-glow">
                <i className="fab fa-github text-2xl text-slate-300 hover:text-teal-400 transition-colors duration-300"></i>
              </a>
              <a href="#" className="social-link hover-glow">
                <i className="fab fa-linkedin text-2xl text-slate-300 hover:text-blue-400 transition-colors duration-300"></i>
              </a>
              <a href="#" className="social-link hover-glow">
                <i className="fab fa-twitter text-2xl text-slate-300 hover:text-cyan-400 transition-colors duration-300"></i>
              </a>
              <a href="#" className="social-link hover-glow">
                <i className="fas fa-envelope text-2xl text-slate-300 hover:text-purple-400 transition-colors duration-300"></i>
              </a>
            </motion.div>
          </motion.div>

          {/* Center: Enhanced Profile Image */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <div className="relative">
              {/* Enhanced profile image container */}
              <div
                ref={photoRef}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 profile-glow backdrop-blur-md overflow-hidden relative flex items-center justify-center animate-pulse-glow"
              >
                <img
                  src={AdityaPhoto}
                  alt="Aditya Padale"
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Enhanced glow rings */}
                <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 animate-glow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-blue-400/20 animate-pulse-glow"></div>
                
                {/* Orbiting elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400/60 rounded-full blur-sm" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-400/60 rounded-full blur-sm" />
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400/60 rounded-full blur-sm" />
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400/60 rounded-full blur-sm" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal QA Bot */}
          <motion.div
            ref={qaBotRef}
            className="lg:col-span-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <PersonalQABot />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
