import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Film, Calendar, BarChart2, Edit, PlusCircle, Trash2 } from 'lucide-react';

const AdminPanel = ({ showToast }) => {
    // Datos de ejemplo
    const movies = [
        { id: 1, title: 'Dune: Parte Dos', releaseDate: '2024-02-15' },
        { id: 2, title: 'Oppenheimer', releaseDate: '2023-07-21' },
        { id: 3, title: 'Barbie', releaseDate: '2023-07-21' }
    ];

    const screenings = [
        { id: 1, movie: 'Dune: Parte Dos', room: 'Sala 1', time: '19:30', date: '2024-01-20' },
        { id: 2, movie: 'Oppenheimer', room: 'Sala 2', time: '20:00', date: '2024-01-20' },
        { id: 3, movie: 'Barbie', room: 'Sala 1', time: '16:00', date: '2024-01-20' }
    ];

    const news = [
        { id: 1, title: 'Nueva Sala Premium inaugurada', date: '2024-01-15' },
        { id: 2, title: 'Ciclo de Cine Uruguayo', date: '2024-01-10' }
    ];

    const handleAdminAction = (action) => {
        showToast();
    };

    return (
        <>
            <Helmet>
                <title>Panel de Administración - Moviclub Durazno</title>
                <meta name="description" content="Panel de administración para gestionar películas, funciones, noticias y reportes de Moviclub Durazno." />
            </Helmet>

            <div className="min-h-screen bg-[#1a1d20] pt-20">
                <section className="py-12 bg-gradient-to-r from-[#212529] to-[#343a40] relative overflow-hidden">
                    <div className="absolute inset-0 hero-pattern opacity-20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl font-bold text-white mb-2 font-['Dosis']">
                                Panel de <span className="text-[#DD003F]">Administración</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                Gestiona el contenido y las operaciones de Moviclub Durazno.
                            </p>
                        </motion.div>
                    </div>
                </section>
                
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

                            {/* Películas */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="cinema-card rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-white font-['Dosis'] flex items-center"><Film className="mr-3 text-[#DD003F]"/>Gestionar Películas</h2>
                                    <button onClick={() => handleAdminAction('Cargar película')} className="bg-[#DCF836] text-[#212529] p-2 rounded-full hover:scale-110 transition-transform">
                                        <PlusCircle className="h-5 w-5"/>
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {movies.map(movie => (
                                        <div key={movie.id} className="bg-[#1a1d20] p-3 rounded-lg flex justify-between items-center">
                                            <div>
                                                <p className="text-white font-semibold">{movie.title}</p>
                                                <p className="text-xs text-gray-400">Estreno: {movie.releaseDate}</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button onClick={() => handleAdminAction('Editar película')} className="text-gray-400 hover:text-[#DCF836]"><Edit className="h-4 w-4"/></button>
                                                <button onClick={() => handleAdminAction('Eliminar película')} className="text-gray-400 hover:text-[#DD003F]"><Trash2 className="h-4 w-4"/></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Funciones */}
                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="cinema-card rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-white font-['Dosis'] flex items-center"><Calendar className="mr-3 text-[#DD003F]"/>Programar Funciones</h2>
                                    <button onClick={() => handleAdminAction('Programar función')} className="bg-[#DCF836] text-[#212529] p-2 rounded-full hover:scale-110 transition-transform">
                                        <PlusCircle className="h-5 w-5"/>
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {screenings.map(s => (
                                        <div key={s.id} className="bg-[#1a1d20] p-3 rounded-lg flex justify-between items-center">
                                            <div>
                                                <p className="text-white font-semibold">{s.movie}</p>
                                                <p className="text-xs text-gray-400">{s.date} - {s.time} ({s.room})</p>
                                            </div>
                                             <div className="flex space-x-2">
                                                <button onClick={() => handleAdminAction('Editar función')} className="text-gray-400 hover:text-[#DCF836]"><Edit className="h-4 w-4"/></button>
                                                <button onClick={() => handleAdminAction('Eliminar función')} className="text-gray-400 hover:text-[#DD003F]"><Trash2 className="h-4 w-4"/></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            
                             {/* Noticias y Promociones */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="cinema-card rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-white font-['Dosis'] flex items-center"><Edit className="mr-3 text-[#DD003F]"/>Crear Noticias</h2>
                                    <button onClick={() => handleAdminAction('Crear noticia')} className="bg-[#DCF836] text-[#212529] p-2 rounded-full hover:scale-110 transition-transform">
                                        <PlusCircle className="h-5 w-5"/>
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {news.map(n => (
                                        <div key={n.id} className="bg-[#1a1d20] p-3 rounded-lg flex justify-between items-center">
                                            <div>
                                                <p className="text-white font-semibold">{n.title}</p>
                                                <p className="text-xs text-gray-400">Publicado: {n.date}</p>
                                            </div>
                                             <div className="flex space-x-2">
                                                <button onClick={() => handleAdminAction('Editar noticia')} className="text-gray-400 hover:text-[#DCF836]"><Edit className="h-4 w-4"/></button>
                                                <button onClick={() => handleAdminAction('Eliminar noticia')} className="text-gray-400 hover:text-[#DD003F]"><Trash2 className="h-4 w-4"/></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Reportes */}
                             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="cinema-card rounded-xl p-6 lg:col-span-2 xl:col-span-1">
                                <h2 className="text-2xl font-bold text-white font-['Dosis'] flex items-center mb-4"><BarChart2 className="mr-3 text-[#DD003F]"/>Reportes de Ventas</h2>
                                <div className="space-y-4">
                                    <div className="bg-[#1a1d20] p-4 rounded-lg">
                                        <p className="text-gray-400 text-sm">Ventas Hoy</p>
                                        <p className="text-2xl font-bold text-white">$12,540</p>
                                    </div>
                                    <div className="bg-[#1a1d20] p-4 rounded-lg">
                                        <p className="text-gray-400 text-sm">Ventas Semana</p>
                                        <p className="text-2xl font-bold text-white">$87,980</p>
                                    </div>
                                    <div className="bg-[#1a1d20] p-4 rounded-lg">
                                        <p className="text-gray-400 text-sm">Ventas Mes</p>
                                        <p className="text-2xl font-bold text-white">$350,120</p>
                                    </div>
                                    <button onClick={() => handleAdminAction('Ver reportes detallados')} className="w-full cinema-button mt-4">Ver Reportes Detallados</button>
                                </div>
                            </motion.div>
                            
                            {/* Calendario de Sesiones */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="cinema-card rounded-xl p-6 lg:col-span-2">
                                <h2 className="text-2xl font-bold text-white font-['Dosis'] flex items-center mb-4"><Calendar className="mr-3 text-[#DD003F]"/>Grilla de Sesiones (Calendario)</h2>
                                <div className="bg-[#1a1d20] p-4 rounded-lg h-64 flex items-center justify-center">
                                    <p className="text-gray-500">Visualización de calendario no implementada</p>
                                </div>
                                 <button onClick={() => handleAdminAction('Ver calendario completo')} className="w-full cinema-button-secondary mt-4">Ver Calendario Completo</button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AdminPanel;