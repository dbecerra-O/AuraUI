import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Code, 
  Palette, 
  Smartphone, 
  Download, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Brain,
  Globe,
  Users,
  Shield,
  Clock,
  Layers,
  Monitor,
  Tablet
} from 'lucide-react';
import './ProductPage.css';

const ProductPage = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avanzada",
      description: "Algoritmos de última generación que comprenden el contexto y generan interfaces precisas desde descripciones naturales.",
      details: [
        "Procesamiento de lenguaje natural avanzado",
        "Comprensión contextual profunda", 
        "Generación de código optimizado",
        "Aprendizaje continuo del sistema"
      ],
      color: "#FFD700"
    },
    {
      icon: Zap,
      title: "Generación Instantánea",
      description: "Convierte descripciones de texto en interfaces completas en segundos, no horas. Acelera tu flujo de trabajo exponencialmente.",
      details: [
        "Respuesta en tiempo real",
        "Múltiples variaciones automáticas",
        "Preview instantáneo",
        "Iteración rápida de diseños"
      ],
      color: "#FF6B6B"
    },
    {
      icon: Code,
      title: "Código de Calidad Premium",
      description: "Genera código limpio, semántico y optimizado siguiendo las mejores prácticas de la industria y estándares modernos.",
      details: [
        "HTML5 semántico y accesible",
        "CSS moderno y eficiente",
        "JavaScript optimizado",
        "Componentes reutilizables"
      ],
      color: "#4ECDC4"
    },
    {
      icon: Palette,
      title: "Diseño Profesional",
      description: "Interfaces elegantes que siguen principios de UX/UI modernos y las tendencias actuales del diseño digital.",
      details: [
        "Sistema de colores coherente",
        "Tipografía profesional",
        "Espaciado y proporción perfecta",
        "Consistencia visual garantizada"
      ],
      color: "#45B7D1"
    },
    {
      icon: Smartphone,
      title: "Responsive por Defecto",
      description: "Todas las interfaces se adaptan automáticamente a cualquier dispositivo y resolución sin configuración adicional.",
      details: [
        "Mobile-first approach",
        "Breakpoints inteligentes",
        "Touch-friendly interfaces",
        "Cross-browser compatibility"
      ],
      color: "#96CEB4"
    },
    {
      icon: Layers,
      title: "Componentes Modulares",
      description: "Sistema de componentes reutilizables que mantiene consistencia y facilita el mantenimiento del código.",
      details: [
        "Biblioteca de componentes extensa",
        "Temas personalizables",
        "Estados y variaciones",
        "Documentación automática"
      ],
      color: "#FFEAA7"
    }
  ];

  const integrations = [
    { 
      name: "React", 
      logo: "⚛️", 
      description: "Componentes React listos para usar con hooks modernos",
      popularity: "95%"
    },
    { 
      name: "Vue.js", 
      logo: "💚", 
      description: "Componentes Vue con reactividad completa",
      popularity: "87%"
    },
    { 
      name: "Angular", 
      logo: "🅰️", 
      description: "Módulos Angular estructurados y TypeScript",
      popularity: "78%"
    },
    { 
      name: "Svelte", 
      logo: "🔥", 
      description: "Componentes Svelte ultra-optimizados",
      popularity: "72%"
    },
    { 
      name: "Figma", 
      logo: "🎨", 
      description: "Exportación directa a Figma con capas organizadas",
      popularity: "92%"
    },
    { 
      name: "Sketch", 
      logo: "💎", 
      description: "Archivos Sketch automáticos con símbolos",
      popularity: "68%"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Describe tu Visión",
      description: "Escribe en lenguaje natural lo que necesitas: 'Un dashboard de analytics con gráficos y métricas'"
    },
    {
      step: "02", 
      title: "IA Procesa",
      description: "Nuestros algoritmos analizan tu descripción y generan múltiples opciones de diseño"
    },
    {
      step: "03",
      title: "Personaliza",
      description: "Ajusta colores, tipografía, espaciado y componentes con herramientas visuales intuitivas"
    },
    {
      step: "04",
      title: "Exporta",
      description: "Descarga código limpio, assets optimizados y documentación completa"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Precisión de IA", icon: Brain },
    { number: "10x", label: "Más Rápido", icon: Zap },
    { number: "50+", label: "Frameworks", icon: Code },
    { number: "24/7", label: "Disponibilidad", icon: Clock }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <img 
                src="/aura.jpg" 
                alt="AuraUI" 
                className="hero-badge-logo"
              />
              <span>Powered by Advanced AI</span>
            </div>
            <h1>La Plataforma que Revoluciona el Desarrollo de UI</h1>
            <p>
              AuraUI combina inteligencia artificial de vanguardia con principios de diseño 
              profesional para crear interfaces extraordinarias desde descripciones simples. 
              Transforma ideas en código funcional en segundos.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                <Download size={18} />
                Probar Gratis
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">
                <Monitor size={18} />
                Ver Demo en Vivo
              </button>
            </div>
            
            {/* Hero Stats */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="hero-stat"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="stat-icon">
                    <stat.icon size={20} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="product-workflow py-4xl">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Cómo Funciona AuraUI</h2>
            <p>Un proceso simple y poderoso que convierte ideas en interfaces profesionales</p>
          </motion.div>

          <div className="workflow-steps">
            {workflowSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="workflow-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features py-4xl">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Características que Marcan la Diferencia</h2>
            <p>Descubre las funcionalidades avanzadas que hacen de AuraUI la herramienta preferida por desarrolladores profesionales en todo el mundo.</p>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="feature-icon"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    size={32} 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <CheckCircle size={16} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="product-integrations py-4xl">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Integra con tus Herramientas Favoritas</h2>
            <p>AuraUI se conecta perfectamente con el ecosistema de desarrollo moderno y las herramientas que ya usas.</p>
          </motion.div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <motion.div 
                key={index}
                className="integration-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="integration-header">
                  <div className="integration-logo">{integration.logo}</div>
                  <div className="integration-popularity">
                    {integration.popularity} adopción
                  </div>
                </div>
                <h4>{integration.name}</h4>
                <p>{integration.description}</p>
                <div className="integration-actions">
                  <button className="btn btn-ghost">
                    Ver Docs
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta py-4xl">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-header">
              <h2>¿Listo para Acelerar tu Desarrollo?</h2>
              <p>
                Únete a más de 50,000 desarrolladores que ya están creando interfaces 
                increíbles con la velocidad y precisión de la inteligencia artificial.
              </p>
            </div>
            
            <div className="cta-benefits">
              <div className="benefit">
                <Users size={24} />
                <span>50K+ desarrolladores confían en nosotros</span>
              </div>
              <div className="benefit">
                <Shield size={24} />
                <span>Garantía de devolución de 30 días</span>
              </div>
              <div className="benefit">
                <Globe size={24} />
                <span>Soporte 24/7 en múltiples idiomas</span>
              </div>
            </div>

            <div className="cta-actions">
              <button className="btn btn-primary">
                <Download size={18} />
                Comenzar Gratis Ahora
              </button>
              <button className="btn btn-ghost">
                <Cloud size={18} />
                Ver Planes y Precios
              </button>
            </div>

            <p className="cta-note">
              Sin tarjeta de crédito requerida. Cancela en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;