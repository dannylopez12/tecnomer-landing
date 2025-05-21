import React from 'react';
import './index.css';
import { FaCheckCircle, FaStar, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

function App() {
  const testimonios = [
    {
      nombre: 'María Fernández',
      comentario: '¡Excelente servicio! Me ayudaron con mi sistema de facturación personalizado.',
      estrellas: 5
    },
    {
      nombre: 'Carlos Ruiz',
      comentario: 'El chatbot me aumentó las ventas un 40%. ¡Muy recomendable!',
      estrellas: 5
    },
    {
      nombre: 'Lucía Ortega',
      comentario: 'El equipo de TecnoMer fue rápido y profesional.',
      estrellas: 4
    }
  ];

 const proyectos = [
  {
    titulo: 'Bot de WhatsApp para Ventas',
    descripcion: 'Asistente virtual que atiende clientes y automatiza ventas.',
    imagen: '/chatbot-ventas.png' // Ruta relativa desde /public
  },
  {
    titulo: 'App de Delivery',
    descripcion: 'Pedidos online para restaurantes con pagos integrados.',
    imagen: '/app-delivery.png' // ← Aquí puedes subir otra imagen a /public
  },
  {
    titulo: 'Sistema de Caja',
    descripcion: 'Control de ventas, inventario y reportes desde cualquier dispositivo.',
    imagen: '/sistema-caja.png' // ← También deberás subir esta
  }
];

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-white text-black py-16 px-6 text-center animate-fade-in">
        <img src="/logo.png" alt="TecnoMer Logo" className="mx-auto mb-6 w-32 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 animate-bounce">Soluciones digitales para tu negocio</h1>
        <p className="text-lg">Sistemas de caja, apps móviles y bots automatizados</p>
      </section>

      {/* Servicios */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 animate-fade-in">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="transform hover:scale-105 transition duration-500">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Desarrollo de sistemas de facturación y punto de venta</p>
          </div>
          <div className="transform hover:scale-105 transition duration-500">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Aplicaciones móviles personalizadas</p>
          </div>
          <div className="transform hover:scale-105 transition duration-500">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Chatbots automatizados para atención al cliente</p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {proyectos.map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition">
              <img src={p.imagen} alt={p.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{p.titulo}</h3>
                <p>{p.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-2">
                {[...Array(t.estrellas)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="italic">"{t.comentario}"</p>
              <p className="mt-2 font-semibold text-purple-700">- {t.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <form
          action="https://formspree.io/f/xpzvjnzy"
          method="POST"
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} TecnoMer. Todos los derechos reservados.
      </footer>

      {/* Botones flotantes */}
      <a
        href="https://wa.me/593988673679"
        target="_blank"
        rel="noopener noreferrer"
        title="Chatea por WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      <a
        href="https://instagram.com/tecnomer.ec"
        target="_blank"
        rel="noopener noreferrer"
        title="Visita nuestro Instagram"
        className="fixed bottom-6 right-20 z-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaInstagram className="text-2xl" />
      </a>

      <a
        href="tel:+593988673679"
        title="Llamar a TecnoMer"
        className="fixed bottom-6 right-36 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaPhone className="text-2xl" />
      </a>
    </div>
  );
}

export default App;
