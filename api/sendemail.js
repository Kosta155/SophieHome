// api/sendEmail.js
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

module.exports = async (req, res) => {
  const { from, to, subject, text } = req.body;

  const emailData = {
    Messages: [
      {
        From: { Email: from, Name: 'Sender Name' },
        To: [{ Email: to, Name: 'Recipient Name' }],
        Subject: subject,
        TextPart: text,
        HTMLPart: `<p>${text}</p>`,
      },
    ],
  };

  try {
    const response = await mailjet.post('send', { version: 'v6.0.6' }).request(emailData);
    if (response.body.Messages[0].Status === 'success') {
      res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};
