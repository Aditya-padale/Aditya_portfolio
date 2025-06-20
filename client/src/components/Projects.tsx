import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";

const Projects = () => {
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
			<div className="container mx-auto px-4 relative z-10">
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
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project: Project, idx: number) => (
						<motion.div
							key={project.title}
							className="rounded-2xl p-6 flex flex-col shadow-lg bg-white/60 backdrop-blur-lg border border-[#E0F7FA] group relative overflow-hidden"
							style={{
								boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
							}}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: idx * 0.1 }}
						>
                {/* Spotlight hover effect */}
                <span className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.15) 0%, transparent 70%)'}}></span>
							<h3 className="text-xl font-bold mb-2 text-[#0f172a]">
								{project.title}
							</h3>
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
