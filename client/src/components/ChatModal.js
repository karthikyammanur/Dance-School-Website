import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about Sai Meghna Dance School. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual chat API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(userMessage.text),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble responding right now. Please try again later or contact us directly.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('class') || text.includes('lesson')) {
      return "We offer various classical dance classes including Bharatanatyam. Our classes are suitable for all age groups and skill levels. Would you like to know more about our class schedules or fees?";
    } else if (text.includes('price') || text.includes('fee') || text.includes('cost')) {
      return "Our class fees vary depending on the program and duration. Please contact us at our office or use the contact form for detailed pricing information.";
    } else if (text.includes('time') || text.includes('schedule')) {
      return "We have classes throughout the week with different time slots. Please visit our contact page or call us to discuss the schedule that works best for you.";
    } else if (text.includes('location') || text.includes('address')) {
      return "Our dance school is located in a convenient area. Please check our contact page for the exact address and directions.";
    } else if (text.includes('experience') || text.includes('beginner')) {
      return "We welcome students of all experience levels! Our instructors are experienced in teaching beginners as well as advanced students. No prior dance experience is required.";
    } else {
      return "Thank you for your question! For specific inquiries, please feel free to contact us through our contact form or call us directly. We're here to help you on your dance journey!";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Black translucent background with smooth fade */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal content with enhanced mobile responsiveness and animations */}
      <div className={`relative bg-white w-full h-full sm:h-[600px] sm:max-w-md sm:rounded-lg shadow-2xl flex flex-col transform transition-all duration-300 ease-out ${
        isOpen 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-full sm:translate-y-0 opacity-0 scale-95'
      }`}>        {/* Header with enhanced mobile styling */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-maroon text-white sm:rounded-t-lg">
          <h3 className="text-lg font-semibold">Chat with us</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200 active:scale-95"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Chat messages area with enhanced scrolling */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 ${
                  message.isBot
                    ? 'bg-white text-charcoal shadow-sm border hover:shadow-md'
                    : 'bg-maroon text-white transform hover:scale-[1.02]'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isBot ? 'text-gray-500' : 'text-red-100'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {/* Enhanced loading indicator */}
          {isLoading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-white text-charcoal shadow-sm border px-3 sm:px-4 py-2 rounded-lg max-w-[85%] sm:max-w-xs">
                <div className="flex space-x-1 items-center">
                  <span className="text-xs text-gray-500 mr-2">Typing</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced input area with better mobile UX */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white sm:rounded-b-lg">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className={`px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                !inputMessage.trim() || isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-maroon text-white hover:bg-red-800 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
