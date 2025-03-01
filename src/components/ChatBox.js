import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaComments, FaTimes, FaPaperPlane, FaPhone, FaEnvelope,
  FaLinkedin, FaGlobe
} from 'react-icons/fa';
import '../styles/ChatBox.css';

// Predefined responses based on keywords
const responses = {
  waste: {
    management: "We offer comprehensive waste management solutions including collection, segregation, and disposal. Our services comply with all environmental regulations and we can help create a customized waste management plan for your business.",
    recycling: "Our recycling programs help businesses reduce waste and improve sustainability. We handle various types of waste including industrial, chemical, and electronic waste, ensuring proper recycling and disposal methods.",
    collection: "We provide regular waste collection services with flexible scheduling options. Our team can handle various volumes and types of waste, ensuring proper disposal and documentation.",
    audit: "Our waste audit service helps identify areas for improvement in your waste management process. We analyze your current waste streams and provide recommendations for reduction and better management."
  },
  water: {
    treatment: "We specialize in industrial wastewater treatment solutions. Our systems are designed to handle various types of industrial effluents, ensuring compliance with environmental standards.",
    effluent: "Our Effluent Treatment Plants (ETP) and Common Effluent Treatment Plants (CETP) are designed to effectively treat industrial wastewater. We provide both installation and maintenance services.",
    rainwater: "We design and implement rainwater harvesting systems that help conserve water and reduce dependency on municipal water supply. Our solutions are customized to your facility's requirements."
  },
  air: {
    pollution: "Our air pollution control systems help businesses maintain air quality standards. We provide solutions for emission control, dust collection, and air quality monitoring.",
    quality: "We offer comprehensive air quality management solutions including monitoring, filtration systems, and emission control technologies."
  },
  carbon: {
    footprint: "We help businesses reduce their carbon footprint through energy-efficient solutions and sustainable practices. Our team can conduct carbon footprint assessments and provide reduction strategies.",
    reduction: "Our carbon reduction strategies include energy efficiency improvements, waste reduction, and implementation of renewable energy solutions.",
    renewable: "We can help you transition to renewable energy sources and implement energy-efficient systems to reduce your carbon emissions."
  },
  default: {
    greeting: "👋 Hi there! I'm Sarah, your Environmental Solutions Specialist at Guardian Enviro. I'd love to help you create a more sustainable future for your business. What brings you here today?",
    general: "We offer comprehensive environmental solutions including waste management, water treatment, air pollution control, and sustainability consulting. How can we help your business today?",
    contact: "Would you like to discuss your specific requirements with our team? You can reach us at +91 9980993104 or email us at solutions@guardianenviro.com"
  }
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: responses.default.greeting, 
      sender: 'bot', 
      id: 1,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Tell me about your waste management needs",
    "What environmental challenges is your business facing?",
    "I'd like to learn about sustainable solutions",
    "How can you help reduce our carbon footprint?"
  ]);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (text) => {
    const typingDuration = Math.min(text.length * 30, 2000);
    return new Promise(resolve => {
      setIsTyping(true);
      typingTimeoutRef.current = setTimeout(() => {
        resolve();
      }, typingDuration);
    });
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    let response = '';

    // Check for specific keywords and generate appropriate responses
    if (message.includes('waste')) {
      if (message.includes('management')) response = responses.waste.management;
      else if (message.includes('recycling')) response = responses.waste.recycling;
      else if (message.includes('collection')) response = responses.waste.collection;
      else if (message.includes('audit')) response = responses.waste.audit;
      else response = responses.waste.management;
    }
    else if (message.includes('water') || message.includes('effluent')) {
      if (message.includes('treatment')) response = responses.water.treatment;
      else if (message.includes('effluent')) response = responses.water.effluent;
      else if (message.includes('rain')) response = responses.water.rainwater;
      else response = responses.water.treatment;
    }
    else if (message.includes('air')) {
      if (message.includes('pollution')) response = responses.air.pollution;
      else if (message.includes('quality')) response = responses.air.quality;
      else response = responses.air.pollution;
    }
    else if (message.includes('carbon')) {
      if (message.includes('footprint')) response = responses.carbon.footprint;
      else if (message.includes('reduction')) response = responses.carbon.reduction;
      else if (message.includes('renewable')) response = responses.carbon.renewable;
      else response = responses.carbon.footprint;
    }
    else {
      response = responses.default.general + "\n\n" + responses.default.contact;
    }

    return response;
  };

  const updateSuggestions = (lastResponse) => {
    const lowercaseResponse = lastResponse.toLowerCase();
    if (lowercaseResponse.includes('waste')) {
      setSuggestions([
        "What types of waste do you handle?",
        "Tell me about recycling options",
        "What are your waste collection frequencies?",
        "Do you offer waste audits?"
      ]);
    } else if (lowercaseResponse.includes('water') || lowercaseResponse.includes('effluent')) {
      setSuggestions([
        "Tell me about your water treatment process",
        "What types of effluents can you handle?",
        "Do you provide maintenance services?",
        "What about rainwater harvesting?"
      ]);
    } else if (lowercaseResponse.includes('carbon')) {
      setSuggestions([
        "How do you measure carbon footprint?",
        "What are your carbon reduction strategies?",
        "Tell me about renewable energy options",
        "What are the costs involved?"
      ]);
    } else {
      setSuggestions([
        "Tell me about your waste management needs",
        "What environmental challenges is your business facing?",
        "I'd like to learn about sustainable solutions",
        "How can you help reduce our carbon footprint?"
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        text: newMessage,
        sender: 'user',
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);

      try {
        // Generate response based on user message
        const response = generateResponse(userMessage.text);
        
        // Simulate typing
        await simulateTyping(response);
        
        const botResponse = {
          text: response,
          sender: 'bot',
          id: Date.now() + 1,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, botResponse]);
        updateSuggestions(response);
      } catch (error) {
        console.error('Chat Error:', error);
        const errorResponse = {
          text: "I apologize, but I'm having trouble processing your request. Please feel free to reach out to us directly at +91 9980993104 or email us at solutions@guardianenviro.com",
          sender: 'bot',
          id: Date.now() + 1,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  // Add quick responses component
  const QuickResponses = () => (
    <div className="quick-responses">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => {
            setNewMessage(suggestion);
            inputRef.current.focus();
          }}
          className="suggestion-btn"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );

  // Enhanced header component
  const Header = () => (
    <div className="chat-header">
      <div className="header-content">
        <h3>💬 Sarah | Guardian Enviro Private Limited</h3>
        <div className="contact-quick-info">
          <a href="tel:+919980993104" className="contact-link">
            <FaPhone /> +91 9980993104
          </a>
          <a href="mailto:solutions@guardianenviro.com" className="contact-link">
            <FaEnvelope /> solutions@guardianenviro.com
          </a>
          <a href="https://guardianenviro.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGlobe /> Visit Our Website
          </a>
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
  );

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
            <Header />
            

            <div className="chat-messages">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-content">
                    {message.text.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <span className="message-time">{message.time}</span>
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

            <QuickResponses />

            <form onSubmit={handleSubmit} className="chat-input-container">
              <input
                ref={inputRef}
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
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