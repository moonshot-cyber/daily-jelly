// Vercel serverless function (native /api convention — no Astro adapter needed
// since the rest of the site stays fully static). Holds the Buttondown API key
// server-side; the browser never sees it. Configure BUTTONDOWN_API_KEY as a
// Vercel project environment variable (Production + Preview) — never commit it.
//
// Buttondown API reference: https://docs.buttondown.com/api-introduction
// Confirmed working 2026-09 against a live account: host/path/auth format
// are correct, and the current API version expects `email_address`, not
// `email` (the older field name — Buttondown returns a field_renamed error
// if you send `email`).
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
      body: JSON.stringify({ email_address: email }),
    });

    if (bdRes.ok) {
      return res.status(200).json({ ok: true });
    }

    const errBody = await bdRes.json().catch(() => null);
    const detail = errBody && Array.isArray(errBody.detail) ? errBody.detail[0] : null;
    const alreadySubscribed = detail && /already|duplicate|exists/i.test(`${detail.code || ''} ${detail.detail || ''}`);
    if (alreadySubscribed) {
      return res.status(200).json({ ok: true, alreadySubscribed: true });
    }

    console.error('Buttondown API error', bdRes.status, errBody);
    // TEMPORARY (round 2) — same non-sensitive debug approach as before.
    return res.status(502).json({ ok: false, error: 'Signup failed — please try again.', debug: { status: bdRes.status, body: errBody } });
  } catch (err) {
    console.error('Buttondown request failed', err);
    return res.status(502).json({ ok: false, error: 'Signup failed — please try again.', debug: { message: err.message, name: err.name } });
  }
}
