const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

export interface ContactFormData {
  type: "contact";
  timestamp: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  services: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface DigitalAuditData {
  type: "digital-audit";
  timestamp: string;
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
  currentActivities: string;
  primaryGoal: string;
  healthStatus: string;
  healthScore: string;
  topOpportunities: string;
  recommendedServices: string;
  leadQualification: string;
  fullReport: string;
}

export type SheetData = ContactFormData | DigitalAuditData;

export const sendToGoogleSheets = async (data: SheetData): Promise<boolean> => {
  if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
    console.warn("Google Sheets URL not configured. Data not sent:", data);
    return false;
  }

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Data sent to Google Sheets:", data.type);
    return true;
  } catch (error) {
    console.error("Error sending to Google Sheets:", error);
    return false;
  }
};

export const getCurrentTimestamp = (): string => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
