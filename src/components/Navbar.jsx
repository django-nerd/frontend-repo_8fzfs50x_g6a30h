import { Menu, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold">G</div>
            <div>
              <p className="font-semibold text-gray-900 leading-tight">Geek Valley</p>
              <p className="text-xs text-gray-500 leading-tight flex items-center gap-1"><MapPin size={14}/> Morciano di Romagna (RN)</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#tcg" className="hover:text-indigo-600">TCG</a>
            <a href="#boardgames" className="hover:text-indigo-600">Giochi da Tavolo</a>
            <a href="#rpg" className="hover:text-indigo-600">Giochi di Ruolo</a>
            <a href="#manga" className="hover:text-indigo-600">Manga & Fumetti</a>
            <a href="#eventi" className="hover:text-indigo-600">Eventi</a>
            <a href="#contatti" className="hover:text-indigo-600">Contatti</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" aria-label="Apri menu">
            <Menu size={22}/>
          </button>
        </div>
      </div>
    </header>
  );
}
