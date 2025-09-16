// This is the initial message the chatbot will display.
export const initialAiMessage = {
  id: 1,
  sender: 'ai',
  text: "Hello! I'm your AI health assistant. Your conversation here is saved, so you can close this page and come back later. Describe what you're experiencing, and I'll provide preliminary insights."
};

// This function contains the chatbot's "brain" and decides how to respond.
export const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Keyword-based responses
    if (input.includes('headache')) {
      return "For headaches, it's important to note the location and type of pain. Common causes include tension, dehydration, or migraines. Ensure you're well-hydrated and have rested. If the headache is severe or persistent, please consult a doctor.";
    }
    if (input.includes('fever') || input.includes('temperature')) {
      return "A fever is a common sign of infection. Rest and plenty of fluids are key. You can monitor your temperature and take over-the-counter fever reducers if you're uncomfortable. Seek medical advice if it's very high or lasts more than a few days.";
    }
    if (input.includes('fatigue') || input.includes('tired')) {
        return "Fatigue can be caused by many factors, including lack of sleep, stress, or poor diet. Ensure you are getting 7-9 hours of quality sleep. If the fatigue is chronic and affects your daily life, it would be wise to speak with a healthcare professional.";
    }
    if (input.includes('hello') || input.includes('hi')) {
        return "Hello there! How can I help you today?";
    }
    if (input.includes('thank')) {
        return "You're welcome! Feel free to ask if anything else comes to mind. Take care!";
    }

    // Default fallback response
    return "I see. Can you provide more details about your symptoms? The more specific you are, the better I can assist you. For example, mention when the symptom started and its intensity.";
};