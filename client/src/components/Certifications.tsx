import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    description: "Comprehensive understanding of cloud infrastructure and services",
    image: "Cloud Computing.pdf",
    downloadUrl: "/img/Cloud Computing.pdf"
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "NPTEL",
    date: "2024",
    description: "Core concepts and applications of AI and machine learning",
    image: "Fundamentals of Artificial Intelligence.pdf",
    downloadUrl: "/img/Fundamentals of Artificial Intelligence.pdf"
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animations
      gsap.fromTo(".cert-card", 
        { 
          opacity: 0, 
          y: 50, 
          scale: 0.9,
          rotationX: 45
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="certifications"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-body text-slate-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cutting-edge technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card-glass rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white social-icon" />
                  </div>
                  <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-teal-300 font-medium">{cert.issuer}</p>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => window.open(cert.downloadUrl, '_blank')}
                      className="btn-neon"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      className="btn-neon"
                      onClick={() => window.open(cert.downloadUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-6">
            Continuously learning and expanding my skill set with the latest technologies
          </p>
          <Button
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Certifications
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
