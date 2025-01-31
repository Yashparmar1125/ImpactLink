import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatbot.css';

const Chatbots = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);  // Store selected campaign
  const messageContainerRef = useRef(null);

  // Toggle the chatbot visibility
  const toggleChatbot = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: 'user' },
    ]);

    setUserMessage('');
    setIsBotTyping(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage, user_id: "678d0547bc550274503b93eb" }),
      });

      const data = await response.json();
      const botMessage = data.response.message.message;
      const campaigns = data.response.message.data.campaigns;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: '...typing...', sender: 'bot', typing: true },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => prevMessages.filter((msg) => !msg.typing));

        if (campaigns && campaigns.length > 0) {
          const campaignCards = campaigns.map((campaign) => (
            <div
              key={campaign.campaignId}
              className="campaign-card"
              onClick={() => handleCampaignClick(campaign)}
            >
              <h5>{campaign.campaignName}</h5>
              <p>{campaign.description}</p>
            </div>
          ));

          setMessages((prevMessages) => [
            ...prevMessages,
            { text: `${botMessage}`, sender: 'bot' },
          ]);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: campaignCards, sender: 'bot' },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: botMessage, sender: 'bot' },
          ]);
        }

        setIsBotTyping(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);  // Set the selected campaign
  };

  const closeCampaignDetails = () => {
    setSelectedCampaign(null);  // Close the details view
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
    <>
      <div className="floating-button" onClick={toggleChatbot}>
        <span>💬</span>
      </div>

      {isChatVisible && (
        <div className="chatbot-container">
          {/* Circular Avatar */}
          {/* <img
            src="frontend/src/assets/Images/chatbotImg.jpg" // Replace with your image URL
            alt="Chatbot Avatar"
            className="chatbot-avatar"
          /> */}
          <div className="chatbot-header">Chatbot</div>
          <div className="message-container" ref={messageContainerRef}>
            {messages.map((message, index) => (
              <div key={index}>
                {typeof message.text === 'string' ? (
                  <p
                    className={
                      message.sender === 'bot'
                        ? message.typing
                          ? 'bot-typing'
                          : 'bot-message'
                        : 'user-message'
                    }
                  >
                    {message.text}
                  </p>
                ) : (
                  message.text
                )}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      {selectedCampaign && (
        <div className="campaign-details-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeCampaignDetails}>
              &times;
            </span>
            <h3>{selectedCampaign.campaignName}</h3>
            <p>{selectedCampaign.description}</p>
            {/* You can add more details about the campaign here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbots;
