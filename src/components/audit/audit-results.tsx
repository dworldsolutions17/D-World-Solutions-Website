import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Target,
  Wrench,
  Rocket,
  MessageCircle,
  Calendar,
} from "lucide-react";
import type { AuditReport } from "@/lib/audit-types";

interface Props {
  report: AuditReport;
  businessName: string;
  onRetake: () => void;
}

function getScoreColor(score: number): string {
  if (score >= 75) return "text-success bg-success/10";
  if (score >= 50) return "text-amber-500 bg-amber-500/10";
  return "text-red-500 bg-red-500/10";
}

export function AuditResults({ report, businessName, onRetake }: Props) {
  const scoreColor = getScoreColor(report.healthScore);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-border bg-white p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted-text uppercase tracking-wider mb-2">
              Digital Presence Health Status
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              {report.healthStatus}
            </h2>
            <p className="text-muted-text mt-2">
              Personalized audit for <strong className="text-primary">{businessName}</strong>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`w-24 h-24 rounded-2xl flex items-center justify-center font-heading font-bold text-4xl ${scoreColor}`}
            >
              {report.healthScore}
            </div>
            <div className="text-sm text-muted-text">
              <p className="font-semibold text-primary">Overall</p>
              <p>Score</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-3xl border border-border bg-white p-6 md:p-10"
      >
        <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-secondary" />
          Business Overview
        </h3>
        <p className="text-muted-text leading-relaxed">{report.businessSummary}</p>
        <p className="text-muted-text leading-relaxed mt-3">{report.currentSituation}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-border bg-white p-6 md:p-8"
        >
          <h3 className="font-heading text-lg font-bold text-success mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            What You're Doing Well
          </h3>
          <ul className="space-y-3">
            {report.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-text">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-border bg-white p-6 md:p-8"
        >
          <h3 className="font-heading text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Areas Needing Attention
          </h3>
          <ul className="space-y-3">
            {report.weaknesses.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-text">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-accent" />
          Your Top Digital Opportunities
        </h3>
        <div className="space-y-6">
          {report.topOpportunities.map((op, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border bg-white p-6 md:p-8 hover:border-secondary/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-3xl font-bold text-gradient">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-heading text-lg md:text-xl font-bold text-primary">
                  {op.finding}
                </h4>
              </div>
              <div className="grid gap-4 text-sm">
                <div className="bg-light-gray rounded-xl p-4">
                  <p className="font-semibold text-primary mb-1">Why it matters</p>
                  <p className="text-muted-text">{op.whyItMatters}</p>
                </div>
                <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                  <p className="font-semibold text-primary mb-1 flex items-center gap-1">
                    <Lightbulb className="w-4 h-4 text-accent" />
                    Opportunity
                  </p>
                  <p className="text-muted-text">{op.opportunity}</p>
                </div>
                <div className="bg-secondary/5 rounded-xl p-4 border border-secondary/20">
                  <p className="font-semibold text-primary mb-1 flex items-center gap-1">
                    <Wrench className="w-4 h-4 text-secondary" />
                    Recommended Action
                  </p>
                  <p className="text-muted-text">{op.recommendedAction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-3xl border border-border bg-white p-6 md:p-10"
      >
        <h3 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-secondary" />
          What We Recommend
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <span className="inline-block rounded-full bg-red-50 text-red-600 px-3 py-1 text-xs font-semibold mb-3">
              Do Now
            </span>
            <ul className="space-y-2">
              {report.recommendations.doNow.map((r, i) => (
                <li key={i} className="text-sm text-muted-text flex gap-2">
                  <ArrowRight className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-block rounded-full bg-amber-50 text-amber-600 px-3 py-1 text-xs font-semibold mb-3">
              Improve Next
            </span>
            <ul className="space-y-2">
              {report.recommendations.improveNext.map((r, i) => (
                <li key={i} className="text-sm text-muted-text flex gap-2">
                  <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-block rounded-full bg-blue-50 text-blue-600 px-3 py-1 text-xs font-semibold mb-3">
              Build Later
            </span>
            <ul className="space-y-2">
              {report.recommendations.buildLater.map((r, i) => (
                <li key={i} className="text-sm text-muted-text flex gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-3xl bg-primary text-white p-6 md:p-10"
      >
        <h3 className="font-heading text-xl font-bold mb-4">
          How D-World Solutions Can Help
        </h3>
        <div className="space-y-4 mb-6">
          {report.dwsServices.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <p className="font-semibold text-accent-light mb-1">{s.service}</p>
              <p className="text-white/70 text-sm">{s.reason}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a Free Consultation
          </a>
          <a
            href="https://wa.me/923341570567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3 font-semibold hover:bg-[#1ebf5a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to DWS on WhatsApp
          </a>
        </div>
      </motion.div>

      <div className="text-center">
        <button
          onClick={onRetake}
          className="text-sm text-muted-text hover:text-secondary transition-colors underline underline-offset-4"
        >
          Retake the audit
        </button>
      </div>
    </div>
  );
}
