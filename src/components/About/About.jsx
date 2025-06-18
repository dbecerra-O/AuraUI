import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Award, 
  Globe,
  ArrowRight,
  Quote
} from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: "50K+", label: "Desarrolladores", icon: Users },
    { number: "1M+", label: "Interfaces Creadas", icon: Target },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "150+", label: "Países", icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Pioneeros en la aplicación de IA para el diseño de interfaces, siempre empujando los límites de lo posible."
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos herramientas que empoderan a desarrolladores y diseñadores de todo el mundo."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometidos con la calidad, precisión y performance en cada línea de código generado."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Lead Developer en TechCorp",
      content: "AuraUI ha revolucionado nuestro proceso de desarrollo. Lo que antes tomaba días, ahora lo hacemos en minutos.",
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Mendoza",
      role: "Freelance Designer",
      content: "Como diseñador independiente, AuraUI me permite competir con equipos enteros. Es increíblemente potente.",
      avatar: "👨‍🎨"
    },
    {
      name: "Ana Rodríguez",
      role: "Startup Founder",
      content: "Gracias a AuraUI lanzamos nuestro MVP en tiempo récord. La calidad del código generado es excepcional.",
      avatar: "👩‍💼"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">
            Redefiniendo el <span className="text-golden">futuro</span> del desarrollo
          </h2>
          <p className="about-subtitle">
            En AuraUI creemos que la inteligencia artificial puede democratizar el desarrollo 
            de interfaces, haciendo que el diseño profesional sea accesible para todos.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="about-story"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="story-content">
            <div className="story-text">
              <h3>Nuestra Historia</h3>
              <p>
                Todo comenzó con una simple pregunta: ¿Por qué crear interfaces hermosas 
                y funcionales tiene que ser tan complejo? Como desarrolladores, sabíamos 
                que había una mejor manera.
              </p>
              <p>
                En 2024, reunimos a un equipo de expertos en IA, diseño UX y desarrollo 
                frontend con una misión clara: crear la herramienta que habríamos querido 
                tener cuando empezamos nuestras carreras.
              </p>
              <p>
                Hoy, AuraUI potencia el trabajo de miles de profesionales en todo el mundo, 
                transformando ideas simples en interfaces extraordinarias con el poder 
                de la inteligencia artificial.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>2024 Q1</h4>
                    <p>Fundación y primeros prototipos</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>2024 Q2</h4>
                    <p>Lanzamiento de beta privada</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>2024 Q3</h4>
                    <p>Beta pública y primeros usuarios</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker active"></div>
                  <div className="timeline-content">
                    <h4>2025</h4>
                    <p>Lanzamiento oficial global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="about-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">
                <stat.icon size={28} />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div 
          className="about-values"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="values-title"
            variants={itemVariants}
          >
            Nuestros Valores
          </motion.h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="about-testimonials"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="testimonials-title">Lo que dicen nuestros usuarios</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Quote className="testimonial-quote" size={24} />
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission CTA */}
        <motion.div 
          className="about-mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mission-content">
            <h3>Únete a la Revolución</h3>
            <p>
              Forma parte de la comunidad que está redefiniendo cómo se crean las interfaces. 
              Desde startups hasta Fortune 500, todos confían en AuraUI.
            </p>
            <div className="mission-actions">
              <button className="btn btn-primary">
                Comenzar Ahora
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">
                Conocer el Equipo
              </button>
            </div>
          </div>
          <div className="mission-visual">
            <div className="mission-grid">
              <div className="mission-item"></div>
              <div className="mission-item"></div>
              <div className="mission-item"></div>
              <div className="mission-item"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;