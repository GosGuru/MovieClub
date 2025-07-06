import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Play, Calendar, Ticket, Star, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Home = ({ showToast }) => {
  const navigate = useNavigate();
  // Películas y horarios reales de la sección de entradas
  const featuredMovies = [
    {
      id: 1,
      title: 'Elio (Disney • Pixar)',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: ['14:00'],
      image: '/assets/elio.jpeg'
    },
    {
      id: 2,
      title: 'Lilo & Stitch',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: ['16:00'],
      image: '/assets/lilo-stitch.jpeg'
    },
    {
      id: 3,
      title: 'Cómo entrenar a tu dragón',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: ['18:00'],
      image: '/assets/como-entrenar-a-tu-dragon.png'
    },
    {
      id: 4,
      title: 'Jurassic World',
      genre: 'Aventura',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: ['20:00', '22:30'],
      image: '/assets/jurassic-world.webp'
    },
    {
      id: 5,
      title: 'M3GAN 2.0',
      genre: 'Terror',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: ['22:30'],
      image: '/assets/m3gan-2.jpg'
    }
  ];

  // Agregar las películas actuales a los próximos estrenos
  const upcomingMovies = [
    ...featuredMovies.map(movie => ({
      title: movie.title,
      releaseDate: '2025-07-06',
      image: movie.image
    })),
  
  ];

  const news = [
    {
      title: 'Nueva Sala Premium inaugurada',
      date: '2024-01-15',
      excerpt: 'Disfruta de la experiencia cinematográfica más lujosa con nuestras nuevas butacas reclinables y sonido Dolby Atmos.',
      image: 'Interior de sala de cine premium con butacas de cuero y tecnología avanzada'
    },
    {
      title: 'Ciclo de Cine Uruguayo',
      date: '2024-01-10',
      excerpt: 'Durante febrero presentamos una selección especial de películas nacionales que celebran nuestro cine.',
      image: 'Collage de películas uruguayas clásicas y contemporáneas'
    },
    {
      title: 'Descuentos para estudiantes',
      date: '2024-01-05',
      excerpt: 'Los estudiantes universitarios ahora tienen 30% de descuento todos los miércoles presentando su carnet.',
      image: 'Estudiantes jóvenes disfrutando de una película en el cine'
    }
  ];

  const handleFeatureClick = (feature) => {
    showToast();
  };

  return (
    <>
      <Helmet>
        <title>Moviclub Cines - La Magia del Cine en Durazno</title>
        <meta name="description" content="Disfruta de la mejor experiencia cinematográfica en Durazno. Cartelera actualizada, entradas online, eventos especiales y más en Moviclub Cines." />
      </Helmet>

      <div className="min-h-screen bg-brand-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-0 py-8">
          {/* Imagen de fondo hero */}
          <img 
            src="/assets/hero.jpg" 
            alt="Cine Hero" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60" 
            style={{zIndex: 0}} 
          />
          {/* Gradiente más oscuro en mobile para mejor contraste */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-brand-background/90 sm:from-brand-background/80 sm:via-brand-background/60 sm:to-brand-background/80"></div>
          <div className="relative z-10 max-w-2xl sm:max-w-7xl mx-auto px-2 sm:px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-tight">
                ¡Bienvenido a{' '} <br />
                <span className="relative inline-block">
                  <span className="font-['Bebas Neue'] uppercase tracking-wider text-[#F5B021] text-2xl sm:text-5xl">
                    Movie club&nbsp;Durazno
                  </span>
                  <span className="absolute left-0 right-0 -bottom-1 h-[3px] uppercase tracking-[6px] sm:tracking-[10px] text-[20px] sm:text-[35px]">Cines</span>
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-white/90 max-w-xl mx-auto mb-6 sm:mb-8">
                Descubre la mejor experiencia de cine en Durazno. Consulta la cartelera y compra tus entradas fácilmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/cartelera" className="cinema-button w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl inline-flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-black/70" />
                  <span>Ver Cartelera</span>
                </Link>
                <Link to="/compra-entradas" className="cinema-button-secondary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl inline-flex items-center space-x-2">
                  <Ticket className="h-5 w-5 text-white/90" />
                  <span>Comprar Entradas</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Movies */}
        <section className="py-20 bg-brand-surface-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-['Dosis']">
                Estrenos <span className="text-brand-secondary">Destacados</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Las películas más esperadas del momento, ahora en nuestras pantallas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="movie-card group cursor-pointer bg-[#18181b] rounded-2xl shadow-md border border-gray-700 p-2 flex flex-col"
                  onClick={() => handleFeatureClick('movie details')}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img  
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 border border-white/10"
                      alt={movie.title}
                      src={movie.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-brand-primary text-brand-background px-2 py-1 rounded-lg font-bold text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1"/> {movie.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-1 font-['Dosis']">{movie.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-300">
                        <span>{movie.genre}</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {movie.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-4 flex-1 justify-end">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {movie.showtimes.map((time) => (
                        <span key={time} className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-gray-200">
                          {time}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/compra-entradas', {
                          state: { movieId: movie.id, showtime: movie.showtimes[0] }
                        });
                      }}
                    >
                      <Ticket className="h-5 w-5" />
                      Comprar Entradas
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/cartelera" className="cinema-button-secondary inline-flex items-center space-x-2">
                <span>Ver Cartelera Completa</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Movies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-['Dosis']">
                Próximos <span className="text-brand-primary">Estrenos</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Las películas que no puedes perderte, próximamente en nuestras salas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingMovies.map((movie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="movie-card group cursor-pointer"
                  onClick={() => handleFeatureClick('upcoming movie')}
                >
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={movie.title}
                      src={movie.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-2 font-['Dosis']">{movie.title}</h3>
                      <div className="flex items-center text-sm text-brand-primary">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Estreno: {new Date(movie.releaseDate).toLocaleDateString('es-UY')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        {/* <section className="py-20 bg-brand-surface-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-['Dosis']">
                Últimas <span className="text-brand-secondary">Noticias</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Mantente al día con todas las novedades, eventos y promociones especiales
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cinema-card rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => handleFeatureClick('news article')}
                >
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={article.image}
                     src="https://images.unsplash.com/photo-1633362967859-fde6c856274d" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-brand-primary mb-2">
                      {new Date(article.date).toLocaleDateString('es-UY')}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Dosis'] group-hover:text-brand-secondary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/noticias" className="cinema-button inline-flex items-center space-x-2">
                <span>Ver Todas las Noticias</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section> */}

        {/* CTA Section */}
        
        {/* <section className="py-20 bg-gradient-to-r from-brand-secondary to-[#c70039] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-['Dosis']">
                ¿Listo para vivir la experiencia?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Únete a nuestra comunidad de cinéfilos y disfruta de beneficios exclusivos, descuentos especiales y acceso prioritario a estrenos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/membresias" className="bg-brand-primary text-brand-background font-semibold py-4 px-8 rounded-lg hover:bg-brand-primary-dark transition-colors duration-300 inline-flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Hazte Miembro</span>
                </Link>
                <Link to="/contacto" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-brand-secondary transition-all duration-300 inline-flex items-center space-x-2">
                  <span>Contáctanos</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
