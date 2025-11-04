import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function SenaLandingPage() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    mensaje: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    setShowNotification(true);
    setFormData({ nombres: '', apellidos: '', mensaje: '' });
    
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 duration-300">
          <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-80">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">¡Éxito!</p>
              <p className="text-sm">Su mensaje fue enviado con éxito</p>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-white border-b-4 border-green-600 py-6 shadow-sm">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 border-2 border-green-600 rounded-full mt-1 bg-green-50"></div>
            <div>
              <h1 className="text-xl font-normal tracking-wide text-gray-800">INICIO PROGRAMAS CONTACTO</h1>
              <p className="text-sm text-green-700 mt-1 italic font-medium">servicio nacional de aprendizaje</p>
              <p className="text-sm text-green-600 italic">CGMLTI</p>
              <p className="text-sm text-green-600 italic">BOGOTÁ</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* Programs Grid */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-lg font-medium text-gray-800">ADSO</span>
          </div>
          
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-base font-medium text-gray-800 text-center">REDES DE<br/>DATOS</span>
          </div>
          
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-base font-medium text-gray-800 text-center">ANIMACIÓN 3D</span>
          </div>
          
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-lg font-medium text-gray-800">LOGÍSTICA</span>
          </div>
          
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-lg font-medium text-gray-800">MERCADEO</span>
          </div>
          
          <div className="bg-white border-2 border-green-500 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-green-50 hover:border-green-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <span className="text-lg font-medium text-gray-800">SISTEMAS</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border-2 border-green-500 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-medium text-center mb-8 text-gray-800">CONTACTO</h2>
          
          <div className="space-y-5 max-w-md mx-auto">
            <div>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                placeholder="NOMBRES"
                className="w-full px-4 py-3 border-2 border-green-400 rounded-md outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 text-gray-800 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                placeholder="APELLIDOS"
                className="w-full px-4 py-3 border-2 border-green-400 rounded-md outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 text-gray-800 transition-all"
              />
            </div>

            <div>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="MENSAJE"
                rows="5"
                className="w-full px-4 py-3 border-2 border-green-400 rounded-md outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 resize-none text-gray-800 transition-all"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="px-12 py-3 border-2 border-green-600 rounded-md bg-green-600 hover:bg-green-700 hover:border-green-700 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}