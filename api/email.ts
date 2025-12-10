export default async function handler(req: any, res: any) {
    // Add CORS headers
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message, time } = req.body;

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; // New env var
    const targetEmail = "hrishith27@gmail.com";

    if (!serviceId || !templateId || !publicKey || !privateKey) {
        return res.status(500).json({ error: "EmailJS configuration missing (ensure EMAILJS_PRIVATE_KEY is set)" });
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: privateKey, // Required for Strict Mode
                template_params: {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: targetEmail,
                    time: time
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
        // Check for specific EmailJS error regarding non-browser apps
        if (error.message && error.message.includes("API calls are disabled")) {
            return res.status(500).json({
                error: 'EmailJS Configuration Error: Security setting blocking server-side calls. Please enable "Allow API calls from non-browser applications" in your EmailJS Dashboard > Account > Security.'
            });
        }
        return res.status(500).json({ error: error.message || 'Failed to send email' });
    }
}
