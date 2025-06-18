import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram,
  ArrowUp 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    producto: [
      { name: 'Características', path: '/#features' },
      { name: 'Precios', path: '/precios' },
      { name: 'Demo', path: '/demo' },
      { name: 'Documentación', path: '/docs' }
    ],
    empresa: [
      { name: 'Acerca de', path: '/acerca' },
      { name: 'Blog', path: '/blog' },
      { name: 'Carreras', path: '/carreras' },
      { name: 'Prensa', path: '/prensa' }
    ],
    soporte: [
      { name: 'Ayuda', path: '/ayuda' },
      { name: 'Contacto', path: '/contacto' },
      { name: 'Estado del Sistema', path: '/estado' },
      { name: 'API', path: '/api' }
    ],
    legal: [
      { name: 'Privacidad', path: '/privacidad' },
      { name: 'Términos', path: '/terminos' },
      { name: 'Cookies', path: '/cookies' },
      { name: 'Licencias', path: '/licencias' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/auraui', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/auraui', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/auraui', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/auraui', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter */}
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3 className="newsletter-title">Mantente actualizado</h3>
            <p className="newsletter-description">
              Recibe las últimas noticias, actualizaciones y consejos directamente en tu bandeja de entrada.
            </p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="newsletter-input"
              />
              <button className="btn btn-primary newsletter-btn">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img 
                src="/aura.jpg" 
                alt="AuraUI Logo" 
                className="footer-logo-image"
              />
              <span className="logo-text">AuraUI</span>
            </Link>
            <p className="footer-description">
              Transformamos ideas en interfaces visuales extraordinarias. 
              La herramienta de IA que acelera tu proceso creativo.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>hola@auraui.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+51 1 234 5678</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            <div className="links-section">
              <h4 className="links-title">Producto</h4>
              <ul className="links-list">
                {footerLinks.producto.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-section">
              <h4 className="links-title">Empresa</h4>
              <ul className="links-list">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-section">
              <h4 className="links-title">Soporte</h4>
              <ul className="links-list">
                {footerLinks.soporte.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-section">
              <h4 className="links-title">Legal</h4>
              <ul className="links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} AuraUI. Todos los derechos reservados.
            </p>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <button 
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;