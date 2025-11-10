import { CalendarDays, MapPin, Clock } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Tornei TCG in arrivo",
      date: "Novembre 2025",
      time: "Weekend",
      place: "In negozio",
      desc: "Stiamo preparando tornei di Lorcana, Magic e One Piece TCG. Seguici per calendario e iscrizioni!",
    },
  ];

  return (
    <section id="eventi" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Eventi & Tornei</h2>
          <p className="mt-2 text-gray-600">A breve ospiteremo tornei dei principali giochi di carte collezionabili (TCG). Tavoli pronti per tutti!</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="p-6 rounded-2xl ring-1 ring-black/5 bg-white/70 backdrop-blur">
              <h3 className="font-semibold text-gray-900">{e.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{e.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-700">
                <span className="inline-flex items-center gap-1"><CalendarDays size={16}/>{e.date}</span>
                <span className="inline-flex items-center gap-1"><Clock size={16}/>{e.time}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={16}/>{e.place}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
