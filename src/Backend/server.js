const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../../build')));

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
});

const userRouter = require('./user');
app.use('/user', userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build', 'index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}`));