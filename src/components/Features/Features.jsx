import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Palette, 
  Code, 
  Smartphone, 
  Globe, 
  Clock, 
  Shield,
  ArrowRight 
} from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Avanzada',
      description: 'Algoritmos de última generación que comprenden el contexto y generan interfaces precisas.',
      color: '#FFD700'
    },
    {
      icon: Zap,
      title: 'Generación Instantánea',
      description: 'De texto a interfaz en segundos. Acelera tu flujo de trabajo de diseño exponencialmente.',
      color: '#FF6B6B'
    },
    {
      icon: Palette,
      title: 'Diseño Profesional',
      description: 'Interfaces elegantes que siguen las mejores prácticas de UX/UI y tendencias actuales.',
      color: '#4ECDC4'
    },
    {
      icon: Code,
      title: 'Código Limpio',
      description: 'Genera código React, Vue o HTML semántico, optimizado y listo para producción.',
      color: '#45B7D1'
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Todas las interfaces se adaptan perfectamente a móvil, tablet y desktop automáticamente.',
      color: '#96CEB4'
    },
    {
      icon: Globe,
      title: 'Múltiples Frameworks',
      description: 'Compatible con React, Vue, Angular y HTML vanilla. Elige tu tecnología favorita.',
      color: '#FFEAA7'
    },
    {
      icon: Clock,
      title: 'Historial de Versiones',
      description: 'Guarda y gestiona diferentes versiones de tus interfaces con control completo.',
      color: '#DDA0DD'
    },
    {
      icon: Shield,
      title: 'Seguridad Premium',
      description: 'Tus datos y proyectos protegidos con encriptación de nivel empresarial.',
      color: '#98D8C8'
    }
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
    <section className="features" id="features">
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="features-title">
            Potencia tu <span className="text-golden">creatividad</span>
          </h2>
          <p className="features-subtitle">
            Descubre las características que hacen de AuraUI la herramienta perfecta 
            para crear interfaces excepcionales de manera eficiente.
          </p>
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
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="feature-icon"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon 
                  size={24} 
                  style={{ color: feature.color }}
                />
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              
              <div className="feature-arrow">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de estadísticas */}
        <motion.div 
          className="features-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Precisión de IA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10x</div>
              <div className="stat-label">Más Rápido</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Componentes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="features-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="cta-title">¿Listo para revolucionar tu flujo de trabajo?</h3>
          <p className="cta-description">
            Únete a miles de desarrolladores que ya están creando interfaces increíbles con AuraUI.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              Empezar Ahora
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline">
              Ver Documentación
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;