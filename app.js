// app.js 

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const subscriberRoutes = require('./routes/sub.js');
const newsletterRoutes = require('./routes/newsletter.js');
const connectDB = require('./config/connectDB.js');



// connect to DataBase
connectDB()




const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // to help get the post request from the index.ejs
app.use(express.json());
app.use(bodyParser.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', __dirname + '/views');


app.use('/', subscriberRoutes);
app.use('/newsletter', newsletterRoutes);



app.all("*", (req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

mongoose.connection.once('open', () => {
    try {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => { console.log(`listening for request on ${PORT}`) });

    } catch (error) {
        console.log("Can not connect to MongoDB ", error);
    }
}); 
