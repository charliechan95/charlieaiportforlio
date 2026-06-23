import {
  Brain, Workflow, Bot, Server, Cpu, GraduationCap, LineChart,
} from "lucide-react";

export const services = [
  { icon: Brain, title: "AI Consulting", desc: "Identify AI opportunities, build a strategy, and roll out AI-driven business solutions tailored to your operations." },
  { icon: Bot, title: "AI Agent Deployment", desc: "Deploy local AI agents and configure skills with production-grade frameworks.", tags: ["Hermes Agent", "OpenClaw", "Docker", "Ollama", "Local LLMs"] },
  { icon: Server, title: "MCP Server & Infrastructure", desc: "Connect AI applications to MCP servers and external tools for advanced agent capabilities." },
  { icon: Cpu, title: "LLM Integration & Cost Optimization", desc: "Cut AI operating costs with smart multi-provider deployment.", tags: ["OpenRouter", "NVIDIA NIM", "DeepSeek", "MiniMax", "Owl Alpha", "Ollama"] },
  { icon: GraduationCap, title: "AI Training & Workshops", desc: "Hands-on training for teams, educators and students.", tags: ["Prompt Engineering", "AI Productivity", "Agents", "Local AI", "Content", "Automation"] },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive work — social media, documents, reports, browsers, PDFs, research, Excel, design and bookings." },
  { icon: LineChart, title: "Machine Learning & AI Engineering", desc: "ML systems, classifiers, AI pipelines and RAG solutions in Python." },
];

export const skillCategories = [
  { title: "AI & Automation", items: ["AI Consulting", "Prompt Engineering", "Workflow Automation", "AI Agent Deployment", "AI Application Development"] },
  { title: "LLM Technologies", items: ["OpenAI APIs", "OpenRouter", "DeepSeek", "MiniMax", "NVIDIA NIM", "Ollama"] },
  { title: "Development", items: ["Python", "Machine Learning", "API Integration", "Docker", "MCP Integration"] },
  { title: "AI Solutions", items: ["RAG Systems", "Chatbots", "Knowledge Assistants", "Content Generation", "AI Training"] },
];

export const projects = [
  { title: "Local AI Agent Deployment Platform", tech: ["Hermes Agent", "OpenClaw", "Docker"], desc: "Configured local AI agents, deployed agent skills, and implemented practical AI workflows for business use cases.", impact: "Private, low-cost agent runtime" },
  { title: "RAG Assistant Chatbot", tech: ["Python", "LLMs", "Vector DBs", "Streamlit"], desc: "Retrieval-augmented chatbot for accurate information retrieval from company knowledge bases. Built using streamlit in python", impact: "Accurate domain answers" },
  { title: "AI Travel Planner — Morocco", tech: ["React", "TypeScript", "AI APIs"], desc: "Intelligent travel planning that generates personalized itineraries for private Morocco tours.", impact: "Conversion-ready itineraries" },
  { title: "Social Media Automation Pipeline", tech: ["Workflows", "Gemini API", "Instagram"], desc: "Automatically generates images, captions, hashtags and publishes content to social platforms.", impact: "Hands-off publishing" },
  { title: "Insurance AI Assistant", tech: ["LLMs", "Automation", "Documents"], desc: "AI solutions for invoice processing and insurance-related workflows.", impact: "Faster claims handling" },
  { title: "Language Translation App", tech: ["Python", "Streamlit"], desc: "Translate a paragraph, sentence into the language of your choice.", impact: "Instant multilingual translation" },
  { title: "Expense Tracking App", tech: ["SwiftUI", "Superapp", "Cline", "VSCode", "Kilo Code"], desc: "Track daily expenses for company use.", impact: "Clean expense ops" },
  { title: "Language Learning App", tech: ["SwiftUI", "Superapp", "Cline", "VSCode", "Kilo Code"], desc: "Language learning app with quizzes and progress tracking across multiple languages.", impact: "Engaging learning UX" },
  { title: "AI Post Designer App", tech: ["Google Gemini", "AI APIs", "Instagram"], desc: "Built with Google Gemini, change your picture style you like, add caption add text post on your IG!!", impact: "Instant social content" },
];

export const experience = [
  { role: "STEM Tutor / AI Educator", org: "Edcosys Hong Kong", period: "Mar 2026 — Present", points: ["Deliver AI education programs", "Train students in AI technologies", "Develop AI learning materials"] },
  { role: "System Specialist / IT Technician", org: "The University of Hong Kong", period: "Mar 2021 — Mar 2023", points: ["Technical support", "System administration", "IT infrastructure management"] },
  { role: "Assistant Technical Support Officer", org: "Hong Kong Economic Times Limited", period: "Nov 2018 — Mar 2021", points: ["Technical support", "System troubleshooting", "User support"] },
];

export const metrics = [
  { value: 40, suffix: "+", label: "Solution Based AI Application", highlight: "Deliver" },
  { value: 5, suffix: "+", label: "Years Technical Experience" },
  { value: 25, suffix: "+", label: "staff with AI skillsets", highlight: "Train" },
  { value: 60, suffix: "+", label: "AI agent and Automation Solution", highlight: "Design" },
];