function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-serif">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-neutral-200 flex justify-between items-center px-8 py-4">
  {/* Logo */}
  <span className="font-extrabold text-4xl md:text-5xl tracking-widest select-none">
    ZARA
  </span>
  {/* Navegación desktop */}
  <nav className="hidden md:flex items-center gap-10">
    <button className="uppercase tracking-wide hover:opacity-60 transition">Hombre</button>
    <button className="uppercase tracking-wide hover:opacity-60 transition">Mujer</button>
    <button className="uppercase tracking-wide hover:opacity-60 transition">Niños</button>
  </nav>
  {/* Iconos a la derecha */}
  <div className="flex items-center gap-6">
    {/* Carrito */}
    <button className="hover:scale-110 transition">
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 17h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z"/>
      </svg>
    </button>
    {/* Menú hamburguesa solo en móvil */}
    <button className="md:hidden hover:scale-110 transition">
      <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2">
        <rect y="8" width="28" height="2" rx="1"/>
        <rect y="16" width="28" height="2" rx="1"/>
        <rect y="24" width="28" height="2" rx="1"/>
      </svg>
    </button>
  </div>
</header>


      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Bienvenido a tu clon de Zara</h1>
        <p className="text-lg text-neutral-600 text-center max-w-xl">
          Aquí irá la landing page minimalista y elegante, ¡personalízala a tu gusto!
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-200 py-6 flex justify-center items-center text-neutral-400 text-xs uppercase tracking-wider">
        © {new Date().getFullYear()} | Proyecto Zara Clone
      </footer>
    </div>
  );
}

export default App;
