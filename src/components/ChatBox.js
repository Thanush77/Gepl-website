import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaComments, FaTimes, FaPaperPlane, FaPhone, FaEnvelope
} from 'react-icons/fa';
import generateGeminiResponse from './gemini-api-util';
import '../styles/ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hello! I'm Sarah from Guardian Enviro Private Limited. How can I help you with your environmental solutions today?", 
      sender: 'bot', 
      id: 1 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        text: newMessage,
        sender: 'user',
        id: Date.now()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);

      try {
        // Get AI response using Gemini
        const aiResponse = await generateGeminiResponse([...messages, userMessage]);
        
        const botResponse = {
          text: aiResponse,
          sender: 'bot',
          id: Date.now() + 1
        };
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Chat Error:', error);
        const errorResponse = {
          text: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at +91 9980993104.",
          sender: 'bot',
          id: Date.now() + 1
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <>
      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-container"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="chat-header">
              <div className="header-content">
                <h3>💬 Sarah | Guardian Enviro Private Limited</h3>
                <div className="contact-quick-info">
                  <span><FaPhone /> +91 9980993104</span>
                  <span><FaEnvelope /> solutions@guardianenviro.com</span>
                </div>
              </div>
              <motion.button
                className="close-button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            <div className="chat-messages">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  className="typing-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input-container">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Ask about our environmental solutions..."
                className="chat-input"
              />
              <motion.button
                type="submit"
                className="send-button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                disabled={isTyping}
              >
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;