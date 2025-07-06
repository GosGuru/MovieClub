import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Users, Award, Heart, Calendar, Film, Star, Target } from 'lucide-react';

const SobreNosotros = () => {
  const stats = [
    { number: '15', label: 'Años de experiencia', icon: Calendar },
    { number: '50K+', label: 'Espectadores anuales', icon: Users },
    { number: '200+', label: 'Películas proyectadas', icon: Film },
    { number: '4.8', label: 'Calificación promedio', icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Cine',
      description: 'Creemos en el poder transformador del cine y su capacidad de conectar personas, emociones y culturas.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Fomentamos un espacio inclusivo donde cinéfilos de todas las edades pueden compartir su amor por el séptimo arte.'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Nos comprometemos a ofrecer la mejor experiencia cinematográfica con tecnología de vanguardia y servicio excepcional.'
    },
    {
      icon: Target,
      title: 'Innovación',
      description: 'Constantemente buscamos nuevas formas de mejorar la experiencia del espectador y apoyar el cine independiente.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Directora General',
      description: 'Con más de 20 años en la industria cinematográfica, María lidera nuestra visión de hacer del cine una experiencia transformadora.',
      image: 'Retrato profesional de María González, directora de cine'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Programación',
      description: 'Cinéfilo apasionado y curador de nuestra selección de películas, Carlos se encarga de traer lo mejor del cine mundial a Durazno.',
      image: 'Retrato profesional de Carlos Rodríguez, programador de cine'
    },
    {
      name: 'Ana Martínez',
      role: 'Coordinadora de Eventos',
      description: 'Ana organiza nuestros eventos especiales, premieres y actividades culturales que enriquecen la experiencia cinematográfica.',
      image: 'Retrato profesional de Ana Martínez, coordinadora de eventos'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Fundación',
      description: 'Moviclub Durazno abre sus puertas como el primer cine independiente de la ciudad.'
    },
    {
      year: '2012',
      title: 'Renovación Digital',
      description: 'Implementamos tecnología de proyección digital para mejorar la calidad de imagen.'
    },
    {
      year: '2015',
      title: 'Expansión Cultural',
      description: 'Lanzamos nuestro programa de eventos culturales y ciclos temáticos.'
    },
    {
      year: '2018',
      title: 'Reconocimiento Nacional',
      description: 'Recibimos el premio al "Mejor Cine Independiente" del Instituto Nacional de Cine.'
    },
    {
      year: '2021',
      title: 'Modernización',
      description: 'Renovamos completamente nuestras instalaciones con tecnología 4K y sonido envolvente.'
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Continuamos siendo el corazón cultural cinematográfico de Durazno.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Moviclub Durazno</title>
        <meta name="description" content="Conoce la historia de Moviclub Durazno, nuestro equipo, misión y valores. 15 años promoviendo el cine independiente y comercial en Durazno, Uruguay." />
      </Helmet>

      <div className="min-h-screen bg-[#212529] pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Dosis']">
                  Sobre <span className="text-[#DD003F]">Moviclub</span>
                  <br />
                  <span className="text-[#DCF836]">Durazno</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Desde 2009, somos el corazón cinematográfico de Durazno, promoviendo el amor por el cine a través de una experiencia única que combina lo mejor del cine comercial e independiente.
                </p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <MapPin className="h-5 w-5 text-[#DD003F]" />
                  <span>Av. Artigas 123, Durazno, Uruguay</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  alt="Interior moderno de Moviclub Durazno con butacas rojas y ambiente acogedor" src="https://images.unsplash.com/photo-1577581088243-8b68ac63383f" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-[#DD003F] to-[#c70039] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Dosis']">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="cinema-card rounded-2xl p-8"
              >
                <div className="bg-gradient-to-br from-[#DD003F] to-[#c70039] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 font-['Dosis']">Nuestra Misión</h2>
                <p className="text-gray-300 leading-relaxed">
                  Promover y democratizar el acceso al cine de calidad en Durazno, ofreciendo una experiencia cinematográfica única que inspire, eduque y entretenga a nuestra comunidad, mientras apoyamos tanto el cine comercial como las producciones independientes y locales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cinema-card rounded-2xl p-8"
              >
                <div className="bg-gradient-to-br from-[#DCF836] to-[#b8d332] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#212529]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 font-['Dosis']">Nuestra Visión</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ser el referente cultural cinematográfico del interior de Uruguay, reconocido por nuestra excelencia en programación, innovación tecnológica y compromiso con la comunidad, creando un espacio donde el cine trasciende el entretenimiento para convertirse en una experiencia transformadora.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                Nuestros <span className="text-[#DCF836]">Valores</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-[#2a2f35] to-[#1a1d20] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#DCF836]">
                      <IconComponent className="h-8 w-8 text-[#DCF836]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Dosis']">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                Nuestro <span className="text-[#DD003F]">Equipo</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Las personas que hacen posible la magia del cine en Moviclub Durazno.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cinema-card rounded-2xl overflow-hidden group text-center"
                >
                  <div className="relative">
                    <img 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={member.image} src="https://images.unsplash.com/photo-1612928414075-bc722ade44f1" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white font-['Dosis']">{member.name}</h3>
                      <p className="text-[#DCF836] text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Dosis']">
                Nuestra <span className="text-[#DD003F]">Historia</span>
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12"></div>
                  <div className="w-1/12">
                    <div className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-[#DD003F]"></div>
                    </div>
                  </div>
                  <div className={`w-5/12 p-6 cinema-card rounded-xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <p className="text-lg font-bold text-[#DCF836] mb-1 font-['Dosis']">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Dosis']">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SobreNosotros;