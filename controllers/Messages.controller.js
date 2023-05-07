require("mongoose");
const MessageModel = require("../models/Message");

exports.createMessage = async (req, res, next) =>{
    const {body} = req;
    const message = await MessageModel.create({content:body.content});
    res.json(message);
}

exports.getMessageShort = async (req, res, next) =>{
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
}

const subscribers = {};
exports.createMessageLong = async (req, res, next) =>{

}
exports.getMessageLong = async   (req, res, next) =>{
    const id = Math.ceil(Math.random() *1000);
    subscribers[id] = res;
}
