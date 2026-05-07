import { NextResponse } from 'next/server'

type Body = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const data: Body = await request.json()
    const { name, email, subject, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SENDGRID_FROM = process.env.SENDGRID_FROM_EMAIL
    const SENDGRID_TO = process.env.SENDGRID_TO_EMAIL || SENDGRID_FROM

    if (!SENDGRID_API_KEY || !SENDGRID_FROM) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const emailBody = `You have a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`

    const payload = {
      personalizations: [
        {
          to: [{ email: SENDGRID_TO }],
          subject: `[Portfolio] ${subject}`,
        },
      ],
      from: { email: SENDGRID_FROM, name: name },
      reply_to: { email },
      content: [
        {
          type: 'text/plain',
          value: emailBody,
        },
      ],
    }

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return NextResponse.json({ error: 'Failed to send email', details: text }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
