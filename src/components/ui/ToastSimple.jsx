import React, { useEffect } from 'react';

const ToastSimple = ({ show, onClose, message = 'Función no implementada...' }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#212529] text-white px-6 py-3 rounded-lg shadow-lg border border-[#DD003F] animate-fade-in">
      {message}
    </div>
  );
};

export default ToastSimple; 