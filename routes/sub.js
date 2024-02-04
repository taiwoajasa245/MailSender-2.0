// routes/subscribers.js

const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
const { sendNewsletter } = require('../utils/email');


router.get('/', (req, res) => {
    res.render('./public/index.html');

});


router.post('/subscribe/', async (req, res) => {

    const { firstName, lastName, email } = req.body;

    console.log(req.body)


    try {

        // Check if the subscriber already exists
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ Error: 'Email is already subscribed.' });
        }


        const subscriber = new Subscriber({ firstName, lastName, email });
        await subscriber.save();

        // Send a welcome email
        await sendNewsletter(email,  'Welcome Message Tech Newsletter', `Thank ${ firstName}${lastName} you for subscribing to tech newsletter we are glad to have you onboard`);

        res.status(201).json({ message: 'Subscription successful!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.post("/api/:id", async (req, res) => {
    const Id = '9825209971hkf98214kjh';

    if (req.params.id !== Id)
        res.status(404).json({ error: 'Invalid User Id ' });

    const { id, firstName, lastName, email } = req.query;
    if (!id && !firstName && !lastName && !email)
        res.status(404).json({ error: 'Invalid Query' })
    

    try {

        // Check if the subscriber already exists
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ error: 'Email is already subscribed.' });
        }
            
        const subscriber = new Subscriber({ firstName, lastName, email });
        await subscriber.save();

        // Send a welcome email
        await sendNewsletter(email, 'Welcome to Our Newsletter', 'Thank you for subscribing!');

        res.status(201).json({ message: 'Subscription successful!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }


});




module.exports = router;
