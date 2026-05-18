export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const response = await fetch('https://api.kit.com/v4/forms/9454398/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KIT_API_KEY}`
      },
      body: JSON.stringify({
        email_address: email,
        fields: {
          first_name: name || ''
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Kit API error:', err);
      return res.status(500).json({ error: 'Failed to subscribe' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
