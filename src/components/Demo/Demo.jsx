import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Code, 
  Eye, 
  Download, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import './Demo.css';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [viewMode, setViewMode] = useState('desktop');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const demoExamples = [
    {
      title: "Dashboard de Analytics",
      input: "Crear un dashboard moderno con gráficos de ventas, métricas de usuario y una tabla de productos recientes",
      description: "Panel de control completo con widgets interactivos",
      tags: ["Dashboard", "Charts", "Analytics"],
      code: `<div className="dashboard">
  <div className="metrics-grid">
    <div className="metric-card">
      <h3>Ventas Totales</h3>
      <span className="metric-value">$45,280</span>
    </div>
    <div className="chart-container">
      <canvas id="salesChart"></canvas>
    </div>
  </div>
</div>`,
      preview: {
        desktop: "dashboard-desktop.jpg",
        tablet: "dashboard-tablet.jpg",
        mobile: "dashboard-mobile.jpg"
      }
    },
    {
      title: "Landing Page de Producto",
      input: "Diseñar una landing page elegante para una app móvil con hero section, características y testimonios",
      description: "Página de destino optimizada para conversión",
      tags: ["Landing", "Product", "Mobile App"],
      code: `<section className="hero">
  <div className="hero-content">
    <h1>Revoluciona tu Productividad</h1>
    <p>La app que transforma tu forma de trabajar</p>
    <button className="cta-button">Descargar Gratis</button>
  </div>
  <div className="hero-image">
    <img src="app-mockup.png" alt="App" />
  </div>
</section>`,
      preview: {
        desktop: "landing-desktop.jpg",
        tablet: "landing-tablet.jpg",
        mobile: "landing-mobile.jpg"
      }
    },
    {
      title: "E-commerce Checkout",
      input: "Crear un formulario de checkout minimalista con resumen de pedido, información de envío y métodos de pago",
      description: "Proceso de compra optimizado y seguro",
      tags: ["E-commerce", "Checkout", "Forms"],
      code: `<div className="checkout-container">
  <div className="order-summary">
    <h2>Resumen del Pedido</h2>
    <div className="order-items">
      <!-- Items del carrito -->
    </div>
  </div>
  <div className="checkout-form">
    <form className="payment-form">
      <!-- Formulario de pago -->
    </form>
  </div>
</div>`,
      preview: {
        desktop: "checkout-desktop.jpg",
        tablet: "checkout-tablet.jpg",
        mobile: "checkout-mobile.jpg"
      }
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(demoExamples[activeDemo].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentDemo = demoExamples[activeDemo];

  return (
    <section className="demo" id="demo">
      <div className="container">
        <motion.div 
          className="demo-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="demo-title">
            Ve <span className="text-golden">AuraUI</span> en acción
          </h2>
          <p className="demo-subtitle">
            Explora ejemplos reales de interfaces generadas con inteligencia artificial. 
            Desde dashboards complejos hasta landing pages elegantes.
          </p>
        </motion.div>

        <div className="demo-content">
          {/* Demo Navigation */}
          <motion.div 
            className="demo-nav"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {demoExamples.map((demo, index) => (
              <button
                key={index}
                className={`demo-nav-item ${activeDemo === index ? 'active' : ''}`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="demo-nav-content">
                  <h4>{demo.title}</h4>
                  <p>{demo.description}</p>
                  <div className="demo-tags">
                    {demo.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="demo-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Demo Showcase */}
          <motion.div 
            className="demo-showcase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Input Section */}
            <div className="demo-input-section">
              <div className="input-header">
                <Sparkles size={20} />
                <h3>Descripción de Entrada</h3>
              </div>
              <div className="input-content">
                <p>"{currentDemo.input}"</p>
              </div>
              <button 
                className="generate-btn"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <div className="spinner"></div>
                    Generando...
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    Generar Interfaz
                  </>
                )}
              </button>
            </div>

            {/* Output Section */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeDemo}
                className="demo-output-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* View Mode Toggle */}
                <div className="view-mode-toggle">
                  <button 
                    className={`view-btn ${viewMode === 'desktop' ? 'active' : ''}`}
                    onClick={() => setViewMode('desktop')}
                  >
                    <Monitor size={16} />
                    Desktop
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'tablet' ? 'active' : ''}`}
                    onClick={() => setViewMode('tablet')}
                  >
                    <Tablet size={16} />
                    Tablet
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'mobile' ? 'active' : ''}`}
                    onClick={() => setViewMode('mobile')}
                  >
                    <Smartphone size={16} />
                    Mobile
                  </button>
                </div>

                {/* Preview */}
                <div className={`demo-preview ${viewMode}`}>
                  <div className="preview-header">
                    <div className="preview-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="preview-url">auraui.com/preview</div>
                    <div className="preview-actions">
                      <button className="preview-action">
                        <Eye size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="preview-content">
                    <div className="preview-placeholder">
                      <div className="placeholder-header">
                        <div className="placeholder-title"></div>
                        <div className="placeholder-subtitle"></div>
                      </div>
                      <div className="placeholder-body">
                        <div className="placeholder-card"></div>
                        <div className="placeholder-card"></div>
                        <div className="placeholder-card"></div>
                      </div>
                      <div className="placeholder-footer">
                        <div className="placeholder-button"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Section */}
                <div className="demo-code-section">
                  <div className="code-header">
                    <div className="code-tabs">
                      <button className="code-tab active">
                        <Code size={16} />
                        React
                      </button>
                    </div>
                    <div className="code-actions">
                      <button 
                        className="code-action"
                        onClick={handleCopy}
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        {copied ? 'Copiado' : 'Copiar'}
                      </button>
                      <button className="code-action">
                        <Download size={16} />
                        Descargar
                      </button>
                    </div>
                  </div>
                  <div className="code-content">
                    <pre>
                      <code>{currentDemo.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="demo-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿Listo para crear tu propia interfaz?</h3>
          <p>Prueba AuraUI gratis y descubre el poder de la generación de UI con IA</p>
          <button className="btn btn-primary">
            Comenzar Ahora
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;