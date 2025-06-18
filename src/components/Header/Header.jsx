import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Producto', path: '/producto' },
    { name: 'Precios', path: '/precios' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Zap size={24} />
            </div>
            <span className="logo-text">AuraUI</span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="nav-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botones CTA */}
          <div className="header-actions">
            <Link to="/demo" className="btn btn-outline btn-demo">
              Probar Demo
            </Link>
            <Link to="/registro" className="btn btn-primary">
              Comenzar Gratis
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              <nav className="mobile-nav">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className={`mobile-nav-link ${isActive(item.path) ? 'mobile-nav-link-active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <div className="mobile-actions">
                <Link to="/demo" className="btn btn-outline">
                  Probar Demo
                </Link>
                <Link to="/registro" className="btn btn-primary">
                  Comenzar Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;