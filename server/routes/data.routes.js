const router = require('express').Router();
const ChatLog = require('../models/chatLog.model');

// --- Chat Logging and History Routes ---

// POST route to log a new chat interaction
router.post('/log-chat', async (req, res) => {
    try {
        const { session_id, userInput, apiResponse, sourceApi } = req.body;

        if (!session_id || !userInput || !apiResponse) {
            return res.status(400).json({ message: 'Missing required chat data.' });
        }

        const newLog = new ChatLog({
            session_id,
            userInput,
            apiResponse,
            sourceApi,
        });

        await newLog.save();
        res.status(201).json({ message: 'Chat interaction logged successfully.' });

    } catch (error) {
        res.status(500).json({ message: 'Error logging chat interaction', error });
    }
});

// GET route to fetch a list of unique chat session IDs for the history panel
router.get('/chat-sessions', async (req, res) => {
    try {
        const sessions = await ChatLog.aggregate([
            { $sort: { createdAt: -1 } },
            { 
                $group: { 
                    _id: "$session_id",
                    lastMessage: { $first: "$userInput" },
                    createdAt: { $first: "$createdAt" }
                } 
            },
            { $sort: { createdAt: -1 } }
        ]);
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chat sessions', error });
    }
});

// GET route to fetch all messages for a specific session ID
router.get('/chat-history/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        const messages = await ChatLog.find({ session_id: sessionId }).sort({ createdAt: 'asc' });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chat history', error });
    }
});

module.exports = router;