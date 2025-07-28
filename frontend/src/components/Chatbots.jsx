import { useState, useEffect, useRef } from 'react';

const Chatbots = ({ onClose }) => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your ImpactLink assistant. How can I help you find volunteering opportunities today?", sender: 'bot' }
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const messageContainerRef = useRef(null);

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    const currentMessage = userMessage;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: currentMessage, sender: 'user' },
    ]);

    setUserMessage('');
    setIsBotTyping(true);

    // Simulate bot response for now (you can replace with actual API call)
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find volunteering opportunities! What type of work are you interested in?",
        "Great question! Let me search for relevant opportunities in your area.",
        "I found some amazing opportunities that match your interests. Would you like to know more?",
        "That's a wonderful cause! Here are some organizations that could use your help.",
        "I'm here to connect you with meaningful volunteer work. What skills would you like to contribute?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: randomResponse, sender: 'bot' },
      ]);
      setIsBotTyping(false);
    }, 1500);
  };

  const closeCampaignDetails = () => {
    setSelectedCampaign(null);
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Container */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold">ImpactLink Assistant</h3>
              <p className="text-xs text-white/80">Online • Ready to help</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Container */}
        <div 
          ref={messageContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user' 
                  ? 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-br-md' 
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200'
              }`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
          
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-200 px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Container */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent text-sm"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!userMessage.trim()}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-2 rounded-full hover:from-[#1e40af] hover:to-[#1e3a8a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedCampaign.campaignName}</h3>
              <button 
                onClick={closeCampaignDetails}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6">{selectedCampaign.description}</p>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-2 px-4 rounded-lg font-medium hover:from-[#1e40af] hover:to-[#1e3a8a] transition-all duration-300">
                Learn More
              </button>
              <button 
                onClick={closeCampaignDetails}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbots;
