import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Check, Star, Gift, Calendar, Percent, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Membresias = ({ showToast }) => {
  const membershipPlans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 500,
      period: 'mes',
      color: 'from-gray-600 to-gray-800',
      icon: Star,
      popular: false,
      benefits: [
        '10% descuento en entradas',
        'Acceso prioritario a estrenos',
        'Newsletter mensual',
        'Invitación a eventos especiales',
        '1 entrada gratis al mes'
      ],
      description: 'Perfecto para cinéfilos ocasionales que quieren disfrutar de beneficios básicos.'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 800,
      period: 'mes',
      color: 'from-[#DD003F] to-[#c70039]',
      icon: Gift,
      popular: true,
      benefits: [
        '20% descuento en entradas',
        'Acceso VIP a estrenos',
        'Newsletter semanal',
        'Invitación exclusiva a premieres',
        '2 entradas gratis al mes',
        'Descuento en confitería',
        'Reserva anticipada de asientos'
      ],
      description: 'La opción más popular para verdaderos amantes del cine con beneficios exclusivos.'
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 1200,
      period: 'mes',
      color: 'from-[#DCF836] to-[#b8d332]',
      icon: Crown,
      popular: false,
      benefits: [
        '30% descuento en entradas',
        'Acceso ilimitado a estrenos',
        'Newsletter diario',
        'Eventos privados exclusivos',
        '4 entradas gratis al mes',
        '20% descuento en confitería',
        'Asientos reservados premium',
        'Invitado especial +1',
        'Merchandising exclusivo'
      ],
      description: 'La experiencia cinematográfica más completa con acceso total y beneficios únicos.'
    }
  ];

  const additionalBenefits = [
    {
      icon: Calendar,
      title: 'Eventos Exclusivos',
      description: 'Acceso a premieres, charlas con directores y ciclos temáticos especiales.'
    },
    {
      icon: Percent,
      title: 'Descuentos Especiales',
      description: 'Ofertas exclusivas en confitería, merchandising y eventos especiales.'
    },
    {
      icon: Gift,
      title: 'Regalos Únicos',
      description: 'Merchandising exclusivo, pósters firmados y sorpresas mensuales.'
    }
  ];

  const handleSubscribe = (planName) => {
    showToast();
  };

  return (
    <>
      <Helmet>
        <title>Membresías - Moviclub Durazno</title>
        <meta name="description" content="Únete a nuestras membresías exclusivas y disfruta de descuentos, entradas gratis, eventos especiales y beneficios únicos en Moviclub Durazno." />
      </Helmet>

      <div className="min-h-screen bg-[#212529] pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Dosis']">
                <span className="text-[#DD003F]">Membresías</span> Exclusivas
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Únete a nuestra comunidad de cinéfilos y disfruta de beneficios únicos, descuentos especiales y experiencias exclusivas
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#DCF836]" />
                  <span>Sin permanencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#DCF836]" />
                  <span>Cancela cuando quieras</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[#DCF836]" />
                  <span>Beneficios inmediatos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative cinema-card rounded-2xl overflow-hidden ${
                      plan.popular ? 'ring-2 ring-[#DD003F] scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#DD003F] to-[#c70039] text-white text-center py-2 text-sm font-bold">
                        MÁS POPULAR
                      </div>
                    )}

                    <div className={`bg-gradient-to-br ${plan.color} p-6 ${plan.popular ? 'pt-12' : ''}`}>
                      <div className="text-center">
                        <IconComponent className="h-12 w-12 mx-auto mb-4 text-white" />
                        <h3 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                          {plan.name}
                        </h3>
                        <div className="text-white">
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-lg">/{plan.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-300 text-sm mb-6 text-center">
                        {plan.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="h-4 w-4 text-[#DCF836] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleSubscribe(plan.name)}
                        className={`w-full py-3 font-semibold rounded-lg transition-all duration-200 ${
                          plan.popular
                            ? 'cinema-button-primary'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}
                      >
                        Suscribirse a {plan.name}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                Beneficios <span className="text-[#DCF836]">Adicionales</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Todos nuestros miembros disfrutan de ventajas exclusivas que van más allá de las entradas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cinema-card rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-[#DD003F] to-[#c70039] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Dosis']">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4 font-['Dosis']">
                Preguntas <span className="text-[#DD003F]">Frecuentes</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "¿Puedo cancelar mi membresía en cualquier momento?",
                  answer: "Sí, puedes cancelar tu membresía en cualquier momento sin penalizaciones. Los beneficios se mantendrán hasta el final del período pagado."
                },
                {
                  question: "¿Las entradas gratis tienen restricciones?",
                  answer: "Las entradas gratis se pueden usar en cualquier función, excepto en estrenos especiales o eventos premium. No tienen fecha de vencimiento dentro del mes."
                },
                {
                  question: "¿Puedo cambiar de plan durante mi membresía?",
                  answer: "Por supuesto. Puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán en el próximo ciclo de facturación."
                },
                {
                  question: "¿Los descuentos se aplican a acompañantes?",
                  answer: "Los descuentos en entradas se aplican solo al miembro. Sin embargo, los miembros VIP pueden traer un invitado con descuento especial."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cinema-card rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3 font-['Dosis']">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#DD003F] to-[#c70039]">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                ¿Listo para unirte?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Comienza a disfrutar de todos los beneficios desde hoy mismo
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleSubscribe('Premium')}
                  className="bg-white text-[#DD003F] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Empezar con Premium
                </Button>
                <Button
                  onClick={() => showToast()}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#DD003F] px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Hablar con un asesor
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Membresias;
