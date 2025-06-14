import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "NUEVA COLECCIÓN",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    button: "Comprar ahora",
  },
  {
    title: "BÁSICOS MODERNOS",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    button: "Ver colección",
  },
  {
    title: "ESTILO ATEMPORAL",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    button: "Descubrir más",
  },
];

const cascadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col font-serif">
      {/* Drawer menú mobile con animación de cierre */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 z-50 w-3/4 max-w-xs h-full bg-white shadow-xl flex flex-col p-8 gap-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-extrabold text-3xl tracking-widest select-none">ZARA</span>
                <button
                  className="text-3xl"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                <a href="#" className="uppercase tracking-wide text-lg font-semibold hover:opacity-60 transition" onClick={() => setMenuOpen(false)}>Hombre</a>
                <a href="#" className="uppercase tracking-wide text-lg font-semibold hover:opacity-60 transition" onClick={() => setMenuOpen(false)}>Mujer</a>
                <a href="#" className="uppercase tracking-wide text-lg font-semibold hover:opacity-60 transition" onClick={() => setMenuOpen(false)}>Niños</a>
              </nav>
            </motion.div>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur border-b border-neutral-200 flex justify-between items-center px-8 py-4 transition-shadow duration-300 shadow-none">
        {/* Logo */}
        <span className="font-extrabold text-4xl md:text-5xl tracking-widest select-none">
          ZARA
        </span>
        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="uppercase tracking-wide text-base font-normal bg-transparent border-none shadow-none hover:opacity-60 transition">
            Hombre
          </a>
          <a href="#" className="uppercase tracking-wide text-base font-normal bg-transparent border-none shadow-none hover:opacity-60 transition">
            Mujer
          </a>
          <a href="#" className="uppercase tracking-wide text-base font-normal bg-transparent border-none shadow-none hover:opacity-60 transition">
            Niños
          </a>
        </nav>
        {/* Iconos a la derecha */}
        <div className="flex items-center gap-6">
          {/* Carrito */}
          <button className="hover:scale-110 transition" aria-label="Carrito">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M10 17h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z"/>
            </svg>
          </button>
          {/* Menú hamburguesa solo en móvil */}
          <button
            className="md:hidden hover:scale-110 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2">
              <rect y="8" width="28" height="2" rx="1"/>
              <rect y="16" width="28" height="2" rx="1"/>
              <rect y="24" width="28" height="2" rx="1"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28">
        {/* Hero principal con animación suave */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center mb-14"
        >
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80"
            alt="Zara Main"
            className="rounded-2xl shadow-lg w-full max-w-4xl aspect-[16/7] object-cover mb-10 transition-transform duration-500 ease-out hover:scale-105 hover:shadow-xl"
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-5 tracking-tighter select-none">
            ELEGANCIA<br />MINIMALISTA
          </h1>
          <p className="text-lg md:text-2xl text-neutral-600 text-center max-w-xl mb-6">
            Descubre la nueva colección Primavera/Verano inspirada en lo atemporal, líneas puras y un look sofisticado.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, opacity: 0.85, boxShadow: "0px 8px 24px rgba(0,0,0,0.10)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-black text-white uppercase px-8 py-3 rounded-2xl font-semibold tracking-wider shadow hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-black"
          >
            Comprar ahora
          </motion.button>
        </motion.section>

        {/* Secciones en cascada con microanimaciones en imágenes y botones */}
        <div className="w-full flex flex-col gap-20 items-center">
          {items.map((item, i) => (
            <motion.section
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cascadeVariants}
              className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                whileHover={{ scale: 1.06, boxShadow: "0px 12px 32px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl shadow-md w-full md:w-1/2 aspect-[4/5] object-cover cursor-pointer select-none transition-transform duration-500 ease-out"
              />
              <div className="flex flex-col gap-4 items-start md:items-start md:w-1/2 px-2">
                <h2 className="text-3xl md:text-5xl font-bold select-none">{item.title}</h2>
                <motion.button
                  whileHover={{ scale: 1.08, opacity: 0.85 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-4 bg-black text-white px-7 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {item.button}
                </motion.button>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-200 py-6 flex justify-center items-center text-neutral-400 text-xs uppercase tracking-wider select-none">
        © {new Date().getFullYear()} | Proyecto Zara Clone
      </footer>
    </div>
  );
}

export default App;
