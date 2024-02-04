// utils/email.js

const Email = process.env.EMAIL
const PASS = process.env.PASSWORD

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Email,
        pass: PASS,
    },
    tls: {
        rejectUnauthorized: false, // THIS IS NOT GOOD FOR PRODUCTION ONLY FOR DEVELOPMENT PURPOSE
    },
});

const sendNewsletter = (to, subject, text) => {
    const mailOptions = {
        from: Email,
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendNewsletter };
