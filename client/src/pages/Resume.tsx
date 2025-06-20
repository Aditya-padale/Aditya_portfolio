import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 relative z-10 pt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1E293B]">My Resume</h1>
        <div className="w-full max-w-4xl h-[85vh] shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col items-center justify-center">
          <iframe
            src="/img/Resume.pdf"
            className="w-full h-full"
            frameBorder="0"
            title="Aditya Padale Resume PDF"
          ></iframe>
          <a
            href="/img/Resume.pdf"
            download
            className="mt-4 px-6 py-2 bg-[#10B981] text-white rounded-lg font-semibold shadow hover:bg-[#059669] transition-colors duration-300"
          >
            Download PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
