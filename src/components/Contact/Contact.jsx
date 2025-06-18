import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'hola@auraui.com',
      description: 'Envíanos un mensaje y te responderemos en 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+51 1 234 5678',
      description: 'Lunes a Viernes de 9:00 AM a 6:00 PM (GMT-5)'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      info: 'San Isidro, Lima',
      description: 'Perú, Sudamérica'
    }
  ];

  const contactTypes = [
    { value: 'general', label: 'Consulta General' },
    { value: 'sales', label: 'Ventas' },
    { value: 'support', label: 'Soporte Técnico' },
    { value: 'partnership', label: 'Alianzas' },
    { value: 'press', label: 'Prensa' }
  ];

  const stats = [
    { icon: Clock, value: '< 24h', label: 'Tiempo de Respuesta' },
    { icon: Users, value: '99%', label: 'Satisfacción Cliente' },
    { icon: MessageCircle, value: '24/7', label: 'Chat de Soporte' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 2000);
  };

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

  if (isSubmitted) {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <motion.div 
            className="contact-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="success-icon">
              <CheckCircle size={64} />
            </div>
            <h3>¡Mensaje Enviado!</h3>
            <p>
              Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos 
              en contacto contigo dentro de las próximas 24 horas.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setIsSubmitted(false)}
            >
              Enviar Otro Mensaje
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Hablemos de tu <span className="text-golden">próximo proyecto</span>
          </h2>
          <p className="contact-subtitle">
            ¿Tienes una idea increíble? Nuestro equipo está aquí para ayudarte a 
            convertirla en realidad con el poder de AuraUI.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="contact-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              variants={itemVariants}
            >
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>Envíanos un Mensaje</h3>
              <p>Completa el formulario y nos pondremos en contacto contigo.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Tu empresa"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Tipo de Consulta *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    {contactTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Cuéntanos más detalles sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="info-header">
              <h3>Otras Formas de Contacto</h3>
              <p>Elige la opción que más te convenga para comunicarte con nosotros.</p>
            </div>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="info-icon">
                    <info.icon size={28} />
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p className="info-detail">{info.info}</p>
                    <p className="info-description">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4>Acciones Rápidas</h4>
              <div className="action-buttons">
                <button className="action-btn">
                  <MessageCircle size={20} />
                  Chat en Vivo
                  <ArrowRight size={16} />
                </button>
                <button className="action-btn">
                  <Phone size={20} />
                  Programar Llamada
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Office Hours */}
            <div className="office-hours">
              <h4>Horarios de Atención</h4>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Lunes - Viernes</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sábados</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <p className="timezone-note">Horario de Lima, Perú (GMT-5)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;