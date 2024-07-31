const nodemailer = require("nodemailer");
require("dotenv").config({path: "*.env"});


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendEmails= async (users = []) => {
  // send mail with defined transport object

  for (const user of users) {
    let mailInfo = {
      from: '"Josemaria 👻" <josemariaodumodu@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "Happy Birthday!", // Subject line
      text: `Dear ${user.username}, \n\nHappy Birthday to you! Wishes of llnp. Have a blast day!\n\nBest Regards, \n `, // plain text body
      html: `<b>Happy Birthday, ${user.username}!</b>`,
    };
    try {
      await transporter.sendMail(mailInfo);
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Re-throw error to handle it in the calling function
    }
  }
};

module.exports = sendEmails;
