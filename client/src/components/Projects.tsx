import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Tilt from "react-parallax-tilt";

const Projects = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		// Staggered animation for all project cards
		gsap.fromTo(
			".project-card",
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "top center",
					scrub: true,
					markers: false,
				},
			}
		);
	}, []);

	return (
		<section
			id="projects"
			className="py-20 relative overflow-hidden"
			style={{
				background: "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)",
			}}
		>
			{/* Animated floating pastel blobs */}
			<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#F6E8FF] opacity-50 rounded-full blur-3xl animate-pulse-slow z-0"></div>
			<div className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] bg-[#E0F7FA] opacity-50 rounded-full blur-3xl animate-pulse-slower z-0"></div>
			<div className="container mx-auto px-4 relative z-10" ref={containerRef}>
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172a]">
						My <span className="text-[#1d4ed8]">Projects</span>
					</h2>
					<div className="h-1 w-20 bg-[#3B82F6] rounded mx-auto"></div>
				</motion.div>
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 works-container">
					{projects.map((project: Project, idx: number) => (
						<Tilt
							tiltMaxAngleX={45}
							tiltMaxAngleY={45}
							scale={1.05}
							transitionSpeed={450}
							className="project-card bg-gradient-to-br from-[#e0f7fa] via-[#f6e8ff] to-[#c7d2fe] p-0 rounded-3xl shadow-2xl border-0 group relative overflow-hidden hover:scale-[1.03] transition-transform duration-300"
							key={project.title}
						>
							<div className="relative z-10 p-6 flex flex-col h-full backdrop-blur-xl bg-white/70 rounded-3xl border border-[#e0f7fa] group-hover:bg-white/90 transition-colors duration-300">
								{/* GSAP Scroll Animation for Project Card */}
								<ProjectCardContent project={project} idx={idx} />
							</div>
							{/* Animated gradient border */}
							<div
								className="absolute inset-0 rounded-3xl pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-300"
								style={{
									background:
										'conic-gradient(from 180deg at 50% 50%, #a5b4fc 0deg, #f6e8ff 120deg, #e0f7fa 240deg, #a5b4fc 360deg)',
								}}
							></div>
							{/* Glow effect */}
							<div
								className="absolute -inset-2 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
								style={{
									background:
										'radial-gradient(circle at 60% 40%, #a5b4fc 0%, transparent 70%)',
								}}
							></div>
						</Tilt>
					))}
				</div>
			</div>
		</section>
	);
};

const ProjectCardContent = ({ project, idx }: { project: Project; idx: number }) => {
	const cardRef = useRef(null);
	useEffect(() => {
		const el = cardRef.current;
		gsap.fromTo(
			el,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "top center",
					scrub: true,
					markers: false,
				},
			}
		);
	}, []);
	return (
		<div ref={cardRef}>
			<h3 className="text-xl font-bold mb-2 text-[#0f172a]">{project.title}</h3>
			<p className="text-[#1e293b] mb-4">{project.description}</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{project.technologies.map((tech: string) => (
					<span
						key={tech}
						className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E0F7FA] text-[#3B82F6]"
					>
						{tech}
					</span>
				))}
			</div>
			<div className="mt-auto flex gap-3">
				{project.links?.demo && (
					<a
						href={project.links.demo}
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 rounded-lg font-semibold bg-[#3B82F6] text-white transition-all duration-300 hover:bg-[#2563EB] focus:outline-none shadow"
					>
						Live Demo
					</a>
				)}
				{project.links?.github && (
					<a
						href={project.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 rounded-lg font-semibold bg-[#F1F5F9] text-[#334155] transition-all duration-300 hover:bg-[#E6F4F1] focus:outline-none shadow"
					>
						GitHub
					</a>
				)}
			</div>
		</div>
	);
};

export default Projects;
