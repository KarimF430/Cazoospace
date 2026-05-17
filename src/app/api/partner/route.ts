import { NextResponse } from "next/server";
import { google } from "googleapis";

interface PartnerRequestBody {
  name: string;
  email: string;
  type: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const body: PartnerRequestBody = await request.json();
    const { name, email, type, details } = body;

    // 1. Validate fields server-side
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim() || !email.includes("@")) {
      return NextResponse.json({ error: "A valid work email is required." }, { status: 400 });
    }
    if (!type || !type.trim()) {
      return NextResponse.json({ error: "Engagement type is required." }, { status: 400 });
    }
    if (!details || !details.trim()) {
      return NextResponse.json({ error: "Project goals/details are required." }, { status: 400 });
    }

    // 2. Fetch secrets from environment variables
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.error("Missing Google Sheets API environment variables.");
      return NextResponse.json(
        { error: "Internal Server Configuration Error." },
        { status: 500 }
      );
    }

    // 3. Authenticate with Google API
    // GCP private keys saved as strings can contain escaped \n, replace them with actual newlines
    const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: formattedPrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 4. Create row content
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/Edmonton" }); // Canadian Timezone (Calgary)
    const values = [[timestamp, name.trim(), email.trim(), type, details.trim()]];

    // 5. Append to Google Sheet (using Sheet1, columns A to E)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: "Inquiry submitted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Google Sheets API Submission Error:", error);
    
    // Check if error is due to authentication or invalid spreadsheet permission
    if (error.code === 403 || error.status === 403) {
      return NextResponse.json(
        { error: "Access Denied: Please share the sheet with the Service Account email as Editor." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit request to Google Sheets. Please try again." },
      { status: 500 }
    );
  }
}
