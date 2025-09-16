const router = require('express').Router();
const axios = require('axios');

// This route handles all chat/diagnosis requests from your frontend.
router.post('/diagnose', async (req, res) => {
    try {
        // It expects a single "message" from the user.
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ message: 'A message is required.' });
        }

        // This object constructs the request for the AI Doctor API.
        const options = {
            method: 'POST',
            url: 'https://ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com/chat',
            params: { noqueue: '1' },
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Securely uses your key from the .env file
                'X-RapidAPI-Host': 'ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com'
            },
            data: {
                message: message,
                specialization: 'general', // You can customize this later if needed
                language: 'en'
            }
        };
        
        // The server makes the request to RapidAPI.
        const response = await axios.request(options);
        
        // It sends the full, detailed "result" object back to your frontend.
        res.json(response.data.result);

    } catch (error) {
        // Handles any errors that occur during the API call.
        console.error("Error in diagnosis route:", error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error fetching diagnosis from external API' });
    }
});

module.exports = router;