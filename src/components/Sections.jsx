import { BookOpen, Dice5, Swords, ScrollText } from "lucide-react";

export default function Sections() {
  const categories = [
    {
      id: "tcg",
      title: "Trading Card Game",
      desc: "Lorcana, Magic: The Gathering, One Piece TCG, Pokémon e accessori per collezionisti e giocatori.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      id: "boardgames",
      title: "Giochi da Tavolo",
      desc: "Dai party game ai german strategici: prova i titoli in negozio e chiedi consigli!",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "rpg",
      title: "Giochi di Ruolo",
      desc: "Manuali, dadi, schermi del master e accessori per D&D, Pathfinder e molto altro.",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: "manga",
      title: "Manga & Fumetti",
      desc: "Le ultime uscite e i grandi classici. Ordini e arretrati disponibili.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50" id="reparti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="group">
              <div className={`relative overflow-hidden rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-sm`}> 
                <div className={`absolute inset-0 -z-10 opacity-20 bg-gradient-to-br ${c.color}`} />
                <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                <div className="mt-4 text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Scopri di più →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
