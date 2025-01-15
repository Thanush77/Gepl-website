import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import '../styles/ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hello! Welcome to Guardian Enviro. I'm your environmental solutions expert. How can I assist you today?", 
      sender: 'bot', 
      id: 1 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Enhanced response database with environmental focus
  const responseDatabase = {
    services: {
      keywords: ['services', 'offer', 'provide', 'help'],
      response: "💼 **Our Services**:\n\n• **Industrial Wastewater Treatment**\n• **Common Effluent Treatment Plants (CETP)**\n• **Effluent Treatment Plants (ETP)**\n• **Environmental Consulting**\n• **Air Pollution Control**\n• **Solid Waste Management**\n• **Environmental Auditing**\n\nWould you like specific details about any of these services?"
    },
    contact: {
      keywords: ['contact', 'reach', 'call', 'email', 'phone'],
      response: "📞 **Contact Us**:\n\n• **Phone**: +91 9980993104\n• **Email**: thanushdinesh07@gmail.com\n• **Address**: No 13 St Johns Church Road, Frazer town, Bangalore 560005\n• **Working Hours**: Monday-Friday, 9:00 AM - 6:00 PM IST"
    },
    cetp: {
      keywords: ['cetp', 'common effluent', 'treatment plant', 'industrial park'],
      response: "🏭 **Common Effluent Treatment Plant (CETP) Solutions**:\n\n• Design and implementation of CETPs for industrial clusters\n• Treatment capacity from 1 MLD to 50 MLD\n• Advanced treatment technologies including biological treatment\n• Real-time monitoring and control systems\n• Compliance with CPCB/SPCB norms\n• Operation and maintenance services\n\nOur CETP solutions help industrial clusters meet environmental regulations while optimizing operational costs."
    },
    etp: {
      keywords: ['etp', 'effluent', 'industrial waste', 'wastewater'],
      response: "💧 **Effluent Treatment Plant (ETP) Expertise**:\n\n• Customized ETP design for various industries\n• Advanced treatment processes including:\n  - Primary treatment\n  - Secondary biological treatment\n  - Tertiary treatment\n• Zero Liquid Discharge (ZLD) solutions\n• Water recycling and reuse systems\n• Automated control systems\n• Regular maintenance and optimization services"
    },
    environmental: {
      keywords: ['environment', 'pollution', 'sustainable', 'green', 'eco'],
      response: "🌱 **Environmental Solutions**:\n\n• Environmental Impact Assessment (EIA)\n• Air quality monitoring and control\n• Noise pollution management\n• Solid waste management\n• Hazardous waste handling\n• Green building consultation\n• Biodiversity conservation\n• Carbon footprint reduction strategies"
    },
    company: {
      keywords: ['company', 'about', 'background', 'experience'],
      response: "🏢 **About Guardian Enviro**:\n\n• 15+ years of experience in environmental solutions\n• ISO 9001:2015 certified company\n• Team of qualified environmental engineers and scientists\n• Successfully completed 500+ projects\n• State-of-the-art laboratory facilities\n• Strong focus on R&D and innovation\n• Pan-India presence with international projects"
    },
    compliance: {
      keywords: ['compliance', 'regulations', 'standards', 'norms', 'legal'],
      response: "📋 **Environmental Compliance Services**:\n\n• Expert guidance on environmental regulations\n• Assistance with statutory approvals\n• Regular compliance audits\n• Documentation and reporting\n• Liaison with regulatory authorities\n• Training programs on environmental compliance\n• Updates on regulatory changes"
    },
    technology: {
      keywords: ['technology', 'innovation', 'advanced', 'modern', 'system'],
      response: "🔬 **Our Technologies**:\n\n• Advanced biological treatment systems\n• Membrane filtration (MBR, UF, RO)\n• MBBR/MBBR-MBR hybrid systems\n• Online monitoring systems\n• IoT-based process control\n• Energy-efficient designs\n• Resource recovery solutions"
    },
    maintenance: {
      keywords: ['maintenance', 'service', 'support', 'operation', 'amc'],
      response: "🛠️ **Maintenance Services**:\n\n• 24/7 technical support\n• Preventive maintenance programs\n• Emergency breakdown service\n• Performance optimization\n• Operator training\n• Spare parts management\n• Regular system audits"
    }
  };

  // Enhanced bot response function with better context handling
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check each category for matching keywords
    for (const category in responseDatabase) {
      const matchedKeyword = responseDatabase[category].keywords.find(keyword => 
        message.includes(keyword)
      );
      
      if (matchedKeyword) {
        return responseDatabase[category].response;
      }
    }

    // Enhanced default response with environmental focus
    return "🤔 I'd be happy to help you with environmental solutions. Could you please specify your interest in:\n\n1️⃣ **Water Treatment (ETP/CETP)**\n2️⃣ **Environmental Compliance**\n3️⃣ **Pollution Control**\n4️⃣ **Waste Management**\n5️⃣ **Company Information**";
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
              <h3>💬 Environmental Solutions Expert</h3>
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