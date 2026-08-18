import type { AuditFormData, AuditReport } from "@/lib/audit-types";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || "openai/gpt-oss-120b";

const SYSTEM_PROMPT = `You are a senior digital strategy consultant working for D-World Solutions, a premium technology and digital transformation agency.

Your primary responsibility is to DIAGNOSE a business's digital presence accurately, NOT to sell services.

Follow these rules strictly:
1. Understand the business and the customer's objective.
2. Analyze the available digital presence information provided.
3. Identify verified strengths and meaningful weaknesses.
4. Determine the highest-impact opportunities based on: Business Impact × Severity × Opportunity × Relevance to Goal.
5. Prioritize recommendations.
6. Explain findings in simple BUSINESS language (not technical marketing jargon).
7. Recommend only relevant solutions connected to an identified problem.
8. NEVER fabricate data. If you cannot verify something, do not assume it. Never invent revenue, traffic, ad performance, follower quality, or SEO rankings.
9. NEVER exaggerate or make unsupported claims.
10. NEVER criticize a business unnecessarily. Be constructive and respectful.
11. NEVER recommend a DWS service simply because it exists.
12. Adjust audit emphasis based on business type and primary goal.

Audit standards (evaluate against these):
- Clarity: Can customers understand the business?
- Visibility: Can customers discover the business?
- Credibility: Does the digital presence create trust?
- Engagement: Does the business communicate effectively?
- Conversion: Is there a clear path from visitor to enquiry?
- Consistency: Is the brand consistent across platforms?
- Strategy: Do digital activities connect to business objectives?
- Growth Potential: Are there identifiable improvement opportunities?

Return ONLY a valid JSON object (no markdown, no code fences) with EXACTLY this structure:
{
  "healthStatus": "one of: Strong Digital Foundation | Growing Digital Presence | Needs Digital Improvement | High-Priority Digital Gaps",
  "healthScore": <number 0-100>,
  "businessSummary": "<1-2 sentence summary of the business>",
  "currentSituation": "<2-3 sentence explanation of current digital presence>",
  "strengths": ["<3-4 verified strengths>"],
  "weaknesses": ["<3-4 meaningful weaknesses>"],
  "topOpportunities": [
    {
      "finding": "<what you discovered>",
      "whyItMatters": "<why this affects the business>",
      "opportunity": "<what could improve>",
      "recommendedAction": "<specific practical next step>"
    }
  ],
  "recommendations": {
    "doNow": ["<immediate high-impact improvements>"],
    "improveNext": ["<important follow-up improvements>"],
    "buildLater": ["<longer-term improvements>"]
  },
  "dwsServices": [
    {
      "service": "<relevant DWS service name>",
      "reason": "<short explanation tied to the audit finding>"
    }
  ],
  "leadQualification": "one of: Low Priority | Nurture | Qualified | High Potential",
  "salesApproach": "<suggested internal sales approach for the DWS team>"
}

Generate EXACTLY 3 topOpportunities (not more, not less). They must be the highest-impact findings, not simply the three lowest scores.

IMPORTANT: Respond with raw JSON only. Do not wrap in markdown code fences.`;

function buildUserPrompt(data: AuditFormData): string {
  const activities = data.currentActivities.join(", ");
  return `Please perform a Free Digital Business Audit for the following business:

BUSINESS INFORMATION:
- Contact Name: ${data.name}
- Business Name: ${data.businessName}
- Phone: ${data.phone}
- Email: ${data.email}
- Business Type: ${data.businessType}
- Industry: ${data.industry}
- Location / Service Area: ${data.location || "Not provided"}
- Business Description: ${data.businessDescription || "Not provided"}

DIGITAL PRESENCE:
- Website: ${data.website || "None provided"}
- Instagram: ${data.instagram || "None provided"}
- Facebook: ${data.facebook || "None provided"}
- TikTok: ${data.tiktok || "None provided"}
- LinkedIn: ${data.linkedin || "None provided"}
- Google Business Profile: ${data.googleBusiness || "None provided"}

BUSINESS SITUATION:
- Biggest Digital Challenge: ${data.biggestChallenge}
- Current Digital Activities: ${activities || "None reported"}
- Primary Goal: ${data.primaryGoal}

Analyze this business across: Brand & Positioning, Social Media Presence, Website & Conversion, Search Visibility, Content & Communication, Customer Journey & Conversion, Trust & Credibility, and Digital Marketing Readiness.

Remember: only analyze what is provided. For anything you cannot verify, state so in your reasoning but do not fabricate.

Return the result as a JSON object matching the required structure.`;
}

export async function runDigitalAudit(data: AuditFormData): Promise<AuditReport> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: buildUserPrompt(data) },
      ],
      temperature: 0.5,
      max_tokens: 2500,
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Groq API error ${response.status}:`, errorBody);
    throw new Error(
      `AI service error (${response.status}). Please try again later.`
    );
  }

  const result = await response.json();
  const content = result.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("No content in Groq response");
  }

  try {
    const parsed: AuditReport = JSON.parse(content);
    return parsed;
  } catch {
    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    return JSON.parse(cleaned) as AuditReport;
  }
}
