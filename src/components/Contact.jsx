import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Passa a trovarci</h2>
            <p className="mt-2 text-gray-600">Siamo nel centro della Valconca, facilmente raggiungibili da tutta la zona.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><MapPin size={18}/> Via Pascoli, 15 · 47833 Morciano di Romagna (RN)</li>
              <li className="flex items-center gap-2"><Phone size={18}/> +39 000 000 000</li>
              <li className="flex items-center gap-2"><Mail size={18}/> info@geekvalley.example</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">Orari e contatti reali possono essere aggiornati in seguito.</p>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-sm">
            <iframe
              title="Mappa – Via Pascoli 15, Morciano di Romagna"
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Via%20Pascoli%2C%2015%2C%2047833%20Morciano%20di%20Romagna%20RN&output=embed"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
