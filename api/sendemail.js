console.log("Jam njesh");

import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
export default async function handler(req, res) {

  try {
    const request = await mailjetClient.post('send', { version: 'v3' }).request({
      "FromEmail": "kostikanini2004@gmail.com",
      "FromName": "Your Mailjet Pilot",
      "Recipients": [
        {
          "Email": "kostikanini2004@gmail.com",
          "Name": "Passenger 1"
        }
      ],
      "Subject": "Your email flight plan!",
      "Text-part": "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
      "Html-part": "<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!"
    });
    console.log("Mailjet response:", request.body);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Failed to send the email', error: err.message });
  }
};
