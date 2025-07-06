import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, Star, Filter, Search, Ticket, Play } from 'lucide-react';

const Cartelera = ({ showToast }) => {
  const [selectedDate, setSelectedDate] = useState('2025-07-06');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const movies = [
    {
      id: 1,
      title: 'Elio (Disney • Pixar)',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      director: '',
      cast: [],
      synopsis: '',
      showtimes: {
        '2025-07-06': [
          { time: '14:00', date: '2025-07-06', available: true }
        ],
        '2025-07-07': [
          { time: '14:00', date: '2025-07-07', available: true },
          { time: '14:00', date: '2025-07-08', available: true }
        ]
      },
      image: '/assets/elio.jpeg'
    },
    {
      id: 2,
      title: 'Lilo & Stitch',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      director: '',
      cast: [],
      synopsis: '',
      showtimes: {
        '2025-07-06': [
          { time: '16:00', date: '2025-07-06', available: true }
        ],
        '2025-07-07': [
          { time: '16:00', date: '2025-07-07', available: true },
          { time: '16:00', date: '2025-07-08', available: true }
        ]
      },
      image: '/assets/lilo&stitch.jpeg'
    },
    {
      id: 3,
      title: 'Cómo entrenar a tu dragón',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      director: '',
      cast: [],
      synopsis: '',
      showtimes: {
        '2025-07-06': [
          { time: '18:00', date: '2025-07-06', available: true }
        ],
        '2025-07-07': [
          { time: '18:00', date: '2025-07-07', available: true },
          { time: '18:00', date: '2025-07-08', available: true }
        ]
      },
      image: '/assets/comoentrenar.png'
    },
    {
      id: 4,
      title: 'Jurassic World',
      genre: 'Aventura',
      duration: 'TBA',
      rating: 'TBA',
      director: '',
      cast: [],
      synopsis: '',
      showtimes: {
        '2025-07-06': [
          { time: '20:00', date: '2025-07-06', available: true },
          { time: '22:30', date: '2025-07-06', available: true }
        ],
        '2025-07-07': [
          { time: '20:00', date: '2025-07-07', available: true },
          { time: '22:30', date: '2025-07-07', available: true },
          { time: '20:00', date: '2025-07-08', available: true },
          { time: '22:30', date: '2025-07-08', available: true }
        ]
      },
      image: '/assets/jurassicworld.webp'
    },
    {
      id: 5,
      title: 'M3GAN 2.0',
      genre: 'Terror',
      duration: 'TBA',
      rating: 'TBA',
      director: '',
      cast: [],
      synopsis: '',
      showtimes: {
        '2025-07-06': [
          { time: '22:30', date: '2025-07-06', available: true }
        ]
      },
      image: '/assets/m3gan2.0.jpg'
    }
  ];

  const genres = ['all', 'Ciencia Ficción', 'Drama', 'Comedia', 'Animación', 'Aventura'];
  const dates = [
    { value: '2025-07-06', label: 'Domingo 6 jul' },
    { value: '2025-07-07', label: 'Lunes 7 jul' },
    { value: '2025-07-08', label: 'Martes 8 jul' }
  ];

  const filteredMovies = movies.filter(movie => {
    const matchesGenre = selectedGenre === 'all' || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase());
    const hasShowtimes = movie.showtimes[selectedDate] && movie.showtimes[selectedDate].length > 0;
    
    return matchesGenre && matchesSearch && hasShowtimes;
  });

  const handleBuyTickets = (movieTitle, showtime) => {
    showToast();
  };

  const handleWatchTrailer = (movieTitle) => {
    showToast();
  };

  return (
    <>
      <Helmet>
        <title>Cartelera - Moviclub Durazno</title>
        <meta name="description" content="Consulta la cartelera actualizada de Moviclub Durazno. Horarios, películas en cartel y próximos estrenos. Compra tus entradas online." />
      </Helmet>

      <div className="min-h-screen bg-[#212529] pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          {/* Fondo de cine Unsplash */}
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" 
            alt="Sala de cine moderna" 
            className="absolute inset-0 w-full h-full object-cover opacity-40" 
            style={{zIndex: 0, objectPosition: 'center 43%'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/90 to-[#343a40]/80" style={{zIndex: 1}}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Dosis'] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                <span className="text-[#DD003F]">Cartelera</span> Actual
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Descubre todas las películas en cartel, horarios disponibles y reserva tus entradas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-6 bg-[#1a1d20]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 w-full">
              {/* Date Selector */}
              <div className="flex items-center space-x-2 flex-1">
                <Calendar className="h-5 w-5 text-[#DD003F] flex-shrink-0" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-[#2a2f35] text-white border border-gray-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                >
                  {dates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Genre Filter */}
              <div className="flex items-center space-x-2 flex-1">
                <Filter className="h-5 w-5 text-[#DD003F] flex-shrink-0" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="bg-[#2a2f35] text-white border border-gray-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'Todos los géneros' : genre}
                    </option>
                  ))}
                </select>
              </div>
              {/* Search */}
              <div className="flex items-center space-x-2 flex-1">
                <Search className="h-5 w-5 text-[#DD003F] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Buscar película o director..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#2a2f35] text-white border border-gray-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Movies Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredMovies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                  No hay películas disponibles
                </h3>
                <p className="text-gray-400">
                  Intenta cambiar los filtros o la fecha seleccionada
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredMovies.map((movie, index) => (
                  <motion.div
                    key={movie.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cinema-card rounded-xl overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Movie Poster */}
                      <div className="md:w-1/3 relative">
                        <img  
                          className="w-full h-64 md:h-full object-cover"
                          alt={movie.title}
                          src={movie.image} />
                        <div className="absolute top-4 right-4 bg-[#DCF836] text-[#212529] px-2 py-1 rounded-lg font-bold text-sm">
                          ⭐ {movie.rating}
                        </div>
                      </div>

                      {/* Movie Info */}
                      <div className="md:w-2/3 p-6">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-2 font-['Dosis']">
                            {movie.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="bg-[#DD003F] text-white px-2 py-1 rounded">
                              {movie.genre}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {movie.duration}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mb-2">
                            <strong>Director:</strong> {movie.director}
                          </p>
                          <p className="text-sm text-gray-400 mb-4">
                            <strong>Reparto:</strong> {movie.cast.join(', ')}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {movie.synopsis}
                          </p>
                        </div>

                        {/* Showtimes */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 font-['Dosis']">
                            Horarios para {dates.find(d => d.value === selectedDate)?.label}:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {movie.showtimes[selectedDate]?.map((time) => (
                              <button
                                key={time.time + '-' + time.date}
                                onClick={() => handleBuyTickets(movie.title, time)}
                                className="bg-[#DD003F] hover:bg-[#c70039] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-1"
                              >
                                <Ticket className="h-3 w-3" />
                                <span>{time.time}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4">
                          <button
                            onClick={() => handleWatchTrailer(movie.title)}
                            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-colors duration-300 bg-[#23272b] text-white hover:bg-[#343a40] md:min-w-[180px] md:text-lg"
                          >
                            <Play className="h-5 w-5 md:mr-2" />
                            <span>Ver Tráiler</span>
                          </button>
                          <button
                            onClick={() => handleBuyTickets(movie.title, 'general')}
                            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-colors duration-300 bg-[#F5B021] text-[#23272b] hover:bg-yellow-400 md:min-w-[180px] md:text-lg shadow-md"
                          >
                            <Ticket className="h-5 w-5 md:mr-2" />
                            <span>Comprar Entradas</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-[#1a1d20]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-['Dosis']">
                Información <span className="text-[#DD003F]">Importante</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="cinema-card p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3 font-['Dosis']">
                    Horarios y Reservas
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Las funciones comienzan puntualmente</li>
                    <li>• Recomendamos llegar 15 minutos antes</li>
                    <li>• Las reservas se mantienen hasta 10 minutos antes de la función</li>
                    <li>• Descuentos especiales para estudiantes los miércoles</li>
                  </ul>
                </div>
                <div className="cinema-card p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-3 font-['Dosis']">
                    Precios y Promociones
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Entrada general: $300</li>
                 
                    <li>• Miembros VIP: 20% descuento</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cartelera;