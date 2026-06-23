import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import {
  ArrowRight, Download, Mail, MessageCircle, Github, Linkedin, MapPin, Phone,
  CheckCircle2, ExternalLink, GraduationCap, Briefcase, Cpu, Star, AppWindow, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { Counter } from "@/components/portfolio/Counter";
import { services, skillCategories, projects, experience, metrics } from "@/components/portfolio/data";
import portrait from "@/assets/charlie.jpg";
import aiImage from "@/assets/AI.jpeg";
import expenseTrackingImg from "@/assets/expensetracking.jpeg";
import languageImg from "@/assets/language.jpeg";
import insuranceImg from "@/assets/insurance.png";
import aiPostDesignerImg from "@/assets/aipostdesigner.png";
import ragImg from "@/assets/RAG.png";
import travelPlannerImg from "@/assets/travelplanner.png";
import aiTrainingImg from "@/assets/AItraining.jpg";
import aiAgentImg from "@/assets/AIAgent.jpg";
import hermesImg from "@/assets/hermes.png";
import automationImg from "@/assets/automation.jpg";
import translatorImg from "@/assets/translatorapp.jpeg";
import aiecosystemImg from "@/assets/aiecosystem.jpg";
import trainingWorkshopImg from "@/assets/ai-training-workshop.jpg";
import automationProcessImg from "@/assets/ai-automation-process.jpg";
import aiPromoImg from "@/assets/AI_promo.PNG";
import industriesImg from "@/assets/industries-ai-integration.jpg";
import resumePdf from "@/assets/resume.pdf";
import aiCreationImg from "@/assets/AIcreation.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charlie Chan Ho Chung — AI Consultant & Automation Specialist | Hong Kong" },
      { name: "description", content: "Charlie Chan Ho Chung helps businesses deploy AI agents, automate workflows, integrate LLMs and train teams to work smarter with AI." },
      { property: "og:title", content: "Charlie Chan Ho Chung — AI Consultant & Automation Specialist" },
      { property: "og:description", content: "AI consulting, automation, agent deployment, LLM integration and AI training for SMEs, startups and enterprises." },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Toaster position="top-right" richColors />
      <Nav />
      <Hero />
      <Metrics />
      <About />
      <div className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <img
            src={aiPromoImg}
            alt="AI Consultant Services"
            className="block w-full rounded-2xl border border-border/50 object-cover shadow-card"
          />
        </div>
      </div>
      <WhoIWorkWith />
      <Services />
      <AICreation />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/80 px-4 py-2.5 shadow-card backdrop-blur-md">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-transparent">
          &nbsp;
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#contact">Book Free Call <ArrowRight className="h-3.5 w-3.5" /></a>
          </Button>
          <button onClick={() => setOpen((o) => !o)} className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card md:hidden" aria-label="Menu">
            <span className="space-y-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-2xl border border-border bg-card p-3 shadow-card md:hidden">
          <nav className="grid">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center px-4 pb-20 pt-28 sm:pt-32">
      {/* Warm gradient background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Charlie Chan Ho Chung
          </h1>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl">
            AI Consultant &<br />
            <span className="text-primary">Automation Specialist</span>
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
            I help businesses deploy AI, automate workflows, build AI applications, and train teams to work smarter with AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book Free Call <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href={resumePdf} download><Download className="h-4 w-4" /> Resume</a>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a href="#contact"><Mail className="h-4 w-4" /> Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card p-2 shadow-card">
            <div className="overflow-hidden rounded-[1.5rem] border border-border/30">
              <img
                src={portrait}
                alt="Charlie Chan Ho Chung, AI Consultant"
                width={896} height={1152}
                className="block w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">{kicker}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ─── Metrics ─── */
function Metrics() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="group rounded-2xl border border-border/60 bg-card p-6 text-center shadow-card transition-all hover:shadow-card-hover">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
              {m.highlight ? m.highlight : <Counter to={m.value} suffix={m.suffix} />}
            </div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-base text-muted-foreground">
        Passionate about leveraging AI agents, prompt engineering, workflow automation and modern AI technologies to help organizations improve efficiency, reduce manual work and unlock new business opportunities.
      </p>
      <div className="mt-10 flex justify-center">
        <img
          src={aiImage}
          alt="AI-generated visualization"
          className="w-full max-w-2xl rounded-2xl border border-border/50 object-cover shadow-card"
        />
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  const strengths = [
    "AI Consulting", "Workflow Automation", "Agentic AI", "Prompt Engineering", "AI Education",
    "Local LLM Deployment", "Machine Learning", "API Integration", "RAG Development", "MCP Server Integration", "AI Content Creation", "Python Programming", "AI Application Development",
  ];
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="About Me" title="Practical AI for real business problems" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
            <p className="text-muted-foreground">
              Hi, I am <span className="font-semibold text-foreground">Charlie Chan Ho Chung</span>, an AI Consultant passionate about AI technologies. I specialise in prompt engineering, designing agentic AI workflow, applications and automation to solve real business problem.
            </p>
            <p className="mt-4 text-muted-foreground">
              I help organizations deploy practical AI solutions, integrate large language models, automate repetitive processes and empower teams through AI training and workshops.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" /> Education
                </div>
                <div className="mt-2 text-sm font-semibold">BSc (Hons) Computer Science</div>
                <div className="text-xs text-muted-foreground">University of Essex · 2018</div>
              </div>
              <div className="rounded-xl border border-border/60 p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" /> Higher Diploma
                </div>
                <div className="mt-2 text-sm font-semibold">Cloud & Data Centre Administration</div>
                <div className="text-xs text-muted-foreground">HK IVE · 2025</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
            <h3 className="font-display text-lg font-semibold">Skills Highlights</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span key={s} className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Help SMEs adopt AI without enterprise overhead",
                "Deploy local & private LLMs",
                "Build automations with agentic AI",
                "Train teams to use AI day-to-day, not in theory",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Services" title="What I can offer" sub="From strategy to deployment, training and ongoing support — practical AI that ships." />
        <div className="mt-10 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-card">
            <img src={aiTrainingImg} alt="AI Training" className="w-full rounded-2xl object-cover" />
          </div>

          {/* AI Training & Workshops detail */}
          <div className="rounded-2xl border border-border/50 bg-card/60 p-8 shadow-soft backdrop-blur-sm">
            <h3 className="font-display text-lg font-semibold">AI Training & Workshops</h3>
            <p className="mt-2 text-sm text-muted-foreground">Hands-on AI training for corporates, government, tech companies, and educational institutions — in Hong Kong and online.</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3">
                {[
                  "On-site and online delivery — flexible to your team's schedule",
                  "Hands-on sessions with real tools: HeyGen, Dify.ai, Grok, Stable Diffusion, and more",
                  "Curriculum tailored to audience level — from beginners to technical staff",
                  "Course materials designed and customised for each engagement",
                ].map((h) => (
                  <div key={h} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{h}</span>
                  </div>
                ))}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { value: 8, suffix: "+", label: "Sessions delivered" },
                    { value: "All", label: "levels" },
                    { value: "On-site & Online", label: "Formats" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/60 bg-card p-3 text-center">
                      <div className="font-display text-lg font-bold text-primary">
                        {typeof s.value === "number" ? <Counter to={s.value} suffix={s.suffix} /> : s.value}
                      </div>
                      {s.label && <div className="mt-0.5 text-[10px] text-muted-foreground">{s.label}</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border/50 shadow-card">
                <img src={trainingWorkshopImg} alt="Corporate AI training workshop" className="block w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-card">
            <img src={aiAgentImg} alt="AI Agent" className="w-full rounded-2xl object-cover" />
          </div>

          {/* AI Automation & Agent Deployment card */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">AI Automation & Agent Deployment</h3>
            <p className="mt-2 text-sm text-muted-foreground">For organisations looking to automate repetitive workflows, deploy AI agents, and reduce manual overhead.</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-border/30">
              <img src={automationProcessImg} alt="AI automation process illustration" className="block w-full object-cover" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Startups", "Government", "Professional Services", "Insurance", "Logistics"].map((c) => (
                <span key={c} className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {s.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── AI Application Development & Content Creation ─── */
function AICreation() {
  const cards = [
    {
      title: "AI Application Development",
      desc: "Custom AI apps: chatbots, RAG systems, voice agents, travel planners, and business tools.",
      tags: ["Python", "Streamlit", "React", "TypeScript", "RAG", "LLMs"],
    },
    {
      title: "AI Content Creation",
      desc: "AI-generated images, video, music, voice and social media content for brands and creators.",
      tags: ["Gemini", "Stable Diffusion", "HeyGen", "Grok", "Image Gen", "Video Gen"],
    },
  ];

  const cardIcons = [AppWindow, Sparkles];

  return (
    <section className="scroll-mt-24 px-4 py-24" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="AI Solutions"
          title="Application Development & Content Creation"
          sub="End-to-end AI solutions — from building custom applications to generating creative content."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border/50 shadow-card">
          <img src={aiCreationImg} alt="AI Application Development & Content Creation" className="block w-full object-cover" />
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = cardIcons[i];
            return (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─── */
function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Technical Expertise" title="The stack that powers it" />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border/50 shadow-card">
          <img src={aiecosystemImg} alt="AI Ecosystem" className="w-full rounded-2xl object-cover" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">{cat.title}</h3>
                <span className="h-1.5 w-10 rounded-full bg-primary/30" />
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Featured Projects" title="My Work" sub=" AI agents, automations, applications, Machine Learning" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article key={p.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
              {p.title === "Expense Tracking App" ? (
                <div className="relative h-72 overflow-hidden">
                  <img src={expenseTrackingImg} alt="Expense Tracking App" className="h-full w-full object-cover object-top" />
                </div>
              ) : p.title === "Language Learning App" ? (
                <div className="relative h-72 overflow-hidden">
                  <img src={languageImg} alt="Language Learning App" className="h-full w-full object-cover object-top" />
                </div>
              ) : p.title === "Local AI Agent Deployment Platform" ? (
                <div className="relative h-72 overflow-hidden bg-card flex items-center justify-center">
                  <img src={hermesImg} alt="Local AI Agent Deployment Platform" className="h-full w-full object-contain" />
                </div>
              ) : p.title === "Insurance AI Assistant" ? (
                <div className="relative h-72 overflow-hidden">
                  <img src={insuranceImg} alt="Insurance AI Assistant" className="h-full w-full object-cover object-top" />
                </div>
              ) : p.title === "Social Media Automation Pipeline" ? (
                <div className="relative h-72 overflow-hidden bg-card flex items-center justify-center">
                  <img src={automationImg} alt="Social Media Automation Pipeline" className="h-full w-full object-contain" />
                </div>
              ) : p.title === "AI Post Designer App" ? (
                <div className="relative h-72 overflow-hidden">
                  <img src={aiPostDesignerImg} alt="AI Post Designer App" className="h-full w-full object-cover object-top" />
                </div>
              ) : p.title === "RAG Assistant Chatbot" ? (
                <div className="relative h-72 overflow-hidden bg-card flex items-center justify-center">
                  <img src={ragImg} alt="RAG Assistant Chatbot" className="h-full w-full object-contain" />
                </div>
              ) : p.title === "AI Travel Planner — Morocco" ? (
                <div className="relative h-72 overflow-hidden">
                  <img src={travelPlannerImg} alt="AI Travel Planner — Morocco" className="h-full w-full object-cover object-top" />
                </div>
              ) : p.title === "Language Translation App" ? (
                <div className="relative h-72 overflow-hidden bg-card flex items-center justify-center">
                  <img src={translatorImg} alt="Language Translation App" className="h-full w-full object-contain" />
                </div>
              ) : (
                <div className="relative h-36 overflow-hidden bg-primary/5">
                  <div className="absolute inset-0 bg-dots opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl font-bold text-primary/20">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs font-medium text-primary">{p.impact}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs"><ExternalLink className="h-3.5 w-3.5" /> Demo</Button>
                    <Button size="sm" variant="ghost" className="h-8 px-2 text-xs"><Github className="h-3.5 w-3.5" /> Code</Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader kicker="Work Experience" title="Career journey" />
        <ol className="relative space-y-6 border-l border-border/60 pl-6">
          {experience.map((e) => (
            <li key={e.role} className="relative">
              <span className="absolute -left-[33px] top-2 grid h-6 w-6 place-items-center rounded-full border border-border/60 bg-card">
                <Briefcase className="h-3 w-3 text-primary" />
              </span>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="text-xs text-muted-foreground">{e.period}</span>
                </div>
                <div className="text-sm font-medium text-primary">{e.org}</div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) { toast.error("Please fill in all fields"); return; }
    if (name.length > 100 || email.length > 255 || message.length > 2000) { toast.error("Input too long"); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { toast.error("Invalid email"); return; }
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:chancharlie689@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    form.reset();
  };
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Contact" title="Lets Work together, make the world better" sub="Tell me about your goals — I usually reply within a day." />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
            <h3 className="font-display text-lg font-semibold">Direct channels</h3>
            <div className="mt-5 space-y-3 text-sm">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="chancharlie689@gmail.com" href="mailto:chancharlie689@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone / WhatsApp" value="+852 6585 6599" href="tel:+85265856599" />
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Hong Kong" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Button variant="glass" asChild><a href="https://wa.me/85265856599" target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a></Button>
              <Button variant="glass" asChild><a href="https://www.linkedin.com/in/chan-ho-chung-charlie" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
              <Button variant="glass" asChild><a href="https://github.com/charliechan95" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a></Button>
              <Button variant="glass" asChild><a href="mailto:chancharlie689@gmail.com"><Mail className="h-4 w-4" /> Email</a></Button>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="name">Name</label>
                <Input id="name" name="name" required maxLength={100} placeholder="Jane Doe" className="mt-1.5" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground" htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required maxLength={255} placeholder="jane@company.com" className="mt-1.5" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs text-muted-foreground" htmlFor="message">How can I help?</label>
              <Textarea id="message" name="message" required maxLength={2000} rows={5} placeholder="Tell me about your project, goals or questions…" className="mt-1.5" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-5 w-full">
              Send Message <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-4 py-3 transition-colors hover:border-primary/40">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-card text-primary">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

/* ─── Who I Work With ─── */
function WhoIWorkWith() {
  const industries = [
    { name: "Startups", desc: "MVP builds, AI product integration, rapid prototyping" },
    { name: "Government", desc: "Process automation, document handling, internal tools" },
    { name: "Professional Services", desc: "Workflow automation, knowledge management, client delivery" },
    { name: "Insurance", desc: "Claims processing, document analysis, customer service automation" },
    { name: "Logistics", desc: "Supply chain optimisation, tracking automation, reporting" },
    { name: "Corporates", desc: "Staff AI training, productivity tools, team enablement" },
    { name: "Tech Companies", desc: "Developer training, AI tooling, agent deployment" },
    { name: "Education", desc: "Curriculum design, AI literacy, student workshops" },
    { name: "Travel", desc: "Booking automation, itinerary planning, customer experience AI" },
    { name: "Reception", desc: "Customer service automation, enquiry handling, front-desk AI tools" },
  ];

  return (
    <section id="who-i-work-with" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Who I Work With"
          title="Corporate teams, Enterprises, Educators, Across Industries"
          sub="I work with organisations across Hong Kong that need practical AI — whether automating operations or upskilling teams."
        />
        <div className="mt-8 overflow-hidden rounded-2xl border border-border/50 shadow-card">
          <img
            src={industriesImg}
            alt="AI integrated across industries — Government, Logistics, Corporate, Startup, Education"
            className="block w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-xl border border-border/60 bg-card p-5 shadow-card transition-all hover:shadow-card-hover">
              <h3 className="font-display text-base font-semibold">{ind.name}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div>© {new Date().getFullYear()} Charlie Chan Ho Chung — AI Consultant, Hong Kong</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/charliechan95" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/chan-ho-chung-charlie" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:chancharlie689@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

