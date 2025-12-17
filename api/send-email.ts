import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['rebeau.mickael@gmail.com'],
            replyTo: email,
            subject: `Nouveau message de ${name}`,
            html: `
        <h1>Nouveau message du Portfolio</h1>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json({ message: error.message || 'Error sending email' });
    }
}
