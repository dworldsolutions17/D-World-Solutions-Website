import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendToGoogleSheets, getCurrentTimestamp } from "@/utils/googleSheets";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  country: z.string().optional(),
  services: z.string().min(1, "Please select at least one service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "Cloud Infrastructure",
  "Digital Marketing",
  "UI/UX Design",
  "Other",
];

const budgetOptions = [
  "$5K - $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K+",
  "Not sure yet",
];

const timelineOptions = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Ongoing partnership",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await sendToGoogleSheets({
      type: "contact",
      timestamp: getCurrentTimestamp(),
      name: data.name,
      company: data.company || "",
      email: data.email,
      phone: data.phone || "",
      country: data.country || "",
      services: data.services,
      budget: data.budget || "",
      timeline: data.timeline || "",
      message: data.message,
    });
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <Section id="contact" bg="white" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="Get In Touch"
          subtitle="Fill out the form below and our team will get back to you within 24 hours with a personalized proposal."
        >
          Let&apos;s Start a
          <br />
          Conversation
        </SectionTitle>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="mt-14 max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-16 rounded-2xl bg-light-gray border border-border">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Thank You for Reaching Out!
              </h3>
              <p className="text-muted-text max-w-sm mx-auto mb-6">
                Our team will review your requirements and get back to you within 24 hours
                with a tailored proposal.
              </p>
              <Button variant="secondary" onClick={() => setSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-white p-6 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="Full Name" required error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className={inputStyles}
                    placeholder="John Doe"
                  />
                </InputField>

                <InputField label="Company" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className={inputStyles}
                    placeholder="Your company name"
                  />
                </InputField>

                <InputField label="Email Address" required error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email")}
                    className={inputStyles}
                    placeholder="john@company.com"
                  />
                </InputField>

                <InputField label="Phone Number" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    className={inputStyles}
                    placeholder="+92 300 1234567"
                  />
                </InputField>

                <InputField label="Country" error={errors.country?.message}>
                  <input
                    {...register("country")}
                    className={inputStyles}
                    placeholder="Pakistan"
                  />
                </InputField>

                <InputField label="Services Interested" required error={errors.services?.message}>
                  <select {...register("services")} className={inputStyles}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </InputField>

                <InputField label="Budget Range" error={errors.budget?.message}>
                  <select {...register("budget")} className={inputStyles}>
                    <option value="">Select budget</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </InputField>

                <InputField label="Timeline" error={errors.timeline?.message}>
                  <select {...register("timeline")} className={inputStyles}>
                    <option value="">Select timeline</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </InputField>
              </div>

              <InputField
                label="Project Description"
                required
                error={errors.message?.message}
                className="mt-5"
              >
                <textarea
                  {...register("message")}
                  rows={5}
                  className={cn(inputStyles, "resize-none")}
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </InputField>

              <div className="mt-6">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-muted-text">
                By submitting, you agree to our Privacy Policy and consent to being contacted
                about your inquiry.
              </p>
            </form>
          )}
        </div>
      </RevealOnScroll>
    </Section>
  );
}

const inputStyles =
  "w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-primary placeholder:text-muted-text/60 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all duration-200";

function InputField({
  label,
  required,
  error,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-primary mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
