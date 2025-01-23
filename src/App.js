// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/App.css";
import './styles/ChatBox.css';
import { ModelPreloader } from './components/ModelPreloader';
import CareersPage from './components/CareersPage';
import ChatBox from "./components/ChatBox";


// Layout component to handle the Hero section visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHomePage && <Hero />}
      {children}
      <div className="content-container">
        {children}
      </div><ChatBox />  
      <Footer />
    </>
  );
};

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Home />
          } 
        />
        <Route 
          path="/services" 
          element={
            <Services />
          } 
        />
        <Route 
          path="/projects" 
          element={
            <Projects />
          } 
        />
        <Route 
          path="/about" 
          element={
            <About />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Contact />
          } 
        />
        <Route 
          path="/careers" 
          element={
            <CareersPage />
          } 
        />
        
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <AnimatedRoutes />
        </Layout>
        <ModelPreloader />
      
      </div>
    </Router>
  );
}

export default App;
