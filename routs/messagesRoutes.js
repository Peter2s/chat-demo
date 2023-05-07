const express = require("express");
const router = express.Router();
const {getMessageShort,getMessageLong,createMessage,createMessageLong} = require("../controllers/Messages.controller")

router.post('/short/message',createMessage);
router.get('/short/message', getMessageShort);

router.post('/long/message',createMessageLong);
router.get('/long/message', getMessageLong)

module.exports = router;
