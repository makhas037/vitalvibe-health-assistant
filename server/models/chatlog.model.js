const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatLogSchema = new Schema({
    // You could link this to a user ID in the future
    // userId: { type: Schema.Types.ObjectId, ref: 'User' },
    session_id: { type: String, required: true }, // To group conversations
    userInput: { type: String, required: true },
    apiResponse: { type: String, required: true },
    sourceApi: { type: String, default: 'NLM' } // To track which API was used
}, { timestamps: true });

const ChatLog = mongoose.model('ChatLog', chatLogSchema);

module.exports = ChatLog;