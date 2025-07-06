import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contacto = ({ showToast }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    showToast();
  };

  const contactInfo = [
    { icon: MapPin, title: 'Dirección', text: 'Av. Artigas 123, Durazno, Uruguay' },
    { icon: Phone, title: 'Teléfono', text: '+598 4362 1234' },
    { icon: Mail, title: 'Email', text: 'info@moviclubdurazno.com' },
    { icon: Clock, title: 'Horario', text: 'Lunes a Domingo: 14:00 - 23:00' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-300' }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Moviclub Durazno</title>
        <meta name="description" content="Contáctanos. Encuentra nuestra dirección, teléfono, email, redes sociales y un mapa de ubicación. Estamos para ayudarte." />
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
                Ponte en <span className="text-[#DD003F]">Contacto</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                ¿Tienes alguna pregunta, sugerencia o comentario? ¡Nos encantaría saber de ti!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 font-['Dosis']">
                    Información de <span className="text-[#DCF836]">Contacto</span>
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-[#DD003F] to-[#c70039] p-3 rounded-full">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white font-['Dosis']">{info.title}</h3>
                            <p className="text-gray-300">{info.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                   <h2 className="text-3xl font-bold text-white mb-6 font-['Dosis']">
                    Síguenos en <span className="text-[#DCF836]">Redes</span>
                  </h2>
                  <div className="flex items-center space-x-6">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
                          aria-label={social.name}
                        >
                          <IconComponent className="h-8 w-8" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cinema-card rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6 font-['Dosis']">
                  Envíanos un <span className="text-[#DD003F]">Mensaje</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                    <input type="text" id="name" required className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Asunto</label>
                    <input type="text" id="subject" required className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                    <textarea id="message" rows="5" required className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full cinema-button flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                Encuéntranos en el <span className="text-[#DCF836]">Mapa</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="h-96 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl"
            >
             <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-56.5200%2C-33.3900%2C-56.5100%2C-33.3800&layer=mapnik&marker=-33.385,-56.515"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Moviclub Durazno"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacto;