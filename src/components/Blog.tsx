import { useState, useEffect } from "react";
import { BookOpen, Calendar, Clock, User, ArrowRight, X } from "lucide-react";
import { Article } from "../types";

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch from Express API
  useEffect(() => {
    fetch("/api/blog")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog articles", err);
        // Robust clientside fallback structure to assure it always shows up beautifully
        const backupArticles: Article[] = [
          {
            id: 1,
            title: "Beneficios del Diseño de Sonrisa de Alta Estética en Bogotá",
            slug: "beneficios-diseno-sonrisa-bogota",
            summary: "Descubre cómo la odontología estética moderna puede armonizar tu rostro, aumentar tu confianza y mejorar tu salud dental con técnicas mínimamente invasivas en Kennedy.",
            content: "El diseño de sonrisa no es simplemente una cuestión de vanidad; es una disciplina odontológica que combina ciencia médica y arte visual para de manera personalizada recrear la morfología natural de los dientes en perfecta armonía con los labios, encías y rasgos faciales del paciente...\n\nLa Dra. Sandra Milena Torres Gómez destaca que el análisis digital facial personalizado permite modelar el resultado esperado antes de iniciar, garantizando carillas de resina o porcelana de un brillo ideal, resistencia óptima y ajuste biológico preciso.",
            category: "Estética Dental",
            author: "Dra. Sandra Milena Torres Gómez",
            date: "2026-05-15",
            readTime: "4 min lectura",
            keywords: ["diseño de sonrisa Bogotá", "odontología estética Kennedy", "carillas dentales"]
          },
          {
            id: 2,
            title: "Limpieza vs. Profilaxis Ultrasónica: ¿Cuándo es necesario un Detartraje?",
            slug: "limpieza-profilaxis-detartraje-dental",
            summary: "Aprende la diferencia entre una limpieza cotidiana y un tratamiento clínico profundo para remover sarro endurecido que previene la periodontitis y pérdida ósea.",
            content: "Muchos pacientes creen que la higiene en casa con cepillo e hilo dental es suficiente. Sin embargo, los minerales salivares endurecen la placa bacteriana formando cálculo dental o sarro. El sarro no puede ser retirado por el cepillo y requiere perfilación clínica...\n\nEl detartraje ultrasónico remueve estas aglomeraciones salivales sin dolor, mientras que la profilaxis pule las superficies dentarias, eliminando manchas de café, té o tabaco y desinflamando las encías.",
            category: "Salud Preventiva",
            author: "Dra. Sandra Milena Torres Gómez",
            date: "2026-05-02",
            readTime: "5 min lectura",
            keywords: ["limpieza dental Bogotá", "profilaxis", "detartraje dental"]
          },
          {
            id: 3,
            title: "Implantes Dentales: La Solución Biocompatible para Recuperar Sonrisas",
            slug: "implantes-dentales-bogota-kennedy",
            summary: "La sustitución de raíces perdidas mediante implantes de titanio evita el desgaste de dientes sanos colindantes y mitiga la reabsorción del hueso maxilar.",
            content: "Perder un diente afecta la masticación, altera la fonación y produce el desplazamiento de las piezas remanentes. Las prótesis tradicionales a menudo desgastan los dientes vecinos para sostenerse. Los implantes dentales unitarios resuelven este dilema al anclarse directamente en el hueso mandibular mediante tornillos de titanio de alto nivel biocompatibles con el cuerpo humano...",
            category: "Rehabilitación Oral",
            author: "Dra. Sandra Milena Torres Gómez",
            date: "2026-04-20",
            readTime: "6 min lectura",
            keywords: ["implantes dentales Bogotá", "rehabilitación oral Kennedy", "clínica dental Bogotá"]
          }
        ];
        setArticles(backupArticles);
        setLoading(false);
      });
  }, []); // Static dependency array to avoid loop cycles

  return (
    <section id="blog" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 block">
            Educación y Artículos de Autoridad
          </span>
          <h2 className="text-3.5xl sm:text-4xl md:text-5.5xl font-serif text-slate-900 leading-tight">
            Blog Dental Especializado
          </h2>
          <div className="h-0.5 w-20 bg-amber-700 mx-auto"></div>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Profundiza en la ciencia de tu salud bucal con guías claras y sinceras redactadas bajo supervisión médica para potenciar tus hábitos diarios.
          </p>
        </div>

        {/* Loading Spinner Fallback */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div
                key={art.id}
                className="group bg-white border border-slate-105 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  {/* Category Chip */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-750 text-amber-700 bg-amber-50 py-1 px-3.5">
                      {art.category}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-[10px] text-slate-400 font-medium">{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-slate-950 tracking-tight leading-snug group-hover:text-amber-800 transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-[12px] text-slate-500 font-light leading-relaxed text-justify line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="h-[1px] w-full bg-slate-100"></div>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-amber-600" />
                      <span className="truncate max-w-[120px]">Dra. Sandra Torres</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      <span>{art.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="w-full text-center py-3 border border-slate-900 group-hover:bg-slate-900 group-hover:text-white text-[11px] font-bold uppercase tracking-widest text-slate-950 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Leer Artículo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Detail Modal Readers */}
        {selectedArticle && (
          <div className="fixed inset-0 z-100 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-10 border border-slate-100 rounded-none relative">
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 p-2 focus:outline-none"
                title="Cerrar artículo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-amber-700 font-bold uppercase tracking-widest">{selectedArticle.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{selectedArticle.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-slate-950 tracking-tight leading-tight">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center space-x-4 border-y border-slate-100 py-3 text-xs text-slate-500">
                  <div className="flex items-center space-x-1 text-slate-700">
                    <User className="w-4 h-4 text-amber-700" />
                    <strong>Por: {selectedArticle.author}</strong>
                  </div>
                  <span>•</span>
                  <span>Publicado: {selectedArticle.date}</span>
                </div>

                {/* Body Content */}
                <div className="text-slate-700 text-[13px] sm:text-sm leading-relaxed space-y-4 text-justify font-light whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                {/* Key Tags for contextual mapping */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {selectedArticle.keywords.map((kw) => (
                    <span key={kw} className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase py-1 px-3">
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      // Trigger direct anchor jump to contact
                      const contactEl = document.getElementById("contacto");
                      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-slate-900 text-white hover:bg-amber-800 py-3.5 px-8 text-xs font-bold uppercase tracking-widest transition-all w-full select-none"
                  >
                    Separar Cita de Diagnóstico sobre este tema
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
