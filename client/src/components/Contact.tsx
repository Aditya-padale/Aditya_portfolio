import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animations
      gsap.fromTo(".contact-form", 
        { 
          opacity: 0, 
          y: 50, 
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact info animations
      gsap.fromTo(".contact-info", 
        { 
          opacity: 0, 
          x: -50, 
          scale: 0.9
        },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements
      gsap.to(".floating-element", {
        y: -20,
        rotation: 10,
        duration: 4,
        ease: "power2.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "adityapadale25@example.com",
      link: "mailto:adityapadale25@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98818 61784",
      link: "tel:+919881861784"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sangli, Maharashtra, India",
      link: "#"
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-teal-500/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl floating-element"></div>
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
            Get In Touch
          </h2>
          <p className="text-body text-slate-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-12 items-center">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full rounded-3xl shadow-2xl bg-slate-900/80 border border-slate-800/60 p-8 md:p-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm always excited to hear about new opportunities and interesting projects. 
                Whether you have a question, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>
              </div>
              
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-info flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-teal-500/50 transition-all duration-300 hover-lift group"
                  whileHover={{ scale: 1.02 }}
                  aria-label={`Contact me via ${info.title.toLowerCase()}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-teal-500/25">
                    <info.icon className="w-6 h-6 text-white social-icon" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-teal-300 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
              </div>
              
            {/* Social Links */}
            <div className="pt-6 mt-2">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: "fab fa-github", href: "https://github.com/Aditya-padale", color: "hover:text-gray-300" },
                  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/aditya-padale-alp/", color: "hover:text-blue-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center border border-slate-600/30 hover:border-teal-500/50 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-xl text-slate-300`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form flex flex-col justify-center h-full rounded-3xl shadow-2xl bg-slate-900/80 border border-slate-800/60 p-8 md:p-10"
          >
            {/* Top Heading and Subtitle */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-1">Send Me a Message</h3>
              <p className="text-slate-400 text-sm">I'm open to freelance, collaboration, or just a friendly chat. I usually reply within 24 hours.</p>
            </div>
            <form ref={formRef} onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              try {
                const response = await fetch("https://formspree.io/f/xovwneyy", {
                  method: "POST",
                  headers: { 'Accept': 'application/json' },
                  body: formData,
                });
                if (response.ok) {
                  toast({
                    title: "Message sent successfully!",
                    description: "Thanks for contacting me. I'll get back to you soon.",
                    variant: "default",
                    className: "bg-slate-900/90 border border-teal-500/40 text-teal-300 shadow-lg backdrop-blur"
                  });
                  form.reset();
                } else {
                  throw new Error("Failed to send message");
                }
              } catch (error) {
                toast({
                  title: "Failed to send message",
                  description: "Please try again later or contact me directly via email.",
                  variant: "destructive",
                  className: "bg-slate-900/90 border border-red-500/40 text-red-300 shadow-lg backdrop-blur"
                });
              }
            }} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400 focus:border-teal-500/50 focus:ring-teal-500/20"
                    placeholder="Your name"
                  />
                    </div>
                    <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400 focus:border-teal-500/50 focus:ring-teal-500/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400 focus:border-teal-500/50 focus:ring-teal-500/20"
                  placeholder="What's this about?"
                />
                    </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-slate-600/30 text-white placeholder-slate-400 focus:border-teal-500/50 focus:ring-teal-500/20 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Privacy Note and Quote */}
              <p className="text-xs text-slate-500 mt-4 mb-2 text-center">
                Your information is safe and will never be shared.
              </p>
              <p className="text-xs text-slate-600 italic text-center mb-4">
                "Creativity is intelligence having fun." — Albert Einstein
              </p>

              <Button
                type="submit"
                className="btn-neon w-full py-3 text-lg font-semibold hover:scale-105 transform mt-2"
              >
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </div>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
