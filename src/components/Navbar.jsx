import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Film, Ticket, Calendar, Users, Info, Phone, HelpCircle, Settings } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    // {
    //   name: 'Inicio',
    //   path: '/',
    //   icon: Film
    // },
    {
      name: 'Cartelera',
      path: '/cartelera',
      icon: Calendar
    },
    {
      name: 'Entradas',
      path: '/compra-entradas',
      icon: Ticket
    },
    // {
    //   name: 'Noticias',
    //   path: '/noticias',
    //   icon: Info
    // },
    // {
    //   name: 'Membresías',
    //   path: '/membresias',
    //   icon: Users
    // },
    // {
    //   name: 'Nosotros',
    //   path: '/sobre-nosotros',
    //   icon: Info
    // },
    // {
    //   name: 'Contacto',
    //   path: '/contacto',
    //   icon: Phone
    // },
    // {
    //   name: 'FAQ',
    //   path: '/faq',
    //   icon: HelpCircle
    // },
    // {
    //   name: 'Admin',
    //   path: '/admin',
    //   icon: Settings
    // }
  ];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-background/95 backdrop-blur-md shadow-2xl shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/2f79393c-b3a7-47da-aa82-1e07d131de17/9c19a9f3505e4e42dd1319f2bd0839e0.jpg" alt="Moviclub Cines Logo" className="h-12 w-auto rounded-xl" />
            </div>
            <div className="hidden sm:block">
              <div>
                <span className="text-xl font-bold text-brand-primary font-['Dosis'] uppercase tracking-wider block leading-none">
                  MOVICLUB
                </span>
                <span className="text-sm text-white font-['Dosis'] uppercase tracking-widest block leading-none">
                  DURAZNO
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return <Link key={item.name} to={item.path} className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${isActive ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                  {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" layoutId="underline" />}
                </Link>;
          })}
            
            {/* Admin Link */}
            {/* <Link to="/admin" className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400 hover:text-brand-primary transition-colors duration-300">
              <Settings className="h-4 w-4" />
              <span className="font-medium">Admin</span>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-brand-background/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-brand-primary to-brand-primary-dark text-brand-background' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>;
          })}
              
              {/* Mobile Admin Link */}
              {/* <Link to="/admin" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-brand-primary transition-colors duration-300">
                <Settings className="h-5 w-5" />
                <span className="font-medium">Panel Admin</span>
              </Link> */}
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};
export default Navbar;