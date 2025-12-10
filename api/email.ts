import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message, time } = req.body;

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;
    const targetEmail = 'hrishith27@gmail.com';

    if (!serviceId || !templateId || !publicKey || !privateKey) {
        return res.status(500).json({ error: 'EmailJS configuration missing' });
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: privateKey, // Required in Strict Mode
                template_params: {
                    from_name: name,
                    from_email: email,
                    message,
                    to_email: targetEmail,
                    time,
                },
            }),
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`EmailJS Error: ${text}`);
        }

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Email API Error:', error);

        if (error.message?.includes('API calls are disabled')) {
            return res.status(500).json({
                error:
                    'EmailJS security setting blocks server-side calls. Enable "Allow API calls from non-browser apps".',
            });
        }

        return res.status(500).json({ error: error.message || 'Failed to send email' });
    }
}
