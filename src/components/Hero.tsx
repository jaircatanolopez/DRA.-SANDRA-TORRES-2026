import { Sparkles, Star, ChevronDown, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[85vh] lg:h-[80vh] flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-slate-100 bg-[#FDFDFD]">
      
      {/* Left Content Column (Professional Polish Layout) */}
      <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center space-y-8 bg-gradient-to-br from-white to-[#F7F9FB]">
        <div className="space-y-4 animate-fade-in">
          
          {/* Subtitle with gold accent line as designed in the theme */}
          <div className="flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-amber-700 block"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              Odontología Estética en Kennedy, Bogotá
            </span>
          </div>

          {/* Core SEO and high-appeal Display Title in Serif */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.12] text-slate-900 tracking-tight">
            Transformamos sonrisas con <span className="italic text-amber-800 font-normal">precisión clínica</span> y arte dental.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-light">
            Odontología integral y neurofocal avanzada con la Dra. Sandra Milena Torres Gómez. Más de 20 años de trayectoria médica dedicados a restaurar la salud dental preventivamente y esculpir diseños de sonrisa exclusivos de alto nivel.
          </p>
        </div>

        {/* Local authority bullet markers to satisfy bullet indicators of experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md text-slate-700">
          <div className="flex items-center space-x-2 text-xs font-medium">
            <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Enfoque Integral & Neurofocal</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-medium">
            <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Atención Cálida y Humana</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-medium">
            <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Equipos Clínicos Modernos</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-medium">
            <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Materiales de Alta Gama</span>
          </div>
        </div>

        {/* Dynamic Social Validation Group */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Paciente" referrerPolicy="no-referrer" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Paciente" referrerPolicy="no-referrer" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Paciente" referrerPolicy="no-referrer" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-800 shadow-sm">
              +1K
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-amber-500 text-xs tracking-tight">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Pacientes Felices en Kennedy y Bogotá
            </span>
          </div>
        </div>

        {/* CTA Actions Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button
            onClick={onOpenConsultation}
            className="bg-slate-900 text-white hover:bg-amber-800 text-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Reservar Valoración Gratis
          </button>
          
          <a
            href="#especialidades"
            className="inline-flex items-center justify-center space-x-2 text-slate-600 hover:text-amber-800 py-3 text-xs font-bold uppercase tracking-widest transition-colors group cursor-pointer"
          >
            <span>Explorar Tratamientos</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      {/* Right Visual Image & Custom Overlay Cards */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 bg-slate-100 shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')",
            filter: "grayscale(15%) brightness(0.95)"
          }}
        ></div>
        
        {/* Shadow Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/40 lg:via-transparent lg:to-transparent"></div>

        {/* Featured Speciality Box */}
        <div className="absolute top-8 right-8 sm:top-12 sm:right-12 bg-white/90 backdrop-blur-md p-6 border border-white/50 shadow-2xl max-w-[280px] animate-fade-in font-sans">
          <p className="text-[10px] uppercase font-black text-amber-700 mb-1.5 tracking-widest">
            Servicio Destacado
          </p>
          <h3 className="text-xl font-serif font-semibold text-slate-950 mb-2">
            Diseño de Sonrisa Digital
          </h3>
          <p className="text-[11px] text-slate-600 leading-relaxed mb-4 italic font-light">
            Esculpimos sonrisas armónicas e impecables de acuerdo a tus simetrías faciales con resinas o porcelanas de alta resistencia.
          </p>
          <div className="h-[1px] w-full bg-slate-200/60 mb-3"></div>
          <a 
            href="#especialidades" 
            className="text-[10px] uppercase text-slate-800 hover:text-amber-700 font-bold tracking-widest inline-flex items-center gap-1 transition-colors"
          >
            Saber Más &rarr;
          </a>
        </div>
        
        {/* Floating Local SEO Authority Badge */}
        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-0 lg:-translate-x-1/2 bg-slate-900 text-white p-5 shadow-2xl flex items-center space-x-4 z-10 border-l-4 border-amber-600">
          <div className="text-3xl sm:text-4xl font-serif text-amber-400 font-medium">20+</div>
          <div className="text-[10px] uppercase tracking-[0.15em] font-light leading-tight">
            Años de Experiencia<br />
            <span className="font-bold text-amber-200">Clínica Profesional</span>
          </div>
        </div>
      </div>

    </section>
  );
}
