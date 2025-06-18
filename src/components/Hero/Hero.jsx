import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transforma texto en interfaz visual';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="hero-badge"
            variants={itemVariants}
          >
            <Sparkles size={16} />
            <span>Powered by AI</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            <span className="hero-title-main">AuraUI</span>
            <span className="hero-title-subtitle">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Convierte descripciones en texto en interfaces de usuario profesionales 
            y funcionales usando inteligencia artificial avanzada. Diseña, prototipa 
            y desarrolla más rápido que nunca.
          </motion.p>

          {/* Botones CTA */}
          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <button className="btn btn-primary btn-hero-primary">
              <span>Comenzar Gratis</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-hero-secondary">
              <span>Ver Demo</span>
            </button>
          </motion.div>

          {/* Estadísticas */}
          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Interfaces creadas</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Desarrolladores activos</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfacción</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Área de demostración visual */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="demo-container">
            <div className="demo-input">
              <div className="demo-header">
                <div className="demo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="demo-title">Input</span>
              </div>
              <div className="demo-content">
                <div className="input-line">
                  <Code size={16} />
                  <span>Crear un formulario de login elegante</span>
                </div>
                <div className="input-line">
                  <Code size={16} />
                  <span>con campos email y contraseña</span>
                </div>
                <div className="input-line">
                  <Code size={16} />
                  <span>y botón de envío dorado</span>
                </div>
              </div>
            </div>

            <motion.div 
              className="demo-arrow"
              variants={floatingVariants}
              animate="floating"
            >
              <Zap size={24} />
            </motion.div>

            <div className="demo-output">
              <div className="demo-header">
                <div className="demo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="demo-title">Output</span>
              </div>
              <div className="demo-content">
                <div className="ui-preview">
                  <div className="preview-form">
                    <div className="preview-field">
                      <label>Email</label>
                      <div className="preview-input"></div>
                    </div>
                    <div className="preview-field">
                      <label>Contraseña</label>
                      <div className="preview-input"></div>
                    </div>
                    <div className="preview-button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos flotantes decorativos */}
          <motion.div 
            className="floating-element floating-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Palette size={20} />
          </motion.div>

          <motion.div 
            className="floating-element floating-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Code size={18} />
          </motion.div>

          <motion.div 
            className="floating-element floating-3"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;