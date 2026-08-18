export interface AuditFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  industry: string;
  location: string;
  businessDescription: string;
  website: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  linkedin: string;
  googleBusiness: string;
  biggestChallenge: string;
  currentActivities: string[];
  primaryGoal: string;
}

export interface AuditOpportunity {
  finding: string;
  whyItMatters: string;
  opportunity: string;
  recommendedAction: string;
}

export interface DWSServiceMatch {
  service: string;
  reason: string;
}

export interface AuditReport {
  healthStatus: string;
  healthScore: number;
  businessSummary: string;
  currentSituation: string;
  strengths: string[];
  weaknesses: string[];
  topOpportunities: AuditOpportunity[];
  recommendations: {
    doNow: string[];
    improveNext: string[];
    buildLater: string[];
  };
  dwsServices: DWSServiceMatch[];
  leadQualification: string;
  salesApproach: string;
}

export const businessTypes = [
  "Restaurant / Café",
  "Retail / E-Commerce",
  "Service Business",
  "B2B / Software Company",
  "Healthcare / Clinic",
  "Real Estate",
  "Education / Coaching",
  "Manufacturing / Industrial",
  "Construction",
  "Professional Services (Legal, Finance, etc.)",
  "Travel / Hospitality",
  "Other",
];

export const industries = [
  "Food & Beverage",
  "Retail",
  "Technology",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "Manufacturing",
  "Construction",
  "Logistics",
  "Hospitality",
  "Media & Entertainment",
  "Professional Services",
  "Other",
];

export const biggestChallenges = [
  "Getting more customers",
  "Getting more leads",
  "Increasing sales",
  "Improving social media",
  "Improving website",
  "Getting found on Google",
  "Running better ads",
  "Building brand awareness",
  "Improving online reputation",
  "I don't know what's wrong",
];

export const currentActivities = [
  "Social media management",
  "Meta Ads (Facebook/Instagram)",
  "Google Ads",
  "SEO",
  "Website",
  "Content marketing",
  "Influencer marketing",
  "Email marketing",
  "Nothing consistently",
  "Other",
];

export const primaryGoals = [
  "More enquiries",
  "More sales",
  "More website visitors",
  "More social engagement",
  "More brand awareness",
  "Better Google visibility",
  "Better conversion rate",
  "Better overall digital presence",
];

export const emptyReport: AuditReport = {
  healthStatus: "",
  healthScore: 0,
  businessSummary: "",
  currentSituation: "",
  strengths: [],
  weaknesses: [],
  topOpportunities: [],
  recommendations: { doNow: [], improveNext: [], buildLater: [] },
  dwsServices: [],
  leadQualification: "",
  salesApproach: "",
};
