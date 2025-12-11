import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // 1️⃣ SEND EMAIL
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // 2️⃣ SAVE TO GOOGLE SHEET
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E", // Name, Email, Phone, Message, Timestamp
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone, message, new Date().toLocaleString()]],
      },
    });

    return Response.json({ success: true, message: "Message sent & stored successfully!" }, { status: 200 });
  } catch (err) {
    console.error("ERROR:", err);
    return Response.json({ error: "Server Error", details: err.message }, { status: 500 });
  }
}
