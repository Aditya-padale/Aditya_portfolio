import { motion } from "framer-motion";

const achievements = [
	{
		icon: "fas fa-id-card",
		title: "Smart Campus System",
		description:
			"Developed a fully functional NFC-based Smart Campus System enabling seamless access to campus services. Integrated modules like navigation, attendance, department portals, and payment systems using NFC tags.",
		year: "2024",
	},
	{
		icon: "fas fa-rocket",
		title: "Streamlit Apps",
		description:
			"Published multiple interactive Streamlit apps with real-time AI features and user-friendly interfaces. Built tools for media processing, language interaction, and data visualization using Python and Streamlit.",
		year: "2025",
	},
	{
		icon: "fas fa-briefcase",
		title: "Internship – Zanvar Group of Industries",
		description:
			"Completed an internship at a vehicle manufacturing company under the Zanvar Group of Industries. Built an AI-powered chatbot that provided detailed information on vehicle parts based on user queries.",
		year: "2025",
	},
];

const Achievements = () => {
	return (
		<section
			id="achievements"
			className="py-20 relative"
			style={{
				background: "linear-gradient(135deg, #F6E8FF 0%, #E0F7FA 100%)",
			}}
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">
						Achievements
					</h2>
					<p className="text-[#94A3B8] max-w-2xl mx-auto">
						Recent recognitions and impactful projects.
					</p>
					<div className="h-1 w-20 bg-gradient-to-r from-[#10B981] to-[#A78BFA] rounded mx-auto mt-4"></div>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{achievements.map((achievement, index) => (
						<motion.div
							key={index}
							className="rounded-xl p-6 flex flex-col items-center shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#E6F4F1] border border-[#E0F7FA]"
							style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
						>
							<span
								className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
								style={{
									background:
										"linear-gradient(135deg, #10B981 0%, #8B5CF6 100%)",
								}}
							>
								<i
									className={`${achievement.icon} text-white text-2xl`}
								></i>
							</span>
							<h3 className="text-lg font-bold text-[#0f172a] mb-1">
								{achievement.title}
							</h3>
							<p className="text-[#1e293b] mb-2 text-sm">
								{achievement.description}
							</p>
							<span className="text-xs text-[#64748B] mt-2">
								{achievement.year}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Achievements;
