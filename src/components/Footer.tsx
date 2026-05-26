import { Award, ShieldAlert, Key } from "lucide-react";

interface FooterProps {
  onTriggerAdmin: () => void;
}

export default function Footer({ onTriggerAdmin }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 py-12 select-none z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core structure */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 text-center md:text-left">
          
          <div className="space-y-1.5">
            <h4 className="text-sm font-serif font-light text-slate-200 uppercase tracking-widest leading-none">
              Sandra Milena
            </h4>
            <span className="text-[9px] tracking-[0.25em] font-semibold text-amber-500 uppercase block">
              TORRES GÓMEZ · ODONTOLOGÍA
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10.5px] uppercase tracking-wider font-semibold">
            <a href="#inicio" className="hover:text-slate-200 transition-colors">Inicio</a>
            <a href="#sobre-dra" className="hover:text-slate-200 transition-colors">Sobre Mí</a>
            <a href="#especialidades" className="hover:text-slate-200 transition-colors">Especialidades</a>
            <a href="#casos-reales" className="hover:text-slate-200 transition-colors">Casos Reales</a>
            <a href="#contacto" className="hover:text-slate-200 transition-colors">Contacto</a>
          </div>

        </div>

        {/* Outer credit, admin utilities credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-medium gap-4">
          <div className="space-y-1 text-center sm:text-left text-slate-500 font-light lg:max-w-md">
            <p>© 2026 Dra. Sandra Milena Torres G. | Todos los derechos reservados.</p>
            <p className="text-[10px] text-slate-600">Proporcionando salud clínica y estética dental de excelencia en Kennedy, Bogotá D.C., Colombia.</p>
          </div>

          {/* Quick clinical platform link (Dentalink / Studio Oral) matches existing feature perfectly */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <a
              href="https://drasandramilenatorres.dentalink.cl/sessions/login"
              target="_blank"
              rel="no-referrer"
              className="hover:text-amber-500 transition-colors"
              title="Portal Clínico Dentalink"
            >
              Dentalink
            </a>
            <span className="text-slate-800">•</span>
            <a
              href="https://www.studioraldigital.com/"
              target="_blank"
              rel="no-referrer"
              className="hover:text-amber-500 transition-colors"
              title="Portal Imágene Diagnósticas Studio Oral"
            >
              Studio Oral
            </a>
            <span className="text-slate-800">•</span>
            <button
              onClick={onTriggerAdmin}
              className="hover:text-amber-500 transition-colors inline-flex items-center gap-1 cursor-pointer focus:outline-none"
              title="Acceso administrativo"
            >
              <Key className="w-3 h-3 text-amber-500" />
              <span>Admin</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
