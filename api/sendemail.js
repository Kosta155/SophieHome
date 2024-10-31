console.log("Jam njesh");

import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
export default async function handler(req, res) {

  try {
    const request = await mailjet.get('ping').request();
    console.log("Mailjet response:", request.body);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Failed to send the email', error: err.message });
  }
};
