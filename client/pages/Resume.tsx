import React from "react";

const Resume: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md text-gray-900">
    <h1 className="text-3xl font-bold mb-2">Aditya Padale</h1>
    <p className="mb-1">Email: <a href="mailto:adityapadale25@gmail.com" className="text-blue-600">adityapadale25@gmail.com</a></p>
    <p className="mb-1">Phone: +91-9881861784</p>
    <p className="mb-1">Location: Sangli, Maharashtra, India</p>
    <p className="mb-1">LinkedIn: <a href="https://linkedin.com/in/adityapadale" className="text-blue-600">linkedin.com/in/adityapadale</a></p>
    <p className="mb-4">GitHub: <a href="https://github.com/Aditya-padale" className="text-blue-600">github.com/Aditya-padale</a></p>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Professional Summary</h2>
    <p className="mb-4">Creative and detail-oriented developer focused on crafting smart, AI-powered, and visually engaging web experiences. With a strong foundation in AI developer, I specialize in building intelligent tools using LangChain, Gemini APIs, Streamlit, and python. Passionate about combining technology with real-world usability — from campus systems to social bio generators. I aim to grow as a developer while contributing to impactful tech that simplifies complex tasks.</p>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Skills</h2>
    <ul className="list-disc ml-6 mb-2">
      <li><b>Programming Languages:</b> C, C++, HTML5, JavaScript, PHP, Python, SQL</li>
      <li><b>Libraries & Frameworks:</b> LangChain, LlamaIndex, Matplotlib, NumPy, Pandas, Streamlit</li>
      <li><b>AI & Tools:</b> Gemini (Google), Hugging Face, OpenAI</li>
      <li><b>Databases:</b> MySQL</li>
      <li><b>Developer Tools:</b> Git, GitHub</li>
      <li><b>Soft Skills:</b> Analytical thinking, Communication and collaboration, Documentation and clarity, Self-driven learning, Problem-solving</li>
    </ul>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Work Experience</h2>
    <p className="mb-4">(No formal job experience yet — ready to take on internships or freelance work.)</p>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Education</h2>
    <p className="mb-1">Bachelor of Engineering in Artificial intelligence and data science</p>
    <p className="mb-1">Annasaheb Dange College of Engineering and Technology, Ashta</p>
    <p className="mb-4">Expected Graduation: 2027 | <a href="https://www.adcet.ac.in/" className="text-blue-600">adcet.ac.in</a></p>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Projects</h2>
    <ul className="list-disc ml-6 mb-2">
      <li>
        <b>InstaVibe:</b> AI-powered bio generator built using Streamlit and LangChain.<br />
        Instantly create attractive bios for social media or professional profiles with a click!<br />
        <a href="https://instavibe.streamlit.app" className="text-blue-600">Live Demo</a> | <a href="https://github.com/Aditya-padale/Instavibe" className="text-blue-600">GitHub</a>
      </li>
      <li>
        <b>AI-GenStream:</b> Analyze, transcribe, and transform images, audio, video, and documents — all in real-time using Gemini 1.5!<br />
        Built with Streamlit, LangChain, and Gemini Pro, it fuses vision, audio, and text intelligence into one seamless interface!<br />
        Upload media, ask questions, and explore — no complex inputs, just smart results!<br />
        <a href="https://ai-genstream.streamlit.app" className="text-blue-600">Live Demo</a> | <a href="https://github.com/Aditya-padale/AI-GenStream" className="text-blue-600">GitHub</a>
      </li>
      <li>
        <b>AI Calculator Canvas:</b> Draw any math, physics, chemistry problem or even real-world objects — and Gemini interprets and solves it in real-time.<br />
        Inspired by Apple’s Math Notes, this project is built using Streamlit, LangChain, and Gemini Pro Vision.<br />
        Just draw, hit Enter, and receive instant intelligent answers — no typing required!<br />
        <a href="https://ai-calculator-canvas.streamlit.app" className="text-blue-600">Live Demo</a> | <a href="https://github.com/Aditya-padale/AI-Calculator" className="text-blue-600">GitHub</a>
      </li>
    </ul>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Certifications & Achievements</h2>
    <ul className="list-disc ml-6 mb-2">
      <li>✅ Developed three live AI tools with LangChain & Gemini</li>
      <li>✅ Created a fully functional NFC-based smart campus system</li>
      <li>✅ Published Streamlit apps with real-time AI interaction</li>
      <li>✅ Presented mini project at college-level exhibition</li>
      <li>✅ Active contributor to open-source and GitHub</li>
    </ul>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Languages</h2>
    <ul className="list-disc ml-6 mb-2">
      <li>English — Fluent</li>
      <li>Hindi — Fluent</li>
      <li>Marathi — Native</li>
    </ul>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Volunteer Work</h2>
    <ul className="list-disc ml-6 mb-2">
      <li>Helped juniors in understanding LangChain and AI workflows</li>
      <li>Part of internal hackathons and demo sessions at college</li>
    </ul>
    <hr className="my-4" />
    <h2 className="text-xl font-semibold mt-6 mb-2">Hobbies & Interests</h2>
    <ul className="list-disc ml-6 mb-2">
      <li>AI experiments and prototyping</li>
      <li>Reading tech blogs and building microtools</li>
      <li>Exploring open-source contributions</li>
    </ul>
  </div>
);

export default Resume;
