import { Sparkles, Package, Users, Trophy } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: <Sparkles className="text-indigo-600" size={22} />,
      title: "Assortimento enorme",
      desc: "Carte collezionabili, boardgame, GdR, accessori, manga e fumetti: ordini su richiesta di qualsiasi articolo.",
    },
    {
      icon: <Users className="text-pink-600" size={22} />,
      title: "Spazio per giocare",
      desc: "Tavoli ampi per imparare e divertirsi: perfetto per nuovi giocatori e per i più esperti.",
    },
    {
      icon: <Trophy className="text-emerald-600" size={22} />,
      title: "Tornei in arrivo",
      desc: "A breve organizzeremo tornei di Lorcana, Magic: The Gathering, One Piece TCG e altri.",
    },
    {
      icon: <Package className="text-violet-600" size={22} />,
      title: "Ordini personalizzati",
      desc: "Portaci la tua lista: reperiamo prodotti anche non a scaffale, con arrivo rapido.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl ring-1 ring-black/5 bg-white/60 backdrop-blur shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center mb-3">
                {it.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
