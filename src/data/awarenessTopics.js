import {
  Lock,
  Mail,
  Shield,
  Cloud,
  Bug,
  Smartphone,
} from "lucide-react";

export const awarenessTopics = [
  {
    id: 1,
    icon: Lock,
    title: "Password Security",
    description:
      "Learn how to create strong passwords and protect company accounts.",
    questions: 20,
    duration: "15 Minutes",
  },

  {
    id: 2,
    icon: Mail,
    title: "Phishing Awareness",
    description:
      "Identify phishing emails and social engineering attacks.",
    questions: 20,
    duration: "15 Minutes",
  },

  {
    id: 3,
    icon: Shield,
    title: "Email Security",
    description:
      "Protect sensitive company information while using email.",
    questions: 15,
    duration: "10 Minutes",
  },

  {
    id: 4,
    icon: Cloud,
    title: "Microsoft 365 Security",
    description:
      "Use Teams, SharePoint and OneDrive securely.",
    questions: 20,
    duration: "15 Minutes",
  },

  {
    id: 5,
    icon: Bug,
    title: "Malware Awareness",
    description:
      "Understand ransomware, viruses and malware attacks.",
    questions: 15,
    duration: "10 Minutes",
  },

  {
    id: 6,
    icon: Smartphone,
    title: "Mobile Device Security",
    description:
      "Secure company data on mobile devices.",
    questions: 15,
    duration: "10 Minutes",
  },
];