import { useState } from "react";
import { Menu, X, Heart, Shield, Award, Sparkles, MapPin, Phone, Instagram, Facebook } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenStats: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenStats }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-dra" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Antes y Después", href: "#casos-reales" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Blog Dental", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand: Professional Polish design cues */}
          <a href="#inicio" className="flex flex-col group cursor-pointer">
            <h1 className="text-xl sm:text-2xl font-light tracking-[0.15em] text-slate-900 uppercase leading-none transition-colors group-hover:text-amber-800">
              Sandra Milena
            </h1>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-amber-700 ml-[2px] uppercase">
              TORRES GÓMEZ · ODONTOLOGÍA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-wider text-slate-600 hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700/30"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-3 text-slate-400 hover:text-slate-600 mr-2">
              <a
                href="https://www.instagram.com/odontosmilesandra?igsh=MTE3b2NqaHhyaHV5cg=="
                target="_blank"
                rel="no-referrer"
                className="hover:text-amber-700 transition-colors"
                title="Siguenos en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/17dVALTAce/?mibextid=wwXIfr"
                target="_blank"
                rel="no-referrer"
                className="hover:text-amber-700 transition-colors"
                title="Siguenos en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            
            <button
              onClick={onOpenConsultation}
              className="bg-slate-900 text-white hover:bg-amber-800 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="md:hidden bg-slate-900 text-white hover:bg-amber-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              Cita
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-fade-in py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-amber-800 py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-4 pt-2 border-t border-slate-100">
              <a
                href="https://www.instagram.com/odontosmilesandra?igsh=MTE3b2NqaHhyaHV5cg=="
                target="_blank"
                rel="no-referrer"
                className="text-slate-500 hover:text-amber-800"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17dVALTAce/?mibextid=wwXIfr"
                target="_blank"
                rel="no-referrer"
                className="text-slate-500 hover:text-amber-800"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="bg-slate-900 text-white hover:bg-amber-800 text-center py-3 text-xs font-bold uppercase tracking-widest transition-colors w-full"
            >
              Agendar Cita Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
