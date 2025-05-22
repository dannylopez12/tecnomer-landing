import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { FaCheckCircle, FaStar, FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

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
      detalles: 'Este bot de WhatsApp responde consultas, da información de productos, toma pedidos y cierra ventas automáticamente 24/7. Mejora la atención al cliente, aumenta la tasa de conversión y reduce los costos de soporte.',
      video: 'https://www.youtube.com/embed/TU8iJZ3J8gA',
      imagen: '/chatbot-ventas.png'
    },
    {
      titulo: 'App de Delivery',
      descripcion: 'Pedidos online para restaurantes con pagos integrados.',
      detalles: 'Aplicación intuitiva para que tus clientes pidan desde su celular, con integración a pasarelas de pago, gestión de pedidos y rastreo de repartidores.',
      imagen: '/app-delivery.png'
    },
    {
      titulo: 'Sistema de Caja',
      descripcion: 'Control de ventas, inventario y reportes desde cualquier dispositivo.',
      detalles: 'Sistema completo de punto de venta con facturación, control de inventario, cierres de caja, reportes y acceso desde cualquier lugar con conexión a Internet.',
      imagen: '/sistema-caja.png'
    }
  ];

  const [dias, setDias] = useState(0);
  const [visible, setVisible] = useState(false);
  const refStats = useRef();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const inicio = new Date('2021-02-01');
    const hoy = new Date();
    const diferencia = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 20));
    setDias(diferencia);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (refStats.current) {
        const { top } = refStats.current.getBoundingClientRect();
        setVisible(top < window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateValue = (end, duration = 2000) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!visible) return;
      let start = 0;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setValue(end);
        } else {
          setValue(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }, [visible, end]);
    return value;
  };

  const años = animateValue(4);
  const tazas = animateValue(dias);
  const proyectosTerminados = animateValue(24);
  const clientes = animateValue(15);

  return (
    <div className="bg-white font-sans text-gray-800 relative">
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 max-w-2xl w-full rounded-lg relative animate-fadeIn">
            <button onClick={() => setModal(null)} className="absolute top-2 right-4 text-2xl">&times;</button>
            <h3 className="text-2xl font-bold mb-2">{modal.titulo}</h3>
            <p className="mb-4 text-sm text-gray-700">{modal.detalles}</p>
            {modal.video && (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64"
                  src={modal.video}
                  title="Demostración"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Botones flotantes */}
<a
  href="https://wa.me/593988673679"
  className="fixed bottom-28 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
  title="Habla con nosotros en WhatsApp"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="text-2xl" />
</a>

<a
  href="https://instagram.com/tecnomer.ec"
  className="fixed bottom-16 right-6 z-50 bg-gradient-to-br from-pink-500 to-purple-600 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition"
  title="Síguenos en Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="text-2xl" />
</a>

<a
  href="tel:+593988673679"
  className="fixed bottom-4 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
  title="Llámanos"
>
  <FaPhoneAlt className="text-xl" />
</a>


      <section className="bg-white text-black py-16 px-6 text-center">
        <img src="/logo.png" alt="TecnoMer Logo" className="mx-auto mb-6 w-32 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 animate-bounce">Soluciones digitales para tu negocio</h1>
        <p className="text-lg">Sistemas de caja, apps móviles y bots automatizados</p>
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="hover:scale-105 transition">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Desarrollo de sistemas de facturación y punto de venta</p>
          </div>
          <div className="hover:scale-105 transition">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Aplicaciones móviles personalizadas</p>
          </div>
          <div className="hover:scale-105 transition">
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Chatbots automatizados para atención al cliente</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos Recientes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {proyectos.map((p, i) => (
            <div key={i} className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer" onClick={() => setModal(p)}>
              <img src={p.imagen} alt={p.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{p.titulo}</h3>
                <p>{p.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={refStats} className="bg-gray-100 py-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-black">
          <div>
            <p className="text-4xl font-bold">{años}</p>
            <p className="mt-1 uppercase text-sm">Años de experiencia</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{tazas}</p>
            <p className="mt-1 uppercase text-sm">Tazas de café</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{proyectosTerminados}</p>
            <p className="mt-1 uppercase text-sm">Proyectos terminados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{clientes}</p>
            <p className="mt-1 uppercase text-sm">Clientes satisfechos</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
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

      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <form action="https://formspree.io/f/xpzvjnzy" method="POST" className="max-w-lg mx-auto space-y-4">
          <input type="text" name="name" placeholder="Tu nombre" required className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Tu correo" required className="w-full p-3 border border-gray-300 rounded" />
          <textarea name="message" placeholder="Tu mensaje" required rows="4" className="w-full p-3 border border-gray-300 rounded" />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Enviar</button>
        </form>
      </section>

      <footer className="bg-black text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} TecnoMer. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;

