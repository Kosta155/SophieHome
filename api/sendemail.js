console.log("I am here");
console.log("I am not here")
console.log("MAILJET_API_KEY:", process.env.MAILJET_API_KEY);
const mailjet = require('node-mailjet').connect('f018b2921153de876f2d19e2499a567b', '6b4d093d11c56cff23104d30a738cdf5');

module.exports = async (req, res) => {
  const { from, to, subject, text } = req.body;
  try {
    console.log("I am here inside the handler");
    const request = await mailjet.post('send', { version: 'v3.0' }).request({
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
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};
