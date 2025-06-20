import { motion } from "framer-motion";

const certifications = [
  {
    title: "Cloud Computing",
    description:
      "Completed NPTEL certification in Cloud Computing, gaining expertise in cloud service models, deployment strategies, and virtualization concepts.",
    pdf: "/src/img/Cloud Computing.pdf",
  },
  {
    title: "Foundations of Artificial Intelligence",
    description:
      "Earned NPTEL certification in Foundations of Artificial Intelligence, covering core AI principles including search algorithms, logic, and knowledge representation.",
    pdf: "/src/img/Fundamentals of Artificial Intelligence.pdf",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            My latest certifications from NPTEL, with downloadable certificates.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#10B981] to-[#A78BFA] rounded mx-auto mt-4"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="rounded-xl p-6 flex flex-col items-start shadow-lg bg-[#E6F4F1] border border-[#E0F7FA]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                {cert.title}
              </h3>
              <p className="text-[#1e293b] mb-4">{cert.description}</p>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#10B981] text-white rounded-lg font-semibold shadow hover:bg-[#059669] transition-colors duration-300"
              >
                View Certificate (PDF)
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
