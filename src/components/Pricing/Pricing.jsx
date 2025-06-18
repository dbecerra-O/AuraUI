import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Users, 
  ArrowRight,
  HelpCircle 
} from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

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
        { name: 'Plantillas básicas', included: true },
        { name: 'Exportar HTML/CSS', included: true },
        { name: 'Comunidad Discord', included: true },
        { name: 'Componentes React', included: false },
        { name: 'API Access', included: false },
        { name: 'Soporte prioritario', included: false },
        { name: 'Colaboración en equipo', included: false }
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
        { name: 'Todas las plantillas', included: true },
        { name: 'Exportar HTML/CSS/React', included: true },
        { name: 'Comunidad Discord', included: true },
        { name: 'Componentes React', included: true },
        { name: 'API Access (1000 calls/mes)', included: true },
        { name: 'Soporte por email', included: true },
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
      description: 'Perfecto para equipos y organizaciones',
      features: [
        { name: 'Todo lo de Profesional', included: true },
        { name: 'Hasta 10 miembros', included: true },
        { name: 'Workspace compartido', included: true },
        { name: 'API ilimitada', included: true },
        { name: 'Branding personalizado', included: true },
        { name: 'SSO/SAML', included: true },
        { name: 'Soporte prioritario', included: true },
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
        { name: 'SLA garantizado', included: true },
        { name: 'Integración personalizada', included: true },
        { name: 'Training personalizado', included: true },
        { name: 'Soporte 24/7', included: true },
        { name: 'Account Manager', included: true }
      ],
      cta: 'Contactar Ventas',
      popular: false,
      color: '#2C3E50'
    }
  ];

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se prorrateará el costo."
    },
    {
      question: "¿Qué sucede si supero mi límite de generaciones?",
      answer: "En el plan gratuito, tendrás que esperar al siguiente mes. En planes pagos, puedes comprar generaciones adicionales o actualizar tu plan."
    },
    {
      question: "¿Ofrecen descuentos para estudiantes?",
      answer: "Sí, ofrecemos un 50% de descuento en el plan Profesional para estudiantes con email educativo verificado."
    },
    {
      question: "¿Hay una garantía de devolución de dinero?",
      answer: "Ofrecemos una garantía de devolución del 100% durante los primeros 30 días sin preguntas."
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

  const getPrice = (plan) => {
    if (typeof plan.price[billingCycle] === 'number') {
      return billingCycle === 'yearly' 
        ? `$${plan.price[billingCycle]}` 
        : `$${plan.price[billingCycle]}`;
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

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="pricing-title">
            Planes que se adaptan a tu <span className="text-golden">ritmo</span>
          </h2>
          <p className="pricing-subtitle">
            Desde proyectos personales hasta equipos empresariales. 
            Comienza gratis y escala cuando lo necesites.
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
              <span className="savings-badge">Ahorra 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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

        {/* FAQ Section */}
        <motion.div 
          className="pricing-faq"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="faq-title">Preguntas Frecuentes</h3>
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
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="pricing-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿Necesitas algo más específico?</h3>
          <p>
            Nuestro equipo de ventas puede ayudarte a encontrar la solución perfecta 
            para tu organización con precios personalizados.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              Contactar Ventas
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-ghost">
              Comparar Planes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;