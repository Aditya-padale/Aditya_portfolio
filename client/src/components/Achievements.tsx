import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Star, Target, TrendingUp } from "lucide-react";
import { achievements } from "../data/achievements";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Card animations
			gsap.fromTo(".achievement-card", 
				{ 
					opacity: 0, 
					y: 50, 
					scale: 0.9,
					rotationY: 45
				},
				{ 
					opacity: 1, 
					y: 0, 
					scale: 1,
					rotationY: 0,
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

			// Counter animations
			gsap.fromTo(".counter", 
				{ innerText: 0 },
				{ 
					innerText: (i: number, target: Element) => {
						const finalValue = parseInt(target.getAttribute('data-target') || '0');
						return finalValue;
					},
					duration: 2,
					ease: "power2.out",
					snap: { innerText: 1 },
					scrollTrigger: {
						trigger: ".counter",
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

	const stats = [
		{ label: "Projects Completed", value: 15, icon: Target },
		{ label: "Happy Clients", value: 8, icon: Star },
		{ label: "Awards Won", value: 3, icon: Trophy },
		{ label: "Success Rate", value: 95, icon: TrendingUp }
	];

	return (
		<section
			id="achievements"
			ref={sectionRef}
			className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
		>
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
				<div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl floating-element"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl floating-element"></div>
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
						Achievements & Stats
					</h2>
					<p className="text-body text-slate-300 max-w-2xl mx-auto">
						Milestones and recognition that showcase my dedication to excellence
					</p>
				</motion.div>

				{/* Stats Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="text-center"
						>
							<div className="card-glass rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
									<stat.icon className="w-6 h-6 text-white social-icon" />
								</div>
								<div className="text-3xl font-bold text-white mb-2">
									<span className="counter" data-target={stat.value}>0</span>
									{stat.label === "Success Rate" && "%"}
								</div>
								<p className="text-slate-300 text-sm">{stat.label}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Achievements Grid */}
				<div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{achievements.map((achievement, index) => (
						<motion.div
							key={index}
							className="achievement-card"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
						>
							<div className="card-glass rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
								<div className="flex items-start justify-between mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
										<Trophy className="w-6 h-6 text-white" />
									</div>
									<span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
										{achievement.year}
							</span>
								</div>

								<div className="space-y-3">
									<h3 className="text-lg font-bold text-white">{achievement.title}</h3>
									<p className="text-slate-300 text-sm leading-relaxed">
								{achievement.description}
							</p>
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
						Every achievement is a stepping stone towards greater innovation and impact
					</p>
					<motion.button
						className="btn-neon px-8 py-3 rounded-full font-semibold"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Trophy className="w-5 h-5 mr-2 inline" />
						View Full Portfolio
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default Achievements;
