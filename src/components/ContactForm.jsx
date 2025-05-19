export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contáctanos</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Tu correo" className="w-full p-3 border rounded" />
        <textarea placeholder="Tu mensaje" className="w-full p-3 border rounded"></textarea>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800" type="submit">Enviar</button>
      </form>
    </section>
  );
}