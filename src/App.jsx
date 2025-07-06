import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Cartelera from '@/pages/Cartelera';
import CompraEntradas from '@/pages/CompraEntradas';
import Noticias from '@/pages/Noticias';
import Membresias from '@/pages/Membresias';
import SobreNosotros from '@/pages/SobreNosotros';
import Contacto from '@/pages/Contacto';
import FAQ from '@/pages/FAQ';
import AdminPanel from '@/pages/AdminPanel';
import ToastSimple from '@/components/ui/ToastSimple';

function App() {
  const [toast, setToast] = React.useState({ show: false, message: '' });
  const showToast = (message = 'Función no implementada...') => setToast({ show: true, message });
  const hideToast = () => setToast({ show: false, message: '' });

  return (
    <Router>
      <div className="min-h-screen bg-brand-background text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home showToast={showToast} />} />
            <Route path="/cartelera" element={<Cartelera showToast={showToast} />} />
            <Route path="/compra-entradas" element={<CompraEntradas showToast={showToast} />} />
            <Route path="/noticias" element={<Noticias showToast={showToast} />} />
            <Route path="/membresias" element={<Membresias showToast={showToast} />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto showToast={showToast} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin" element={<AdminPanel showToast={showToast} />} />
          </Routes>
        </main>
        <Footer />
        <ToastSimple show={toast.show} onClose={hideToast} message={toast.message} />
      </div>
    </Router>
  );
}

export default App;
