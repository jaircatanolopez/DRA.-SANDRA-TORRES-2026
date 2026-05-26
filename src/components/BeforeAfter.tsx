import { useState } from "react";
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function BeforeAfter() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number | null>(null);

  const cases = [
    {
      title: "Diseño de Sonrisa Premium",
      subtitle: "Carillas estéticas personalizadas en alta alúmina",
      details: "Paciente presentaba diastemas dispersos y desalineación leve en el sector anterior. Se esculpieron carillas ultradelgadas integradas a sus labios.",
      duration: "2 citas clínicas",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNabBtzTA2ZEARlN-C_wjteKIrn67nkcgkpfGh12t4OPapGomnua0gWPlwqGYpzbNUNQkNhgtmW-PsHmRA0FPMoi73YqgZp5MtXBCxPcI4ZjHsYNTwZzbtCAum0bDqDAjaeafVtqR_-rdEOAvksD9Mm=w1733-h945-s-no-gm?authuser=0"
    },
    {
      title: "Blanqueamiento Dental",
      subtitle: "Aclaramiento profundo fotoactivado + kit casero",
      details: "Tratamiento de aclaramiento controlado para remover pigmentaciones por tintes de alimentos y café, logrando bajar 4 tonos en la escala vitapan.",
      duration: "1 sesión clínica",
      image: "https://lh3.googleusercontent.com/pw/AP1GczM0aTVmGWc3wTblfToZZm_PTErPJhWdn_0eZz2FOl_xWiv0_cewsR0jx4d4yGoZ0h94KMH0UQUN3PMJtiYZEAU585gRobVpeql1Q9OD18J9JIOXLELdsmgZVlp6J3UzYSf0DGA72iS7AxG-oFNobZK7=w825-h450-s-no-gm?authuser=0"
    },
    {
      title: "Ortodoncia de Precisión",
      subtitle: "Corrección de apiñamiento severo con brackets estéticos",
      details: "Alineación de arcadas superior e inferior respetando la funcionalidad mandibular y corrigiendo el perfil de la sonrisa.",
      duration: "18 meses de confort",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPuozeVBL2mScAsV-TDtUTvA5qcMyhPXEa8DynsDTF0XAJEwS7QKgjryDN7VlLfbKej588TQgZ73jWrBHLh2_I6hdq1kiBq662HlIOYBQ5BYchpzZ27ecQToNm3UDCTZualHK5S3HPKPLZ5u_Y_1HoA=w1733-h945-s-no-gm?authuser=0"
    },
    {
      title: "Rehabilitación Oral Fija",
      subtitle: "Coronas libres de metal sobre implantes dentales",
      details: "Reemplazo de premolares y molares perdidos mediante prótesis sobre implantes que evitan prótesis flojas y respetan encías sanas.",
      duration: "3 etapas clínicas",
      image: "https://lh3.googleusercontent.com/pw/AP1GczORW1E88yAo8pcClQgWRhAVemLrKBhOuDLoBPeFy_q8r9QNKd2BEmqaJf6YpDh-_BOYsoMtNwNecrwjVxs3_T4oN9tXllWZOuRVcA6QHBV-5xYBLmaids7dTy7ldMV9SSdhfxn66b7Jxn2W05X0L18f=w825-h450-s-no-gm?authuser=0"
    }
  ];

  const handleNext = () => {
    if (selectedCaseIdx === null) return;
    setSelectedCaseIdx((selectedCaseIdx + 1) % cases.length);
  };

  const handlePrev = () => {
    if (selectedCaseIdx === null) return;
    setSelectedCaseIdx((selectedCaseIdx - 1 + cases.length) % cases.length);
  };

  return (
    <section id="casos-reales" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 block">
            Evidencia Clínica Comprobada
          </span>
          <h2 className="text-3.5xl sm:text-4xl md:text-5.5xl font-serif text-slate-900 leading-tight">
            Casos Clínicos Reales
          </h2>
          <div className="h-0.5 w-20 bg-amber-700 mx-auto"></div>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            La mejor garantía es observar la precisión de nuestros resultados. Conoce los cambios de estética y restauración funcional logrados con dedicación por la Dra. Sandra Milena Torres.
          </p>
        </div>

        {/* Gallery Scroller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCaseIdx(idx)}
              className="group bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-amber-700/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Photo comparisons thumbnail */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                <img
                  src={cs.image}
                  alt={cs.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0f172a/ffffff?text=${encodeURIComponent(cs.title)}`;
                  }}
                />
                
                {/* Visual Eye Icon Indicator */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-slate-950 p-2 text-xs flex items-center gap-1 font-bold uppercase tracking-widest pl-4 pr-4">
                    <Eye className="w-4 h-4 text-amber-700" />
                    <span>Ampliar Caso</span>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
                  Valoración Clínica
                </div>
              </div>

              {/* Text Descriptors */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-md font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-tight">
                    {cs.title}
                  </h3>
                  <p className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
                    {cs.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light line-clamp-3">
                    {cs.details}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[10.5px]">
                  <span className="text-slate-400">Duración:</span>
                  <span className="font-bold text-slate-800">{cs.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Popup Modal */}
        {selectedCaseIdx !== null && (
          <div className="fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
            
            {/* Modal Box wrapper */}
            <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-none overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
              
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedCaseIdx(null)}
                className="absolute top-4 right-4 bg-slate-905 bg-black/80 text-white hover:text-amber-100 hover:bg-amber-800 p-2 rounded-full focus:outline-none z-101 transition-colors"
                title="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area with standard next/prev keys */}
              <div className="relative w-full lg:w-3/5 bg-slate-900 flex items-center justify-center aspect-[16/10] lg:aspect-auto lg:h-[70vh]">
                <img
                  src={cases[selectedCaseIdx].image}
                  alt={cases[selectedCaseIdx].title}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Left/Right controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-amber-800 text-white flex items-center justify-center focus:outline-none transition-colors border border-white/10"
                  title="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-amber-800 text-white flex items-center justify-center focus:outline-none transition-colors border border-white/10"
                  title="Siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Description Details Area */}
              <div className="w-full lg:w-2/5 p-8 flex flex-col justify-between space-y-6 text-white overflow-y-auto">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block border-b border-slate-800 pb-2">
                    Caso de Estudio Clínico
                  </span>
                  
                  <h3 className="text-2xl font-serif font-light tracking-wide text-white leading-tight">
                    {cases[selectedCaseIdx].title}
                  </h3>
                  
                  <h4 className="text-xs uppercase text-amber-500 font-bold tracking-wider">
                    {cases[selectedCaseIdx].subtitle}
                  </h4>

                  <p className="text-sm font-light text-slate-350 leading-relaxed text-justify">
                    {cases[selectedCaseIdx].details}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2 text-xs font-light text-slate-300">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span>Tratamiento 100% personalizado</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-light text-slate-300">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span>Evaluación facial odontológica previa</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-light text-slate-300">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span>Respeta la mordida natural y encías</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Sesiones estimadas:</span>
                  <span className="font-bold text-amber-500 uppercase tracking-wider">
                    {cases[selectedCaseIdx].duration}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
