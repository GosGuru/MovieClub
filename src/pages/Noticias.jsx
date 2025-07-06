import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, Tag, Search, Filter, ArrowRight } from 'lucide-react';

const Noticias = ({ showToast }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todas', color: 'text-white' },
    { id: 'estrenos', name: 'Estrenos', color: 'text-[#DD003F]' },
    { id: 'eventos', name: 'Eventos', color: 'text-[#DCF836]' },
    { id: 'promociones', name: 'Promociones', color: 'text-green-400' },
    { id: 'noticias', name: 'Noticias', color: 'text-blue-400' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Nueva Sala Premium inaugurada con tecnología 4K',
      excerpt: 'Disfruta de la experiencia cinematográfica más lujosa con nuestras nuevas butacas reclinables, sonido Dolby Atmos y proyección 4K que te sumergirá completamente en cada película.',
      content: 'Moviclub Durazno se enorgullece en anunciar la inauguración de nuestra nueva Sala Premium, equipada con la más avanzada tecnología cinematográfica. Esta nueva sala cuenta con 32 butacas reclinables de cuero premium, sistema de sonido Dolby Atmos 7.1 y proyección 4K HDR que garantiza una calidad de imagen excepcional.',
      category: 'noticias',
      author: 'María González',
      date: '2024-01-15',
      readTime: '3 min',
      image: 'Interior de sala de cine premium con butacas de cuero reclinables y tecnología 4K',
      featured: true
    },
    {
      id: 2,
      title: 'Ciclo de Cine Uruguayo: Celebrando nuestro cine nacional',
      excerpt: 'Durante todo febrero presentamos una selección especial de películas nacionales que celebran la riqueza y diversidad del cine uruguayo contemporáneo.',
      content: 'El mes de febrero estará dedicado completamente al cine nacional con nuestro "Ciclo de Cine Uruguayo". Presentaremos películas como "Whisky", "El Baño del Papa", "La Redota" y estrenos recientes que han destacado en festivales internacionales.',
      category: 'eventos',
      author: 'Carlos Rodríguez',
      date: '2024-01-10',
      readTime: '4 min',
      image: 'Collage de películas uruguayas clásicas y contemporáneas con la bandera nacional',
      featured: true
    },
    {
      id: 3,
      title: 'Descuentos especiales para estudiantes todos los miércoles',
      excerpt: 'Los estudiantes universitarios y de secundaria ahora tienen 30% de descuento todos los miércoles presentando su carnet estudiantil vigente.',
      content: 'Como parte de nuestro compromiso con la educación y la cultura, hemos implementado un descuento permanente del 30% para estudiantes todos los miércoles. Solo necesitas presentar tu carnet estudiantil vigente en la boletería.',
      category: 'promociones',
      author: 'Ana Martínez',
      date: '2024-01-05',
      readTime: '2 min',
      image: 'Estudiantes jóvenes disfrutando de una película en el cine con palomitas',
      featured: false
    },
    {
      id: 4,
      title: 'Próximo estreno: "Killers of the Flower Moon" de Scorsese',
      excerpt: 'La nueva obra maestra de Martin Scorsese llega a nuestras pantallas el 15 de febrero. Una épica historia sobre crimen y traición en la América de los años 20.',
      content: 'Martin Scorsese regresa con una de sus películas más ambiciosas. "Killers of the Flower Moon" cuenta la historia real de los asesinatos de la nación Osage en Oklahoma durante los años 1920, protagonizada por Leonardo DiCaprio y Robert De Niro.',
      category: 'estrenos',
      author: 'Carlos Rodríguez',
      date: '2024-01-03',
      readTime: '5 min',
      image: 'Póster dramático de Killers of the Flower Moon dirigida por Martin Scorsese',
      featured: false
    },
    {
      id: 5,
      title: 'Noche de Premieres: Alfombra roja en Moviclub',
      excerpt: 'El 25 de enero celebramos nuestra primera "Noche de Premieres" con alfombra roja, cóctel de bienvenida y estreno exclusivo de una película sorpresa.',
      content: 'Te invitamos a vivir una experiencia única en nuestra primera "Noche de Premieres". El evento incluye alfombra roja, sesión de fotos, cóctel de bienvenida y el estreno exclusivo de una película sorpresa que se revelará esa misma noche.',
      category: 'eventos',
      author: 'Ana Martínez',
      date: '2024-01-01',
      readTime: '3 min',
      image: 'Alfombra roja elegante en la entrada del cine con luces y fotógrafos',
      featured: false
    },
    {
      id: 6,
      title: 'Combo familiar: 4 entradas + 2 pochoclos + 2 bebidas por $800',
      excerpt: 'Nueva promoción familiar perfecta para disfrutar en familia. Incluye 4 entradas para cualquier función, 2 pochoclos grandes y 2 bebidas medianas.',
      content: 'Presentamos nuestro nuevo "Combo Familiar" diseñado especialmente para que las familias puedan disfrutar del cine a un precio accesible. La promoción incluye 4 entradas válidas para cualquier función (excepto estrenos), 2 pochoclos grandes y 2 bebidas medianas.',
      category: 'promociones',
      author: 'María González',
      date: '2023-12-28',
      readTime: '2 min',
      image: 'Familia feliz compartiendo palomitas en el cine durante una película',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const handleReadMore = (articleId) => {
    showToast();
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'text-gray-400';
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <Helmet>
        <title>Noticias y Eventos - Moviclub Durazno</title>
        <meta name="description" content="Mantente al día con las últimas noticias, eventos especiales, promociones y estrenos de Moviclub Durazno. Blog oficial del cine." />
      </Helmet>

      <div className="min-h-screen bg-[#212529] pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Dosis']">
                <span className="text-[#DD003F]">Noticias</span> y <span className="text-[#DCF836]">Eventos</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Mantente al día con todas las novedades, eventos especiales y promociones de Moviclub Durazno
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-[#1a1d20] sticky top-16 z-40 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="h-5 w-5 text-[#DD003F] mr-2" />
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-[#DD003F] text-white'
                        : 'bg-[#2a2f35] text-gray-300 hover:bg-[#343a40] hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center space-x-2 flex-1 max-w-md">
                <Search className="h-5 w-5 text-[#DD003F]" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-[#2a2f35] text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                  Artículos <span className="text-[#DD003F]">Destacados</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#DD003F] to-[#DCF836] rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cinema-card rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => handleReadMore(article.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img  
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={article.image}
                       src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-sm ${getCategoryColor(article.category)}`}>
                          {getCategoryName(article.category)}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 font-['Dosis'] group-hover:text-[#DCF836] transition-colors duration-300">
                          {article.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(article.date).toLocaleDateString('es-UY')}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <button className="text-[#DD003F] hover:text-[#DCF836] font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                          <span>Leer más</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <section className="py-12 bg-[#1a1d20]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                  Todas las <span className="text-[#DCF836]">Noticias</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#DCF836] to-[#DD003F] rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cinema-card rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => handleReadMore(article.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img  
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={article.image}
                       src="https://images.unsplash.com/photo-1548778052-311f4bc2b502" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-sm ${getCategoryColor(article.category)}`}>
                          {getCategoryName(article.category)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(article.date).toLocaleDateString('es-UY')}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 font-['Dosis'] group-hover:text-[#DD003F] transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <button className="text-[#DD003F] hover:text-[#DCF836] font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                          <span>Leer</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                No se encontraron artículos
              </h3>
              <p className="text-gray-400 mb-6">
                Intenta cambiar los filtros o el término de búsqueda
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="cinema-button"
              >
                Ver todas las noticias
              </button>
            </motion.div>
          </section>
        )}

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-r from-[#DD003F] to-[#c70039] relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-['Dosis']">
                ¡No te pierdas ninguna novedad!
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe las últimas noticias, promociones exclusivas y estrenos directamente en tu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button
                  onClick={() => console.log("🚧 Newsletter en desarrollo")}
                  className="bg-white text-[#DD003F] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Noticias;