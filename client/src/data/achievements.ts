export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: "SIH Participation",
    description: "Participated in Smart India Hackathon, competing at the national level to solve real-world problems with innovative technological solutions.",
    year: "2024",
    icon: "fas fa-trophy",
    color: "primary"
  },
  {
    title: "KPIT Sparkle Participation",
    description: "Reached the finals of KPIT Sparkle, a national innovation competition, with the Gesture-Based Smart Automation System project.",
    year: "2025",
    icon: "fas fa-award",
    color: "secondary"
  },
  {
    title: "Internship at @Zanvar group of industries",
    description: "Worked on the project of AI-based chatbot for the company",
    year: "2025",
    icon: "fas fa-laptop-code",
    color: "accent"
  }
];
