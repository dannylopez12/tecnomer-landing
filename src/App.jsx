import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

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

  const [dias, setDias] = useState(0);
  const [visible, setVisible] = useState(false);
  const refStats = useRef();

  // Calcular días desde febrero 1, 2021
  useEffect(() => {
    const inicio = new Date('2021-02-01');
    const hoy = new Date();
    const diferencia = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
    setDias(diferencia);
  }, []);

  // Scroll detection para activar contador
  useEffect(() => {
    const handleScroll = () => {
      if (refStats.current) {
        const { top } = refStats.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contadores con animación
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
  const proyectos = animateValue(24);
  const clientes = animateValue(15);

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <img src="/logo.png" alt="TecnoMer Logo" className="mx-auto mb-6 w-32" />
        <h1 className="text-4xl font-bold mb-4">Soluciones digitales para tu negocio</h1>
        <p className="text-lg">Sistemas de caja, apps móviles y bots automatizados</p>
      </section>

      {/* Servicios */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Desarrollo de sistemas de facturación y punto de venta</p>
          </div>
          <div>
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Aplicaciones móviles personalizadas</p>
          </div>
          <div>
            <FaCheckCircle className="text-purple-600 text-4xl mx-auto mb-2" />
            <p>Chatbots automatizados para atención al cliente</p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section ref={refStats} className="bg-white py-20 text-center">
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
            <p className="text-4xl font-bold">{proyectos}</p>
            <p className="mt-1 uppercase text-sm">Proyectos terminados</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{clientes}</p>
            <p className="mt-1 uppercase text-sm">Clientes satisfechos</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg shadow-md p-4 hover:scale-105 transition-transform"
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
      <section className="bg-gray-100 py-16 px-6 text-center">
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
    </div>
  );
}

export default App;
