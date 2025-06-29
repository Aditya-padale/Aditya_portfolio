export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  features?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "InstaVibe",
    description: "InstaVibe is an AI-powered bio generator built using Streamlit and LangChain. Instantly create attractive bios for social media or professional profiles with a click!",
    image: "Instavibe.png",
    category: "AI Tool",
    technologies: ["Streamlit", "LangChain", "AI"],
    features: [
      "Instant bio generation",
      "Social & professional profile support",
      "Modern UI"
    ],
    links: {
      demo: "https://instavibe.streamlit.app",
      github: "https://github.com/Aditya-padale/Instavibe"
    }
  },
  {
    id: 2,
    title: "AI-GenStream",
    description: "AI-GenStream lets you analyze, transcribe, and transform images, audio, video, and documents — all in real-time using Gemini 1.5! Built with Streamlit, LangChain, and Gemini Pro, it fuses vision, audio, and text intelligence into one seamless interface!",
    image: "Multimodal.png",
    category: "AI Tool",
    technologies: ["Streamlit", "LangChain", "Gemini Pro", "AI"],
    features: [
      "Real-time media analysis",
      "Transcription & transformation",
      "Unified interface for vision, audio, and text"
    ],
    links: {
      demo: "https://ai-genstream.streamlit.app",
      github: "https://github.com/Aditya-padale/AI-GenStream"
    }
  },
  {
    id: 3,
    title: "AI Calculator Canvas",
    description: "AI Calculator Canvas lets you draw any math, physics, chemistry problem or even real-world objects — and Gemini interprets and solves it in real-time. Inspired by Apple's Math Notes, this project is built using Streamlit, LangChain, and Gemini Pro Vision.",
    image: "ai-calculator-canvas.png",
    category: "AI Tool",
    technologies: ["Streamlit", "LangChain", "Gemini Pro Vision", "AI"],
    features: [
      "Draw and solve math, physics, chemistry problems",
      "Real-time Gemini-powered interpretation",
      "No typing required"
    ],
    links: {
      demo: "https://ai-calculator-canvas.streamlit.app",
      github: "https://github.com/Aditya-padale/AI-Calculator"
    }
  },
  {
    id: 4,
    title: "AI Website Builder Agent",
    description: "An intelligent AI agent that automatically generates complete websites from simple descriptions. Built with advanced AI models and modern web technologies for seamless website creation.",
    image: "ai-website-builder-agent.png",
    category: "AI Tool",
    technologies: ["AI", "Web Development", "Automation", "React"],
    features: [
      "Automatic website generation",
      "AI-powered content creation",
      "Responsive design templates",
      "One-click deployment"
    ],
    links: {
      demo: "https://ai-website-builder.streamlit.app",
      github: "https://github.com/Aditya-padale/AI-Website-Builder"
    }
  },
  {
    id: 5,
    title: "RAG Chatbot",
    description: "A sophisticated Retrieval-Augmented Generation chatbot that provides accurate, context-aware responses by combining knowledge retrieval with AI generation capabilities.",
    image: "Rag_Chatbot.png",
    category: "AI Tool",
    technologies: ["RAG", "LangChain", "Vector Database", "AI"],
    features: [
      "Knowledge retrieval system",
      "Context-aware responses",
      "Vector database integration",
      "Real-time learning"
    ],
    links: {
      demo: "https://rag-chatbot.streamlit.app",
      github: "https://github.com/Aditya-padale/RAG-Chatbot"
    }
  }
];
