import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const InfoCards = () => {
  const cards = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '91 9845669840'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@guardianenviro.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Sy #13, Challaghatta Village near BMTC Bus Depot kumbalagodu Bangalore Karnataka India 560074'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Corporate office',
      content: 'No 13,Icon group Third floor Near Brathi Nagar Police Station St Johns Church road Bangalore Karnataka India 560005'
    }
  ];

  return (
    <div className="info-cards">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="info-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="card-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default InfoCards; 