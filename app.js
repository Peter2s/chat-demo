const express = require('express');
const mongoose = require("mongoose");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const shortRoutes = require("./routs/messagesRoutes");

mongoose.connect('mongodb://127.0.0.1:27017/chat')
    .then(()=> {
        console.log("DB connected");
        app.listen(3000, () => console.log('listening on http://localhost:3000'));
    })
    .catch((error)=> console.log(`DB connection error ${error}`))

app.use(cors())
app.use(logger("dev"));
app.use(express.json());

app.use(shortRoutes);


