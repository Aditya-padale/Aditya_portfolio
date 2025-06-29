import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "../data/timeline";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animations
      gsap.fromTo(".timeline-item", 
        { 
          opacity: 0, 
          x: -100, 
          scale: 0.8,
          rotationY: 45
        },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline line animation
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline dots animation
      gsap.fromTo(".timeline-dot",
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements
      gsap.to(".floating-element", {
        y: -15,
        rotation: 5,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 gradient-text">
            My Journey
          </h2>
          <p className="text-body text-slate-300 max-w-2xl mx-auto">
            A timeline of my academic and professional milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400 timeline-line origin-top"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full border-4 border-slate-800 timeline-dot shadow-lg"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} md:w-1/2`}>
                  <motion.div
                    className="card-glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-2 leading-relaxed">{item.subtitle}</p>
                    <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;