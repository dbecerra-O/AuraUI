import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Users, 
  ArrowRight,
  HelpCircle,
  Shield,
  Clock,
  Globe,
  Headphones
} from 'lucide-react';
import './PricingPage.css';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = React.useState('monthly');
  const [selectedPlan, setSelectedPlan] = React.useState('pro');

  const plans = [
    {
      id: 'free',
      name: 'Gratuito',
      icon: Zap,
      price: {
        monthly: 0,
        yearly: 0
      },
      description: 'Perfecto para comenzar y explorar AuraUI',
      features: [
        { name: '10 generaciones por mes', included: true },
        { name: 'Plantillas básicas (5)', included: true },
        { name: 'Exportar HTML/CSS', included: true },
        { name: 'Comunidad Discord', included: true },
        { name: 'Componentes React', included: false },
        { name: 'API Access', included: false },
        { name: 'Soporte prioritario', included: false },
        { name: 'Colaboración en equipo', included: false },
        { name: 'Integraciones avanzadas', included: false },
        { name: 'Branding personalizado', included: false }
      ],
      cta: 'Comenzar Gratis',
      popular: false,
      color: '#4ECDC4'
    },
    {
      id: 'pro',
      name: 'Profesional',
      icon: Star,
      price: {
        monthly: 29,
        yearly: 290
      },
      description: 'Ideal para desarrolladores y diseñadores profesionales',
      features: [
        { name: 'Generaciones ilimitadas', included: true },
        { name: 'Todas las plantillas (50+)', included: true },
        { name: 'Exportar HTML/CSS/React/Vue', included: true },
        { name: 'Comunidad Discord Premium', included: true },
        { name: 'Componentes React/Vue/Angular', included: true },
        { name: 'API Access (1000 calls/mes)', included: true },
        { name: 'Soporte por email (24h)', included: true },
        { name: 'Historial de versiones', included: true },
        { name: 'Integraciones con Figma/Sketch', included: true },
        { name: 'Colaboración en equipo', included: false }
      ],
      cta: 'Elegir Profesional',
      popular: true,
      color: '#FFD700'
    },
    {
      id: 'team',
      name: 'Equipos',
      icon: Users,
      price: {
        monthly: 99,
        yearly: 990
      },
      description: 'Perfecto para equipos y organizaciones pequeñas',
      features: [
        { name: 'Todo lo de Profesional', included: true },
        { name: 'Hasta 10 miembros incluidos', included: true },
        { name: 'Workspace compartido', included: true },
        { name: 'API ilimitada', included: true },
        { name: 'Componentes para todos los frameworks', included: true },
        { name: 'Branding personalizado', included: true },
        { name: 'SSO/SAML básico', included: true },
        { name: 'Soporte prioritario (4h)', included: true },
        { name: 'Analíticas de uso del equipo', included: true },
        { name: 'Onboarding dedicado', included: true }
      ],
      cta: 'Elegir Equipos',
      popular: false,
      color: '#9B59B6'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      price: {
        monthly: 'Personalizado',
        yearly: 'Personalizado'
      },
      description: 'Soluciones a medida para grandes organizaciones',
      features: [
        { name: 'Todo lo de Equipos', included: true },
        { name: 'Miembros ilimitados', included: true },
        { name: 'Implementación on-premise', included: true },
        { name: 'SLA garantizado 99.9%', included: true },
        { name: 'API dedicada y rate limits altos', included: true },
        { name: 'Integración personalizada', included: true },
        { name: 'SSO/SAML avanzado + Active Directory', included: true },
        { name: 'Training personalizado para equipos', included: true },
        { name: 'Soporte 24/7 + Account Manager', included: true },
        { name: 'Cumplimiento SOC2, GDPR, HIPAA', included: true }
      ],
      cta: 'Contactar Ventas',
      popular: false,
      color: '#2C3E50'
    }
  ];

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu dashboard. Los cambios se aplicarán inmediatamente y se prorrateará el costo según corresponda."
    },
    {
      question: "¿Qué sucede si supero mi límite de generaciones?",
      answer: "En el plan gratuito, tendrás que esperar al siguiente ciclo mensual. En planes pagos, puedes comprar paquetes adicionales de generaciones o actualizar tu plan para obtener más capacidad."
    },
    {
      question: "¿Ofrecen descuentos para estudiantes o organizaciones sin fines de lucro?",
      answer: "Sí, ofrecemos un 50% de descuento en el plan Profesional para estudiantes con email educativo verificado y descuentos especiales para organizaciones sin fines de lucro."
    },
    {
      question: "¿Hay una garantía de devolución de dinero?",
      answer: "Ofrecemos una garantía de devolución del 100% durante los primeros 30 días sin preguntas. Si no estás completamente satisfecho, te devolvemos tu dinero."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Absolutamente. Puedes cancelar tu suscripción en cualquier momento desde tu cuenta. Seguirás teniendo acceso completo hasta el final de tu período de facturación actual."
    },
    {
      question: "¿Los precios incluyen impuestos?",
      answer: "Los precios mostrados no incluyen impuestos. Los impuestos aplicables (IVA, sales tax, etc.) se calcularán y mostrarán en el checkout según tu ubicación."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Garantía de 30 días",
      description: "Devolución completa sin preguntas"
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Asistencia cuando la necesites"
    },
    {
      icon: Globe,
      title: "Sin restricciones geográficas",
      description: "Disponible en todo el mundo"
    },
    {
      icon: Headphones,
      title: "Onboarding gratuito",
      description: "Te ayudamos a comenzar"
    }
  ];

  const getPrice = (plan) => {
    if (typeof plan.price[billingCycle] === 'number') {
      return billingCycle === 'yearly' 
        ? `${plan.price[billingCycle]}` 
        : `${plan.price[billingCycle]}`;
    }
    return plan.price[billingCycle];
  };

  const getYearlySavings = (plan) => {
    if (typeof plan.price.monthly === 'number' && typeof plan.price.yearly === 'number') {
      const monthlyCost = plan.price.monthly * 12;
      const savings = monthlyCost - plan.price.yearly;
      return Math.round((savings / monthlyCost) * 100);
    }
    return 0;
  };

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
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Planes que Escalan con tu <span className="text-golden">Ambición</span></h1>
            <p>
              Desde proyectos personales hasta equipos empresariales. 
              Comienza gratis y escala cuando tu éxito lo requiera.
            </p>
            
            {/* Billing Toggle */}
            <div className="billing-toggle">
              <span className={billingCycle === 'monthly' ? 'active' : ''}>Mensual</span>
              <button 
                className="toggle-switch"
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              >
                <div className={`toggle-slider ${billingCycle === 'yearly' ? 'active' : ''}`}></div>
              </button>
              <span className={billingCycle === 'yearly' ? 'active' : ''}>
                Anual 
                <span className="savings-badge">Ahorra hasta 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="pricing-plans py-4xl">
        <div className="container">
          <motion.div 
            className="pricing-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Star size={14} />
                    Más Popular
                  </div>
                )}
                
                <div className="plan-header">
                  <div 
                    className="plan-icon"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <plan.icon 
                      size={28} 
                      style={{ color: plan.color }}
                    />
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-pricing">
                  <div className="price-container">
                    <span className="price">{getPrice(plan)}</span>
                    {typeof plan.price[billingCycle] === 'number' && (
                      <span className="price-period">
                        /{billingCycle === 'monthly' ? 'mes' : 'año'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'yearly' && getYearlySavings(plan) > 0 && (
                    <div className="savings-info">
                      Ahorras {getYearlySavings(plan)}% anualmente
                    </div>
                  )}
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`feature ${feature.included ? 'included' : 'not-included'}`}
                    >
                      <div className="feature-icon">
                        {feature.included ? (
                          <Check size={16} />
                        ) : (
                          <X size={16} />
                        )}
                      </div>
                      <span className="feature-text">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`plan-cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pricing-benefits py-3xl">
        <div className="container">
          <motion.div 
            className="benefits-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>¿Por qué elegir AuraUI?</h2>
            <p>Más que una herramienta, es tu socio en el desarrollo</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={24} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq py-4xl">
        <div className="container">
          <motion.div 
            className="faq-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Preguntas Frecuentes</h2>
            <p>Todo lo que necesitas saber sobre nuestros planes y precios</p>
          </motion.div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="faq-question">
                  <HelpCircle size={20} />
                  <h4>{faq.question}</h4>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta py-4xl">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>¿Necesitas algo más específico?</h2>
            <p>
              Nuestro equipo de ventas puede ayudarte a encontrar la solución perfecta 
              para tu organización con precios y características personalizadas.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Contactar Ventas
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-ghost">
                Comparar Todos los Planes
              </button>
            </div>
            <p className="cta-note">
              Respuesta garantizada en menos de 2 horas laborales
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;