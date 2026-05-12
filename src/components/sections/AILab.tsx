"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Zap, Brain, Bot, GitBranch, Sparkles, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Experiment {
  icon: LucideIcon;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  tech: string[];
}

const experiments: Experiment[] = [
  {
    icon: Bot,
    title: "AI Code Review Agent",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    description:
      "LangGraph-powered agent that performs PR reviews, suggests refactors, and detects security vulnerabilities automatically.",
    tech: ["LangGraph", "Python", "GitHub API", "GPT-4"],
  },
  {
    icon: Brain,
    title: "Codebase RAG System",
    status: "Production",
    statusColor: "text-indigo-400 bg-indigo-400/10",
    description:
      "Semantic search over engineering docs and codebase. Engineers query in natural language, get precise answers with code snippets and file references.",
    tech: ["Pinecone", "OpenAI", "Next.js", "LangChain"],
  },
  {
    icon: Sparkles,
    title: "AI Product Spec Generator",
    status: "Beta",
    statusColor: "text-violet-400 bg-violet-400/10",
    description:
      "Input a problem statement, get structured PRDs, user stories, technical requirements, and edge cases — ready for team review.",
    tech: ["Claude API", "React", "Structured Outputs"],
  },
  {
    icon: GitBranch,
    title: "Automated Testing Agent",
    status: "Experimental",
    statusColor: "text-amber-400 bg-amber-400/10",
    description:
      "Analyzes code changes, generates relevant test cases, and identifies untested edge cases before PRs are merged.",
    tech: ["OpenAI", "AST Analysis", "Jest", "Vitest"],
  },
  {
    icon: Terminal,
    title: "AI CLI Developer Toolkit",
    status: "Internal",
    statusColor: "text-cyan-400 bg-cyan-400/10",
    description:
      "Custom CLI tools using AI to scaffold boilerplate, generate database migrations, and translate requirements into working code.",
    tech: ["Python", "Click", "Anthropic API", "SQLAlchemy"],
  },
  {
    icon: Zap,
    title: "Intelligent Monitoring Alerts",
    status: "Shipped",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    description:
      "LLM-powered alert triage that classifies incidents, suggests RCA approaches, and drafts incident reports automatically.",
    tech: ["PagerDuty", "OpenAI", "Slack API", "Python"],
  },
];

export default function AILab() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ailab" ref={ref} className="section-padding relative bg-[#050510] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              AI &amp; Innovation Lab
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Building the{" "}
            <span className="gradient-text">AI-native future</span>
            <br />
            of engineering.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-16 max-w-xl">
            I don&apos;t just use AI tools — I build systems with them. These experiments explore how AI can
            transform how software teams operate.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {experiments.map((exp) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl glow-border group cursor-default"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${exp.statusColor}`}>
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="font-syne font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs text-slate-500 bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
