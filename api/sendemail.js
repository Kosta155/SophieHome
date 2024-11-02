console.log("Jam njesh");

import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
export default async function handler(req, res) {

  try {
    const { email, name, number, message } = req.body;
    const htmlContent = `
    <p>Here’s the information for the new customer</p>
    <ul>
        <li><h3>Email:</h3> ${email}</li>
        <li><h3>Name:</h3> ${name}</li>
        <li><h3>Phone Number:</h3> ${number}</li>
        <li><h3>Message:</h3> ${message}</li>
    </ul>
`;

    const request = await mailjetClient.post('send', { version: 'v3' }).request({
      "FromEmail": "kostikanini2004@gmail.com",
      "FromName": "Your Mailjet Pilot",
      "Recipients": [
        {
          "Email": "oladegafuwad7@gmail.com",
          "Name": name
        }
      ],
      "Subject": "Your email flight plan!",
      "Text-part": "Email: " + email + " Name:" + name + " Phone number:" + number + " Message" + message,  
      "Html-part": htmlContent
    });
    console.log("Mailjet response:", request.body);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Failed to send the email', error: err.message });
  }
};
