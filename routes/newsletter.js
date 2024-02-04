// routes/newsletter.js
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
const { sendNewsletter } = require('../utils/email');



router.get('/send', (req, res) => {
    res.render('newsletter', { title: 'Express Page' });
});

router.post('/send', async (req, res) => {
    const { subject, message } = req.body;

    try {
        // Fetch all subscribers from the database
        const subscribers = await Subscriber.find();

        console.log(subscribers); 

        // Send newsletter to each subscriber
        for (const subscriber of subscribers) {
            await sendNewsletter(subscriber.email, subject, message);
        }

        res.status(200).json({ message: 'Newsletter sent successfully!' });
    } catch (error) {
        console.error('Error sending newsletter:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
