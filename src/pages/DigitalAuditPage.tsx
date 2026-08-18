import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Globe,
  Target,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Sparkles,
  ScanSearch,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuditResults } from "@/components/audit/audit-results";
import { runDigitalAudit } from "@/lib/groq";
import { sendToGoogleSheets, getCurrentTimestamp } from "@/utils/googleSheets";
import type { DigitalAuditData } from "@/utils/googleSheets";
import {
  businessTypes,
  industries,
  biggestChallenges,
  currentActivities,
  primaryGoals,
  type AuditFormData,
  type AuditReport,
} from "@/lib/audit-types";

const TOTAL_STEPS = 3;

const initialForm: AuditFormData = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  businessType: "",
  industry: "",
  location: "",
  businessDescription: "",
  website: "",
  instagram: "",
  facebook: "",
  tiktok: "",
  linkedin: "",
  googleBusiness: "",
  biggestChallenge: "",
  currentActivities: [],
  primaryGoal: "",
};

export default function DigitalAuditPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AuditFormData>(initialForm);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<AuditReport | null>(null);

  const updateField = (field: keyof AuditFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleActivity = (activity: string) => {
    setForm((prev) => {
      const exists = prev.currentActivities.includes(activity);
      return {
        ...prev,
        currentActivities: exists
          ? prev.currentActivities.filter((a) => a !== activity)
          : [...prev.currentActivities, activity],
      };
    });
  };

  const isStepValid = (): boolean => {
    if (step === 1) {
      return (
        form.name.trim() !== "" &&
        form.businessName.trim() !== "" &&
        form.phone.trim() !== "" &&
        form.email.trim() !== "" &&
        form.businessType !== "" &&
        form.industry !== ""
      );
    }
    if (step === 2) {
      return true;
    }
    if (step === 3) {
      return (
        form.biggestChallenge !== "" &&
        form.currentActivities.length > 0 &&
        form.primaryGoal !== ""
      );
    }
    return true;
  };

  const handleNext = async () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    await handleSubmit();
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const auditReport = await runDigitalAudit(form);
      setReport(auditReport);

      const topOps = auditReport.topOpportunities
        .map((o, i) => `${i + 1}. ${o.finding} — ${o.recommendedAction}`)
        .join(" | ");

      const services = auditReport.dwsServices
        .map((s) => s.service)
        .join(", ");

      const sheetData: DigitalAuditData = {
        type: "digital-audit",
        timestamp: getCurrentTimestamp(),
        name: form.name,
        businessName: form.businessName,
        phone: form.phone,
        email: form.email,
        businessType: form.businessType,
        industry: form.industry,
        location: form.location,
        businessDescription: form.businessDescription,
        website: form.website,
        instagram: form.instagram,
        facebook: form.facebook,
        tiktok: form.tiktok,
        linkedin: form.linkedin,
        googleBusiness: form.googleBusiness,
        biggestChallenge: form.biggestChallenge,
        currentActivities: form.currentActivities.join(", "),
        primaryGoal: form.primaryGoal,
        healthStatus: auditReport.healthStatus,
        healthScore: String(auditReport.healthScore),
        topOpportunities: topOps,
        recommendedServices: services,
        leadQualification: auditReport.leadQualification,
        fullReport: JSON.stringify(auditReport),
      };
      await sendToGoogleSheets(sheetData);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Audit error:", err);
      setError(
        "We couldn't complete your audit at this moment. Please try again or contact us directly."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetake = () => {
    setReport(null);
    setForm(initialForm);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectClass = (selected: boolean) =>
    `w-full text-left px-4 py-3 rounded-xl border-2 transition font-medium text-sm ${
      selected
        ? "border-secondary bg-secondary/5 text-primary"
        : "border-border hover:border-secondary/40 bg-white text-muted-text"
    }`;

  const inputClass =
    "w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-primary placeholder:text-muted-text/60 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-light-gray via-white to-white pt-24 md:pt-28 pb-16">
        <div className="container-main max-w-3xl mx-auto">
          {!report && !isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary mb-4">
                <ScanSearch className="w-4 h-4" />
                DWS Digital Business Audit
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary leading-tight">
                Is Your Digital Presence
                <br />
                Helping Your Business Grow?
              </h1>
              <p className="mt-4 text-muted-text text-base md:text-lg max-w-xl mx-auto">
                Get a personalized, free digital health check from D-World Solutions and
                discover what's working, what's holding you back, and where your biggest
                digital opportunities are.
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                Free • Personalized • Actionable
              </p>
            </motion.div>
          )}

          {!report && (
            <div className="rounded-3xl border border-border bg-white p-6 md:p-10 shadow-sm">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-primary">
                    Step {step} of {TOTAL_STEPS}
                  </span>
                  <span className="text-sm font-semibold text-secondary">
                    {Math.round((step / TOTAL_STEPS) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-light-gray rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isProcessing ? (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Loader2 className="w-8 h-8 text-secondary animate-spin" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      Analyzing Your Digital Presence
                    </h3>
                    <p className="text-muted-text max-w-sm mx-auto">
                      Our AI audit engine is evaluating your brand, visibility, conversion
                      paths, and growth opportunities. This takes a few seconds...
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <div>
                        <h2 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-secondary" />
                          Tell Us About Your Business
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Your Name *">
                            <input
                              className={inputClass}
                              placeholder="John Doe"
                              value={form.name}
                              onChange={(e) => updateField("name", e.target.value)}
                            />
                          </Field>
                          <Field label="Business Name *">
                            <input
                              className={inputClass}
                              placeholder="Acme Corp"
                              value={form.businessName}
                              onChange={(e) => updateField("businessName", e.target.value)}
                            />
                          </Field>
                          <Field label="Phone / WhatsApp *">
                            <input
                              className={inputClass}
                              placeholder="+92 300 1234567"
                              value={form.phone}
                              onChange={(e) => updateField("phone", e.target.value)}
                            />
                          </Field>
                          <Field label="Email *">
                            <input
                              type="email"
                              className={inputClass}
                              placeholder="john@business.com"
                              value={form.email}
                              onChange={(e) => updateField("email", e.target.value)}
                            />
                          </Field>
                          <Field label="Business Type *">
                            <select
                              className={inputClass}
                              value={form.businessType}
                              onChange={(e) => updateField("businessType", e.target.value)}
                            >
                              <option value="">Select type</option>
                              {businessTypes.map((b) => (
                                <option key={b} value={b}>
                                  {b}
                                </option>
                              ))}
                            </select>
                          </Field>
                          <Field label="Industry *">
                            <select
                              className={inputClass}
                              value={form.industry}
                              onChange={(e) => updateField("industry", e.target.value)}
                            >
                              <option value="">Select industry</option>
                              {industries.map((i) => (
                                <option key={i} value={i}>
                                  {i}
                                </option>
                              ))}
                            </select>
                          </Field>
                        </div>
                        <div className="mt-5 space-y-5">
                          <Field label="Location / Service Area">
                            <input
                              className={inputClass}
                              placeholder="Karachi, Pakistan"
                              value={form.location}
                              onChange={(e) => updateField("location", e.target.value)}
                            />
                          </Field>
                          <Field label="Brief Business Description">
                            <textarea
                              rows={3}
                              className={`${inputClass} h-auto py-3 resize-none`}
                              placeholder="What does your business do? Who are your customers?"
                              value={form.businessDescription}
                              onChange={(e) =>
                                updateField("businessDescription", e.target.value)
                              }
                            />
                          </Field>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h2 className="font-heading text-xl font-bold text-primary mb-2 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-secondary" />
                          Your Digital Presence
                        </h2>
                        <p className="text-sm text-muted-text mb-6">
                          Share links to any platforms you use. Leave blank anything you
                          don't have.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Website URL">
                            <input
                              className={inputClass}
                              placeholder="https://yourbusiness.com"
                              value={form.website}
                              onChange={(e) => updateField("website", e.target.value)}
                            />
                          </Field>
                          <Field label="Instagram Profile">
                            <input
                              className={inputClass}
                              placeholder="instagram.com/yourbusiness"
                              value={form.instagram}
                              onChange={(e) => updateField("instagram", e.target.value)}
                            />
                          </Field>
                          <Field label="Facebook Page">
                            <input
                              className={inputClass}
                              placeholder="facebook.com/yourbusiness"
                              value={form.facebook}
                              onChange={(e) => updateField("facebook", e.target.value)}
                            />
                          </Field>
                          <Field label="TikTok Profile">
                            <input
                              className={inputClass}
                              placeholder="tiktok.com/@yourbusiness"
                              value={form.tiktok}
                              onChange={(e) => updateField("tiktok", e.target.value)}
                            />
                          </Field>
                          <Field label="LinkedIn Profile">
                            <input
                              className={inputClass}
                              placeholder="linkedin.com/company/yourbusiness"
                              value={form.linkedin}
                              onChange={(e) => updateField("linkedin", e.target.value)}
                            />
                          </Field>
                          <Field label="Google Business / Maps">
                            <input
                              className={inputClass}
                              placeholder="Google Business Profile link"
                              value={form.googleBusiness}
                              onChange={(e) => updateField("googleBusiness", e.target.value)}
                            />
                          </Field>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h2 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-2">
                          <Target className="w-5 h-5 text-secondary" />
                          Your Goals & Challenges
                        </h2>

                        <Field label="What is your biggest digital challenge right now? *">
                          <div className="grid gap-2">
                            {biggestChallenges.map((c) => (
                              <button
                                key={c}
                                type="button"
                                onClick={() => updateField("biggestChallenge", c)}
                                className={selectClass(form.biggestChallenge === c)}
                              >
                                {c}
                              </button>
                            ))}
                          </div>
                        </Field>

                        <div className="mt-6">
                          <Field label="What are you currently doing digitally? (Select all that apply) *">
                            <div className="grid sm:grid-cols-2 gap-2">
                              {currentActivities.map((a) => (
                                <button
                                  key={a}
                                  type="button"
                                  onClick={() => toggleActivity(a)}
                                  className={selectClass(
                                    form.currentActivities.includes(a)
                                  )}
                                >
                                  {a}
                                </button>
                              ))}
                            </div>
                          </Field>
                        </div>

                        <div className="mt-6">
                          <Field label="What would you most like to achieve? *">
                            <div className="grid gap-2">
                              {primaryGoals.map((g) => (
                                <button
                                  key={g}
                                  type="button"
                                  onClick={() => updateField("primaryGoal", g)}
                                  className={selectClass(form.primaryGoal === g)}
                                >
                                  {g}
                                </button>
                              ))}
                            </div>
                          </Field>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              {!isProcessing && (
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl border-2 border-border font-semibold text-primary hover:bg-light-gray transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {step === TOTAL_STEPS ? (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Get My Free Digital Audit
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {report && (
            <AuditResults
              report={report}
              businessName={form.businessName}
              onRetake={handleRetake}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-primary mb-1.5">{label}</label>
      {children}
    </div>
  );
}
