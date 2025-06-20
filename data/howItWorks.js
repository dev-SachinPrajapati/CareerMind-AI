import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Personalized Onboarding",
    description: "Tell us about your background and industry to receive tailored support",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Build Your Application Materials",
    description: "Generate ATS-friendly resumes and persuasive cover letters with ease",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Ace Your Interviews",
    description:
      "Train with role-specific mock interviews powered by AI feedback",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Measure Your Progress",
    description: "Track your growth through insightful analytics and performance data",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
