// Vercel serverless function (native /api convention — no Astro adapter needed
// since the rest of the site stays fully static). Holds the Buttondown API key
// server-side; the browser never sees it. Configure BUTTONDOWN_API_KEY as a
// Vercel project environment variable (Production + Preview) — never commit it.
//
// Buttondown API reference: https://docs.buttondown.com/api-introduction
// Verify the exact host/path below against that doc — Buttondown has changed
// domains before (buttondown.email -> buttondown.com) and this was written
// without a live account to test against.
const BUTTONDOWN_SUBSCRIBERS_URL = 'https://api.buttondown.com/v1/subscribers';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const email = (req.body && req.body.email || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return res.status(400).json({ ok: false, error: 'Enter a valid email address.' });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    console.error('BUTTONDOWN_API_KEY is not set');
    return res.status(500).json({ ok: false, error: 'Signup is temporarily unavailable — try again shortly.' });
  }

  try {
    const bdRes = await fetch(BUTTONDOWN_SUBSCRIBERS_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (bdRes.ok) {
      return res.status(200).json({ ok: true });
    }

    const errBody = await bdRes.json().catch(() => null);
    if (bdRes.status === 400 && errBody) {
      // Buttondown returns 400 for both "already subscribed" and invalid input —
      // surface a friendly message either way rather than raw API error text.
      return res.status(200).json({ ok: true, alreadySubscribed: true });
    }

    console.error('Buttondown API error', bdRes.status, errBody);
    return res.status(502).json({ ok: false, error: 'Signup failed — please try again.' });
  } catch (err) {
    console.error('Buttondown request failed', err);
    return res.status(502).json({ ok: false, error: 'Signup failed — please try again.' });
  }
}
