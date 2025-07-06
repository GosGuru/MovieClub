import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ChevronDown, HelpCircle, Film, Ticket, Users, CreditCard } from 'lucide-react';

const FAQ = () => {

  const faqs = [
    {
      category: 'General',
      icon: Film,
      questions: [
        {
          q: '¿Cuál es el horario del cine?',
          a: 'Estamos abiertos de Lunes a Domingo de 14:00 a 23:00. Las funciones pueden variar, por favor revisa la cartelera para horarios específicos.'
        },
        {
          q: '¿Hay estacionamiento disponible?',
          a: 'Sí, contamos con un estacionamiento gratuito para nuestros clientes ubicado a pocos metros del cine.'
        },
        {
          q: '¿El cine es accesible para personas con movilidad reducida?',
          a: 'Totalmente. Todas nuestras salas y áreas comunes son accesibles. Contamos con rampas, baños adaptados y espacios reservados en las salas.'
        }
      ]
    },
    {
      category: 'Entradas',
      icon: Ticket,
      questions: [
        {
          q: '¿Cómo puedo comprar entradas?',
          a: 'Puedes comprar tus entradas a través de nuestra página web en la sección "Compra de Entradas", en la app móvil o directamente en la boletería del cine.'
        },
        {
          q: '¿Puedo cancelar o cambiar mis entradas?',
          a: 'Las entradas compradas online pueden ser canceladas hasta 2 horas antes de la función. No se realizan cambios, pero puedes cancelar y volver a comprar.'
        },
        {
          q: '¿Qué tipos de descuentos ofrecen?',
          a: 'Ofrecemos descuentos para estudiantes (los miércoles), tercera edad, y para miembros de nuestros planes de membresía. Consulta la sección de "Membresías" para más detalles.'
        }
      ]
    },
    {
      category: 'Membresías',
      icon: Users,
      questions: [
        {
          q: '¿Qué beneficios obtengo al hacerme miembro?',
          a: 'Nuestros miembros disfrutan de descuentos en entradas y confitería, acceso prioritario a estrenos, entradas gratis y eventos exclusivos. Los beneficios varían según el plan.'
        },
        {
          q: '¿Cómo me hago miembro?',
          a: 'Puedes suscribirte a cualquiera de nuestros planes de membresía directamente desde la sección "Membresías" en nuestra página web.'
        },
        {
          q: '¿Puedo cancelar mi membresía en cualquier momento?',
          a: 'Sí, todas nuestras membresías son sin contrato de permanencia. Puedes cancelarla cuando quieras desde tu perfil de usuario.'
        }
      ]
    },
    {
      category: 'Pagos',
      icon: CreditCard,
      questions: [
        {
          q: '¿Qué métodos de pago aceptan?',
          a: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, etc.), así como pagos a través de MercadoPago en nuestra web. En boletería también aceptamos efectivo.'
        },
        {
          q: '¿Es seguro comprar en la página web?',
          a: 'Sí, nuestra plataforma de pagos utiliza encriptación SSL para garantizar que toda tu información personal y financiera esté protegida.'
        }
      ]
    }
  ];
  
  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="cinema-card rounded-lg overflow-hidden"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-6 text-left"
        >
          <span className="text-white font-semibold">{question}</span>
          <ChevronDown
            className={`h-5 w-5 text-[#DD003F] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <motion.div
          initial="collapsed"
          animate={isOpen ? 'open' : 'collapsed'}
          variants={{
            open: { opacity: 1, height: 'auto', marginTop: '0px' },
            collapsed: { opacity: 0, height: 0, marginTop: '-16px' }
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-gray-300">{answer}</div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - Moviclub Durazno</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre Moviclub Durazno. Información sobre horarios, entradas, membresías y más." />
      </Helmet>
      <div className="min-h-screen bg-[#212529] pt-20">
        <section className="py-16 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Dosis']">
                Preguntas <span className="text-[#DD003F]">Frecuentes</span> (FAQ)
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                ¿Tienes alguna duda? Aquí encontrarás las respuestas a las preguntas más comunes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((faqCategory, index) => {
              const IconComponent = faqCategory.icon;
              return (
                <div key={index} className="mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center space-x-4 mb-8"
                  >
                    <div className="bg-gradient-to-br from-[#DCF836] to-[#b8d332] p-3 rounded-full">
                      <IconComponent className="h-8 w-8 text-[#212529]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white font-['Dosis']">{faqCategory.category}</h2>
                  </motion.div>
                  <div className="space-y-4">
                    {faqCategory.questions.map((faq, qIndex) => (
                      <AccordionItem key={qIndex} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;