import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("key is -------------",process.env.RESEND_API_KEY)

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("entitis are------>",email, subject, message);
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to:  email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log("err is----------",error)
    return NextResponse.json({ error });
  }
}