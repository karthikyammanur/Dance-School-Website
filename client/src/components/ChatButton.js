import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import ChatModal from './ChatModal';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Enhanced floating chat button with better mobile responsiveness */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-maroon text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-800 hover:shadow-xl transition-all duration-300 z-40 group transform hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:rotate-12" />
        
        {/* Enhanced tooltip with better positioning */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-charcoal text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg transform translate-y-1 group-hover:translate-y-0">
          Chat with us
          {/* Tooltip arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal"></div>
        </div>

        {/* Animated pulse ring */}
        <div className="absolute inset-0 rounded-full bg-maroon opacity-75 animate-ping"></div>
      </button>

      {/* Enhanced Chat Modal with better animations */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default ChatButton;
