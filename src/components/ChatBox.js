import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaComments, FaTimes, FaPaperPlane, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaQuestionCircle, FaCheck 
} from 'react-icons/fa';
import '../styles/ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hello! I'm Daniya from Guardian Enviro Private Limited. How can I help you with your environmental solutions today?", 
      sender: 'bot', 
      id: 1 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const responseDatabase = {
    greeting: {
      keywords: ['hi', 'hello', 'hey', 'sup', 'greetings'],
      responses: [
        "👋 Hi there! I'm Thanush from Guardian Enviro Private Limited. What environmental challenge can I help you solve today?",
        "Hello! Welcome to Guardian Enviro Private Limited. I'm ready to discuss any environmental solutions you might need.",
        "Greetings! Our team is passionate about sustainable environmental practices. How can I assist you?"
      ]
    },
    services: {
      keywords: ['services', 'what do you do', 'solutions', 'help'],
      responses: [
        "🌍 **Our Comprehensive Environmental Solutions**:\n\n• Industrial Wastewater Treatment\n• Common Effluent Treatment Plants (CETP)\n• Effluent Treatment Plants (ETP)\n• Air Pollution Control\n• Solid Waste Management\n• Environmental Consulting\n\nWhich area are you most interested in?",
        "💡 Guardian Enviro specializes in cutting-edge environmental solutions. From water treatment to pollution control, we've got you covered. What specific environmental challenge are you facing?"
      ]
    },
    contact: {
      keywords: ['contact', 'reach out', 'phone', 'email', 'address'],
      responses: [
        "📞 **Contact Guardian Enviro**\n\n• **Phone**: +91 9980993104 (Sarah)\n• **Company Email**: info@guardianenviro.com\n• **Address**: No 13 St Johns Church Road, Frazer Town, Bangalore 560005\n• **Working Hours**: Monday-Friday, 9:00 AM - 6:30 PM IST\n\nFeel free to reach out anytime! We're here to help.",
        "🤝 **Let's Connect!**\n\nReady to discuss your environmental needs?\n• Call us: +91 9980993104\n• Email: solutions@guardianenviro.com\n\nOur expert team is standing by to provide personalized solutions."
      ]
    },
    cetp: {
      keywords: ['cetp', 'common effluent', 'treatment plant', 'industrial park'],
      responses: [
        "🏭 **CETP Solutions Tailored for Your Industrial Cluster**\n\n• Custom design for 1-50 MLD capacity\n• Advanced biological treatment technologies\n• Real-time environmental monitoring\n• Full compliance with CPCB/SPCB regulations\n\nWant to optimize your industrial environmental management?",
        "💧 Our Common Effluent Treatment Plants are engineered to transform industrial wastewater challenges into sustainable solutions. Interested in a comprehensive consultation?"
      ]
    },
    etp: {
      keywords: ['etp', 'effluent', 'industrial waste', 'wastewater'],
      responses: [
        "💧 **Effluent Treatment Plant Solutions**\n\n• Customized industrial waste management\n• Advanced treatment processes\n• Zero Liquid Discharge technologies\n• Water recycling systems\n\nReady to discuss your specific ETP needs?",
        "🌊 Transform your industrial wastewater with our cutting-edge ETP solutions. Sustainable, efficient, compliant."
      ]
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    for (const category in responseDatabase) {
      const matchedKeywords = responseDatabase[category].keywords.filter(keyword => 
        message.includes(keyword)
      );
      
      if (matchedKeywords.length > 0) {
        const responses = responseDatabase[category].responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    const defaultResponses = [
      "🤔 I'm listening! Could you tell me more about your environmental needs?\n\n• Water Treatment\n• Pollution Control\n• Waste Management\n• Compliance Solutions",
      "I'd love to help! Which environmental solution intrigues you most today?",
      "Guardian Enviro is here to transform environmental challenges into opportunities. What's on your mind?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

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

      setTimeout(() => {
        const botResponse = {
          text: getBotResponse(userMessage.text),
          sender: 'bot',
          id: Date.now() + 1
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
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
                    <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
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