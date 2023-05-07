const express = require("express");
const router = express.Router();
const MessageModel = require("../models/Message");

router.post('/short/message', async function(req, res){
    const {body} = req;
    console.log(body)
    const message = await MessageModel.create({content:body.content});
    res.json(message);
});
router.get('/short/message', async function(req, res){
    const {query} = req;
    const firstTime = query.firstTime;
    console.log(query)
    let recentMessages;
    if (firstTime === "true") {
         recentMessages = await MessageModel.find();
    }else{
        const currentTime = new Date();
        const fiveSecondsAgo = new Date(currentTime.getTime() - 5000);
        console.log(fiveSecondsAgo);
         recentMessages = await MessageModel.find({ createdAt: { $gte: fiveSecondsAgo} });
    }
    console.log(recentMessages)
    res.json(recentMessages);
});
module.exports = router;
