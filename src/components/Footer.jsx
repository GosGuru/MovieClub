
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Cartelera', path: '/cartelera' },
    { name: 'Comprar Entradas', path: '/compra-entradas' },
    { name: 'Membresías', path: '/membresias' },
    { name: 'Noticias', path: '/noticias' }
  ];

  const aboutLinks = [
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Preguntas Frecuentes', path: '/faq' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-300' }
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-surface-1 to-brand-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
               <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/2f79393c-b3a7-47da-aa82-1e07d131de17/9c19a9f3505e4e42dd1319f2bd0839e0.jpg" alt="Moviclub Cines Logo" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-bold text-brand-primary font-['Dosis'] uppercase tracking-wider">
                  Moviclub
                </span>
                <br />
                <span className="text-sm text-white font-['Dosis'] uppercase -mt-1 tracking-widest">
                  Cines
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              El corazón cinematográfico de Durazno desde 2009. Promovemos el amor por el cine a través de experiencias únicas.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Star className="h-4 w-4 text-brand-primary" />
              <span>15 años de experiencia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-white font-['Dosis']">
              Enlaces Rápidos
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-white font-['Dosis']">
              Información
            </span>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-white font-['Dosis']">
              Contacto
            </span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. Artigas 123<br />
                  Durazno, Uruguay
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+598 4362 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@moviclubdurazno.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-brand-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">Lun-Dom: 14:00-23:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Síguenos:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Moviclub Cines. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desarrollado con ❤️ para la comunidad cinematográfica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
