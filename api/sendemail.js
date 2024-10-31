// api/sendEmail.js
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

module.exports = async (req, res) => {
  const { from, to, subject, text } = req.body;

  const emailData = {
    Messages: [
      {
        From: { Email: from, Name: 'Your Mailjet Pilot' },
        To: [{ Email: to, Name: 'Recipient' }],
        Subject: subject,
        TextPart: text,
        HTMLPart: `<h3>${text}</h3>`,
      },
    ],
  };

  try {
    console.log("I am here");
    const request = mailjet.post('send', { version: 'v3.1' }).request(emailData);
    const result = await request;
    console.log(result.body);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err.statusCode);
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};
