# Google Sheets Integration — D-World Solutions

## Quick Setup (10 minutes)

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **"D-World Solutions — Contact Submissions"**

### Step 2: Open Apps Script
1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Paste the code below:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let sheet;
    let row = [];

    switch (data.type) {
      case "contact":
        sheet = ss.getSheetByName("Contact Submissions") || ss.insertSheet("Contact Submissions");
        if (sheet.getLastRow() === 0) {
          sheet.appendRow([
            "Timestamp", "Name", "Company", "Email", "Phone",
            "Country", "Services", "Budget", "Timeline", "Message"
          ]);
          var headerRange = sheet.getRange(1, 1, 1, 10);
          headerRange.setFontWeight("bold");
          headerRange.setBackground("#1B3869");
          headerRange.setFontColor("#FFFFFF");
        }
        row = [
          data.timestamp, data.name, data.company, data.email, data.phone,
          data.country, data.services, data.budget, data.timeline, data.message
        ];

        if (data.email) {
          sendConfirmationEmail(data);
        }
        break;

      default:
        return ContentService.createTextOutput(JSON.stringify({
          status: "error", message: "Unknown data type"
        })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({
      status: "success", message: "Data saved"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error", message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(data) {
  try {
    const subject = "Thank you for contacting D-World Solutions";
    const body = `
Dear ${data.name},

Thank you for reaching out to D-World Solutions. We have received your inquiry and our team will get back to you within 24 hours.

Your Submission:
- Name: ${data.name}
- Company: ${data.company || "N/A"}
- Email: ${data.email}
- Phone: ${data.phone || "N/A"}
- Services: ${data.services}
- Budget: ${data.budget || "Not specified"}
- Timeline: ${data.timeline || "Not specified"}

If you have any urgent questions, please email us at info@dworldsolutions.com

Best regards,
D-World Solutions Team
www.dworldsolutions.com
    `;

    GmailApp.sendEmail(data.email, subject, body, {
      from: "info@dworldsolutions.com",
      name: "D-World Solutions"
    });
  } catch (error) {
    Logger.log("Email error: " + error.toString());
  }
}

function doGet() {
  return ContentService.createTextOutput("D-World Solutions - Google Sheets Integration Active");
}
```

4. Save (Ctrl+S), name it **"D-World Solutions Data Tracker"**
5. Run the `authorizeEmailPermissions` function once if you added email sending (click ▶ Run)

### Step 3: Deploy as Web App
1. Click **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** → **Authorize access**
6. **Copy the URL** (looks like `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 4: Add to `.env`
```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_URL/exec
```

### Step 5: Test
```bash
npm run dev
```
Fill out the contact form and check your Google Sheet.

---

## Updating After Code Changes
- Apps Script → Deploy → Manage deployments → Edit (pencil icon) → New version → Deploy
- URL stays the same — no code changes needed
