import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Sections from "./components/Sections";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Highlights />
      <Sections />
      <Events />
      <Contact />
      <footer className="py-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            © 2025 Geek Valley – Negozio di giochi a Morciano di Romagna (RN). Nel cuore della Valconca.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
