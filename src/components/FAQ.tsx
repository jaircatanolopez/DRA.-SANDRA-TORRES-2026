import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cada cuánto tiempo debo realizarme una profilaxis o limpieza dental?",
      a: "La Asociación Odontológica recomienda realizar una profilaxis profesional cada 6 meses. Sin embargo, en pacientes con antecedentes de gingivitis, acumulación rápida de sarro (cálculo dental) o fumadores, sugerimos consulta preventiva cada 3 o 4 meses para evitar pérdidas de soporte óseo.",
      tags: ["profilaxis", "limpieza dental Bogotá"]
    },
    {
      q: "¿Qué es la odontología neurofocal y en qué beneficia mi salud?",
      a: "La odontología neurofocal estudia la correlación directa entre los órganos dentarios y los diferentes sistemas del cuerpo humano. Un diente enfermo con conductos infectados o presencia de metales como amalgamas de mercurio puede actuar como un 'campo de interferencia' que altera el sistema nervioso vegetativo, gatillando migrañas, dolores articulares o fatiga sistémica. Tratar las muelas de raíz restablece el equilibrio de tu organismo.",
      tags: ["odontología integral", "Kennedy", "odontóloga Bogotá"]
    },
    {
      q: "¿Qué medios de pago reciben y ofrecen alguna financiación directa?",
      a: "Recibimos todas las tarjetas de crédito, débito, transferencias bancarias y efectivo. Adicionalmente, contamos con facilidades de pago directo con el consultorio para financiar tu tratamiento de ortodoncia o de implantes dentales en cuotas mensuales cómodas sin intereses excesivos.",
      tags: ["financiamiento dental", "medios de pago Bogotá"]
    },
    {
      q: "¿En qué consiste el Diseño de Sonrisa y cuántas citas toma realizarlo?",
      a: "El diseño de sonrisa no es genérico. Se basa en un análisis óptico computarizado donde calculamos los ángulos de tus dientes según tu nariz, labios y mentón. Puede realizarse mediante carillas de resina de alta gama en 1 o 2 sesiones clínicas, o carillas de porcelana de alta duración que toman de 2 a 3 citas de laboratorio. Es mínimamente invasivo e incluye blanqueamiento previo.",
      tags: ["diseño de sonrisa Bogotá", "estética dental"]
    },
    {
      q: "¿Ofrecen ortodoncia invisible o alineadores estéticos cerca de Kennedy?",
      a: "Sí, disponemos de tratamiento de alineadores invisibles de última generación tecnológica. Es la alternativa perfecta a los brackets tradicionales: placas completamente transparentes y removibles que puedes sacar para comer e higienizarte, sin llagas ni alambres.",
      tags: ["ortodoncia invisible", "Kennedy", "Bogotá"]
    },
    {
      q: "¿Es doloroso colocarse un implante dental unitario?",
      a: "En lo absoluto. La colocación de un implante dental unitario de titanio se efectúa bajo anestesia local convencional y es habitualmente menos traumática que una extracción de muela común. El material biocompatible se integra perfectamente al maxilar deteniendo de raíz problemas de hundimiento facial de la mejilla.",
      tags: ["implantes dentales Bogotá", "rehabilitación oral"]
    }
  ];

  return (
    <section id="preguntas" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 block">
            Resuelve Tus Dudas de Inmediato
          </span>
          <h2 className="text-3.5xl sm:text-4xl font-serif text-slate-900 leading-tight">
            Preguntas Frecuentes
          </h2>
          <div className="h-0.5 w-20 bg-amber-700 mx-auto"></div>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Información clara y transparente respaldada por el criterio odontológico de la Dra. Sandra Torres Gómez para ayudarte a tomar decisiones informadas sobre tu sonrisa.
          </p>
        </div>

        {/* FAQs List with standard Accordion Toggle */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-100 rounded-none bg-[#fdfdfd] hover:border-amber-700/20 shadow-sm transition-all duration-300"
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm font-semibold font-serif text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <div className="shrink-0 p-1 bg-slate-50 text-slate-400 group-hover:text-amber-700 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100/50 animate-fade-in space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed text-justify">
                      {faq.a}
                    </p>
                    
                    {/* Tiny inline tags for Local SEO crawl enhancement */}
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span key={tag} className="text-[9.5px] uppercase tracking-wider font-semibold text-amber-700/60 bg-amber-50 px-2 py-0.5">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
