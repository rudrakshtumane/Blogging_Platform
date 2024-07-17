const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');


const app = express();
const port = 7000;  

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', apiRoutes)

// database connection
mongoose.connect("mongodb://localhost:27017/BLOGGING_PLATFORM");  

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
});


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})  