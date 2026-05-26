import { Award, BookOpen, Clock, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-dra" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Doctor Portrait Photo */}
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute -inset-4 bg-amber-100/60 rounded-3xl -rotate-2 scale-95"></div>
            <div className="relative aspect-[4/5] bg-slate-300 overflow-hidden shadow-2xl rounded-2xl border border-slate-100">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczP7ygD0YnuVTSu_E0jBROlDWuzlX27AcAVvOK3ofk-zBL5O2eKMd087COBk19lyLuOuY1y-YNMCSxYFlM08Zq7av8MmCwYqB62CSb0lRa9KRu9rqGN9luait8MMp0XzoG4x9cX6TJTeo5q5ycex0EoY=w1024-h837-s-no-gm?authuser=0" 
                alt="Dra. Sandra Milena Torres Gómez - Odontóloga en Bogotá" 
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Tiny Floating Trust Badge */}
            <div className="absolute bottom-6 right-6 bg-white py-3 px-5 shadow-lg rounded-xl flex items-center space-x-2 border border-slate-100">
              <Award className="w-5 h-5 text-amber-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">U. San Martín</span>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="w-full lg:w-7/12 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 block">
                Odontología con Sentido Humano
              </span>
              <h2 className="text-3.5xl sm:text-4xl font-serif text-slate-900 leading-tight">
                Dra. Sandra Milena Torres Gómez
              </h2>
              <div className="h-0.5 w-16 bg-amber-700"></div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light text-justify">
              Soy una odontóloga egresada de la prestigiosa <strong>Fundación Universitaria San Martín</strong> con más de 20 años de rigurosa práctica clínica. Me especializo en brindar un cuidado estético e integral a través de la <strong>odontología neurofocal</strong>, comprendiendo que la salud de tu boca se interconecta intrínsecamente con el equilibrio integral de tu organismo.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light text-justify">
              Mi filosofía se sustenta en la ética profesional, la empatía humana y el compromiso social. Conjuntamente con un selecto equipo interdisciplinar de especialistas aliados, aseguro la ejecución de tratamientos integrales de alta excelencia tecnológica en Kennedy, Bogotá.
            </p>

            {/* Specialties/Career highlight grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">20+ Años</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">De ejercicio clínico ininterrumpido en la ciudad de Bogotá.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start space-x-3">
                <Stethoscope className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-sans">Enfoque Neurofocal</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Diagnósticos holísticos que integran la salud dental con el bienestar corporal.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Alianza Interdisciplinaria</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Colaboración con periodoncistas, cirujanos y endodoncistas idóneos.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start space-x-3">
                <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Equilibrio & Prevención</h4>
                  <p className="text-[11px] text-slate-500 font-light mt-0.5">Cuidamos el dolor de raíz, educando al paciente en hábitos profilácticos permanentes.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
