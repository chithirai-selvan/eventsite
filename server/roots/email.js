const express = require('express');
    const router = express.Router();
    const nodemailer = require('nodemailer');
    const dotenv = require('dotenv');
    dotenv.config();

    router.post('/send-email', (req, res) => {
        const { name, email, organization, type, eventTitle } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `RSVP Confirmation for ${eventTitle}`,
            text: `Hello ${name},\n\nYou have successfully RSVPed for ${eventTitle}.\n\nOrganization: ${organization}\nType: ${type}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ message: 'Email sent successfully' });
            }
        });
    });

    module.exports = router;