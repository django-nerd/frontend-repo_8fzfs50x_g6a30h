export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_40%),_radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_40%)]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">Nuova apertura · 19 Ottobre 2025</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Il tuo quartier generale per TCG, Boardgame, RPG e Fumetti
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Nel cuore della Valconca: uno spazio grande, accogliente e perfetto per imparare, giocare e incontrare nuovi amici. Lorcana, Magic: The Gathering, One Piece TCG e tanto altro!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#eventi" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">
                Prossimi tornei
              </a>
              <a href="#contatti" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold ring-1 ring-gray-200 hover:bg-gray-50">
                Vieni a trovarci
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-[1rem] bg-white grid grid-cols-2 gap-2 p-3">
                <div className="rounded-lg bg-indigo-50"/>
                <div className="rounded-lg bg-pink-50"/>
                <div className="rounded-lg bg-emerald-50"/>
                <div className="rounded-lg bg-violet-50"/>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Immagini illustrative – possiamo aggiungere foto reali del negozio in seguito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
