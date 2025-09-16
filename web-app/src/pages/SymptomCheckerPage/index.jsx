import React, { useState, useEffect, useRef } from "react";
// We no longer need getHealthInfo
import { logChatInteraction, getChatSessions, getChatHistoryBySessionId } from "../../services/api.js";
import { fetchDiagnosis } from "../../services/symptomService.js";
import AIMessageContent from "../../components/Chatbot/AIMessageContent.jsx";
import "./SymptomCheckerPage.css";

const initialAiMessage = {
  id: 1,
  sender: "ai",
  data: { 
      response: { 
          message: "Hello! I am your AI Health Assistant. How can I help you today? Please describe your symptoms." 
      }
  },
};

const SymptomCheckerPage = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    return savedMessages ? JSON.parse(savedMessages) : [initialAiMessage];
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [sessionId, setSessionId] = useState(() => `session_${Date.now()}_${Math.random()}`);
  const [chatSessions, setChatSessions] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(true);
  const [activeSessionId, setActiveSessionId] = useState(sessionId);

  // All useEffect and helper functions (startNewChat, loadChatSession, etc.) remain the same
  useEffect(() => { getChatSessions().then((sessions) => setChatSessions(sessions)); }, []);
  useEffect(() => { if (sessionId === activeSessionId) { localStorage.setItem("chatHistory", JSON.stringify(messages)); } }, [messages, sessionId, activeSessionId]);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isLoading]);

  const handleSendMessage = async (messageText) => {
    const currentInput = messageText || inputValue;
    if (!currentInput.trim() || isLoading) return;

    const userMessage = { id: Date.now(), sender: "user", text: currentInput };
    setMessages((prev) => [...prev, userMessage]);
    
    if (!messageText) { setInputValue(""); }
    setIsLoading(true);

    // --- Simplified Logic: Always call the AI Doctor API ---
    const diagnosisResult = await fetchDiagnosis(currentInput);
    const aiResponseText = diagnosisResult.response?.message || "Sorry, an error occurred. Please try again.";
    
    const aiMessage = { id: Date.now() + 1, sender: "ai", data: diagnosisResult };
    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);

    await logChatInteraction({
      session_id: sessionId,
      userInput: currentInput,
      apiResponse: aiResponseText,
      sourceApi: "AI Doctor API",
    });

    getChatSessions().then((sessions) => setChatSessions(sessions));
  };

  const handleFollowUpClick = (followUpText) => {
    handleSendMessage(followUpText);
  };
  
  const startNewChat = () => {
    const newSessionId = `session_${Date.now()}_${Math.random()}`;
    setMessages([initialAiMessage]);
    setSessionId(newSessionId);
    setActiveSessionId(newSessionId);
    localStorage.removeItem("chatHistory");
  };

  const loadChatSession = async (sessionIdToLoad) => {
    setActiveSessionId(sessionIdToLoad);
    const historyLogs = await getChatHistoryBySessionId(sessionIdToLoad);
    // Simplified history loading since all messages are now rich objects
    const formattedMessages = historyLogs.map((log) => [
        { id: log.createdAt + "_user", sender: "user", text: log.userInput },
        { id: log.createdAt + "_ai", sender: "ai", data: { response: { message: log.apiResponse } } }
      ]).flat();
    setMessages(formattedMessages);
    setSessionId(sessionIdToLoad);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") { handleSendMessage(); }
  };

  return (
    <section id="ai-chat" className="content-section active">
       <div className="section-header">
         <div>
           <h1>AI Health Assistant</h1>
           <p>Powered by AI Doctor API</p>
         </div>
         <button className="btn btn--outline" onClick={() => setIsHistoryVisible(!isHistoryVisible)}>
           {isHistoryVisible ? "Hide History" : "Show History"}
         </button>
       </div>
       <div className="chat-layout-container">
         <div className="chat-container">
           <div className="chat-messages">
             {messages.map((msg) => (
               <div key={msg.id} className={`message ${msg.sender}-message`}>
                 {msg.sender === "ai" && <div className="message-avatar">🩺</div>}
                 <div className="message-content">
                   {msg.sender === 'ai' && msg.data ? (
                     <AIMessageContent data={msg.data} onFollowUpClick={handleFollowUpClick} />
                   ) : (
                     <p>{msg.text}</p>
                   )}
                 </div>
               </div>
             ))}
             {isLoading && (
               <div className="message ai-message">
                 <div className="message-avatar">🩺</div>
                 <div className="message-content typing-indicator">
                   <span></span><span></span><span></span>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
           </div>
           <div className="chat-input-container">
             <input
               type="text"
               className="form-control"
               placeholder="Describe your symptoms..."
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyPress={handleKeyPress}
               disabled={isLoading}
             />
             <button className="btn btn--primary" onClick={() => handleSendMessage()}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <line x1="22" y1="2" x2="11" y2="13"></line>
                 <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
               </svg>
             </button>
           </div>
         </div>
         {isHistoryVisible && (
          <div className="history-panel">
            {/* ... history panel JSX remains the same ... */}
          </div>
         )}
       </div>
    </section>
  );
};

export default SymptomCheckerPage;