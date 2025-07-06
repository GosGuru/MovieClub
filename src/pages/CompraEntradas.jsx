import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, Users, CreditCard, MapPin, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const CompraEntradas = ({ showToast }) => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState({ general: 1 });

  const movies = [
    {
      id: 1,
      title: 'Elio (Disney • Pixar)',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: [
        { time: '14:00', date: '2025-07-06', available: true },
        { time: '14:00', date: '2025-07-07', available: true },
        { time: '14:00', date: '2025-07-08', available: true }
      ],
      image: '/assets/elio.jpeg'
    },
    {
      id: 2,
      title: 'Lilo & Stitch',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: [
        { time: '16:00', date: '2025-07-06', available: true },
        { time: '16:00', date: '2025-07-07', available: true },
        { time: '16:00', date: '2025-07-08', available: true }
      ],
      image: '/assets/lilo-stitch.jpeg'
    },
    {
      id: 3,
      title: 'Cómo entrenar a tu dragón',
      genre: 'Animación',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: [
        { time: '18:00', date: '2025-07-06', available: true },
        { time: '18:00', date: '2025-07-07', available: true },
        { time: '18:00', date: '2025-07-08', available: true }
      ],
      image: '/assets/como-entrenar-a-tu-dragon.png'
    },
    {
      id: 4,
      title: 'Jurassic World',
      genre: 'Aventura',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: [
        { time: '20:00', date: '2025-07-06', available: true },
        { time: '20:00', date: '2025-07-07', available: true },
        { time: '20:00', date: '2025-07-08', available: true },
        { time: '22:30', date: '2025-07-07', available: true },
        { time: '22:30', date: '2025-07-08', available: true }
      ],
      image: '/assets/jurassic-world.webp'
    },
    {
      id: 5,
      title: 'M3GAN 2.0',
      genre: 'Terror',
      duration: 'TBA',
      rating: 'TBA',
      showtimes: [
        { time: '22:30', date: '2025-07-06', available: true }
      ],
      image: '/assets/m3gan-2.jpg'
    }
  ];

  // Simulación de mapa de asientos (8 filas x 12 asientos)
  const generateSeats = () => {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const occupiedSeats = ['A5', 'A6', 'B8', 'C3', 'C4', 'D10', 'E7', 'F2', 'F11', 'G5', 'G6', 'G7'];
    
    rows.forEach(row => {
      for (let i = 1; i <= 12; i++) {
        const seatId = `${row}${i}`;
        seats.push({
          id: seatId,
          row,
          number: i,
          isOccupied: occupiedSeats.includes(seatId),
          isSelected: selectedSeats.includes(seatId)
        });
      }
    });
    
    return seats;
  };

  const seats = generateSeats();

  const ticketPrices = {
    general: 300
  };

  const calculateTotal = () => {
    return ticketQuantity.general * ticketPrices.general;
  };

  const handleSeatClick = (seatId) => {
    const seat = seats.find(s => s.id === seatId);
    if (seat.isOccupied) return;

    const totalTickets = ticketQuantity.general;
    
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < totalTickets) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedMovie) {
      showToast('Selecciona una película.');
      return;
    }
    if (currentStep === 2 && !selectedShowtime) {
      showToast();
      return;
    }
    if (currentStep === 3) {
      const totalTickets = ticketQuantity.general;
      if (selectedSeats.length !== totalTickets) {
        showToast();
        return;
      }
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePurchase = () => {
    showToast();
    return;
  };

  const steps = [
    { number: 1, title: 'Película', completed: currentStep > 1 },
    { number: 2, title: 'Horario', completed: currentStep > 2 },
    { number: 3, title: 'Asientos', completed: currentStep > 3 },
    { number: 4, title: 'Pago', completed: false }
  ];

  useEffect(() => {
    if (location.state && location.state.movieId && location.state.showtime) {
      const movie = movies.find(m => m.id === location.state.movieId);
      if (movie) {
        setSelectedMovie(movie);
        setSelectedShowtime(movie.showtimes.find(s => s.time === location.state.showtime));
        setCurrentStep(2);
      }
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Compra de Entradas - Moviclub Durazno</title>
        <meta name="description" content="Compra tus entradas online para Moviclub Durazno. Selecciona película, horario y asientos. Proceso rápido y seguro." />
      </Helmet>

      <div className="min-h-screen bg-[#212529] pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
          {/* Fondo de cine Unsplash */}
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" 
            alt="Sala de cine moderna" 
            className="absolute inset-0 w-full h-full object-cover opacity-40" 
            style={{zIndex: 0, objectPosition: 'center 43%'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212529]/90 to-[#343a40]/80" style={{zIndex: 1}}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Dosis'] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Compra de <span className="text-[#DD003F]">Entradas</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Reserva tus asientos y disfruta de la mejor experiencia cinematográfica
              </p>
            </motion.div>

            {/* Progress Steps */}
            <div className="flex justify-center">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:space-x-4 w-full max-w-2xl">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 mx-auto md:mx-0 ${
                      currentStep === step.number
                        ? 'bg-[#DD003F] border-[#DD003F] text-white'
                        : step.completed
                        ? 'bg-[#DCF836] border-[#DCF836] text-[#212529]'
                        : 'border-gray-500 text-gray-500'
                    }`}>
                      {step.completed ? <Check className="h-5 w-5" /> : step.number}
                    </div>
                    <span className={`mt-2 md:mt-0 md:ml-2 text-sm font-medium text-center md:text-left ${
                      currentStep === step.number ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`md:w-8 md:h-0.5 md:mx-4 w-0.5 h-8 my-2 md:my-0 md:w-8 md:h-0.5 ${
                        step.completed ? 'bg-[#DCF836]' : 'bg-gray-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Step 1: Movie Selection */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8 font-['Dosis']">
                  Selecciona una película
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {movies.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => setSelectedMovie(movie)}
                      className={`movie-card cursor-pointer transition-all duration-300 ${
                        selectedMovie?.id === movie.id ? 'ring-2 ring-[#DD003F] scale-105' : ''
                      }`}
                    >
                      <div className="relative">
                        <img  
                          className="w-full h-64 object-cover"
                          alt={movie.title}
                          src={movie.image} />
                        <div className="absolute top-4 right-4 bg-[#DCF836] text-[#212529] px-2 py-1 rounded-lg font-bold text-sm">
                          ⭐ {movie.rating}
                        </div>
                        {selectedMovie?.id === movie.id && (
                          <div className="absolute inset-0 bg-[#DD003F]/20 flex items-center justify-center">
                            <div className="bg-[#DD003F] text-white p-3 rounded-full">
                              <Check className="h-6 w-6" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2 font-['Dosis']">
                          {movie.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>{movie.genre}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {movie.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Showtime Selection */}
            {currentStep === 2 && selectedMovie && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-400 hover:text-white mr-4"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-white font-['Dosis']">
                    Selecciona horario para {selectedMovie.title}
                  </h2>
                </div>

                <div className="cinema-card p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <Calendar className="h-5 w-5 text-[#DD003F] mr-2" />
                    <span className="text-white font-semibold">Sábado 20 de Enero, 2025</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedMovie.showtimes.map((showtime, index) => (
                      <button
                        key={index}
                        onClick={() => showtime.available && setSelectedShowtime(showtime)}
                        disabled={!showtime.available}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          selectedShowtime?.time === showtime.time
                            ? 'border-[#DD003F] bg-[#DD003F]/20 text-white'
                            : showtime.available
                            ? 'border-gray-600 hover:border-[#DD003F] text-gray-300 hover:text-white'
                            : 'border-gray-700 text-gray-500 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div className="text-2xl font-bold font-['Dosis']">
                          {showtime.time}
                        </div>
                        <div className="text-sm">
                          {showtime.available ? 'Disponible' : 'Agotado'}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Ticket Quantity Selection */}
                  {selectedShowtime && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 pt-8 border-t border-gray-600"
                    >
                      <h3 className="text-lg font-semibold text-white mb-4 font-['Dosis']">
                        Cantidad de entradas
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="cinema-card p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium">General</span>
                            <span className="text-[#DCF836] font-bold">$300</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => setTicketQuantity(prev => ({ ...prev, general: Math.max(1, prev.general - 1) }))}
                              className="w-8 h-8 bg-[#DD003F] text-white rounded-full flex items-center justify-center hover:bg-[#c70039] transition-colors"
                            >
                              -
                            </button>
                            <span className="text-white font-bold w-8 text-center">{ticketQuantity.general}</span>
                            <button
                              onClick={() => setTicketQuantity(prev => ({ ...prev, general: prev.general + 1 }))}
                              className="w-8 h-8 bg-[#DD003F] text-white rounded-full flex items-center justify-center hover:bg-[#c70039] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Seat Selection */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-400 hover:text-white mr-4"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-white font-['Dosis']">
                    Selecciona tus asientos
                  </h2>
                </div>

                <div className="cinema-card p-8 rounded-xl">
                  {/* Screen */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-[#DD003F] to-[#c70039] h-2 rounded-full mb-2"></div>
                    <div className="text-center text-gray-400 text-sm">PANTALLA</div>
                  </div>

                  {/* Seat Map */}
                  <div className="mb-8">
                    <div className="grid grid-cols-12 gap-2 max-w-4xl mx-auto">
                      {seats.map((seat) => (
                        <button
                          key={seat.id}
                          onClick={() => handleSeatClick(seat.id)}
                          disabled={seat.isOccupied}
                          className={`w-8 h-8 rounded-t-lg text-xs font-bold transition-all duration-200 ${
                            seat.isOccupied
                              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              : seat.isSelected
                              ? 'bg-[#DD003F] text-white scale-110'
                              : 'bg-[#2a2f35] text-gray-300 hover:bg-[#343a40] border border-gray-600'
                          }`}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                    
                    {/* Row Labels */}
                    <div className="flex justify-center mt-4">
                      <div className="grid grid-cols-8 gap-8 text-gray-400 text-sm">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
                          <span key={row} className="text-center">{row}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#2a2f35] border border-gray-600 rounded-t"></div>
                      <span className="text-gray-400 text-sm">Disponible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#DD003F] rounded-t"></div>
                      <span className="text-gray-400 text-sm">Seleccionado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-600 rounded-t"></div>
                      <span className="text-gray-400 text-sm">Ocupado</span>
                    </div>
                  </div>

                  {/* Selected Seats Info */}
                  {selectedSeats.length > 0 && (
                    <div className="bg-[#1a1d20] p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2 font-['Dosis']">
                        Asientos seleccionados:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSeats.map(seatId => (
                          <span key={seatId} className="bg-[#DD003F] text-white px-3 py-1 rounded-full text-sm">
                            {seatId}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-8">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-gray-400 hover:text-white mr-4"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-white font-['Dosis']">
                    Resumen y Pago
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Order Summary */}
                  <div className="cinema-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 font-['Dosis']">
                      Resumen de tu compra
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-4">
                        <img  
                          className="w-16 h-20 object-cover rounded"
                          alt={selectedMovie.title}
                          src={selectedMovie.image} />
                        <div>
                          <h4 className="text-white font-semibold">{selectedMovie.title}</h4>
                          <p className="text-gray-400 text-sm">{selectedMovie.genre} • {selectedMovie.duration}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-600 pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400">Fecha y hora:</span>
                          <span className="text-white">Sáb 20 Ene, {selectedShowtime.time}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400">Asientos:</span>
                          <span className="text-white">{selectedSeats.join(', ')}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400">Cantidad:</span>
                          <span className="text-white">
                            {ticketQuantity.general} entradas
                          </span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-600 pt-4">
                        <div className="flex items-center justify-between text-xl font-bold">
                          <span className="text-white">Total:</span>
                          <span className="text-[#DCF836]">${calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="cinema-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 font-['Dosis']">
                      Información de pago
                    </h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Número de tarjeta
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Vencimiento
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Nombre del titular
                        </label>
                        <input
                          type="text"
                          placeholder="Juan Pérez"
                          className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="juan@email.com"
                          className="w-full bg-[#1a1d20] text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#DD003F] transition-colors duration-300"
                        />
                      </div>
                      
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="w-full cinema-button flex items-center justify-center space-x-2 mt-6"
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Pagar ${calculateTotal()}</span>
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    currentStep === 1
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Anterior</span>
                </button>
                
                <button
                  onClick={handleNextStep}
                  className="cinema-button flex items-center space-x-2"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CompraEntradas;