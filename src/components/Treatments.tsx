import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Shield, Compass, HeartPulse, ShieldAlert, Check, Plus } from "lucide-react";

interface TreatmentsProps {
  onOpenConsultation: () => void;
}

export default function Treatments({ onOpenConsultation }: TreatmentsProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos los Tratamientos" },
    { id: "higiene", label: "Prevención e Higiene" },
    { id: "ortodoncia", label: "Ortodoncia Dental" },
    { id: "estetica", label: "Estética y Diseño" },
    { id: "rehabilitacion", label: "Implantes y Rehabilitación" },
  ];

  const treatmentsData = [
    {
      id: "profilaxis",
      category: "higiene",
      title: "Profilaxis Dental Profesional",
      description: "¡Tu salud es nuestra prioridad! Descubre el poder preventivo de la profilaxis profesional para mantener tu boca libre de bacterias dañinas.",
      details: "Mucho más que una limpieza; es un escudo protector esencial para prevenir la gingivitis, desinflamar encías y erradicar manchas superficiales persistentes por alimentos.",
      benefits: ["Previene caries de raíces dentales", "Desmancha superficies externas", "Elimina placa bacteriana blanda"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPg1RxfyX4wxmwkkIo3j6gr1vHX9gxj9cBwF1tVs7SnIZrI3AtEeo4O6afkAsEptN-8kM2nPF5ORpWL0ayv9voeWUx0vpPCFY92pRxWSyW51aASOG_XTKzpEkew7DQSNd7gw37w9E1NpwNNyw0vR8I=w1024-h559-s-no-gm?authuser=0"
    },
    {
      id: "detartraje",
      category: "higiene",
      title: "Detartraje por Ultrasonido",
      description: "¡Dale a tu sonrisa la limpieza profunda que merece! El cepillado diario no puede eliminar el sarro mineralizado.",
      details: "El detartraje ultrasónico es el verdadero héroe de tu higiene bucal. Utiliza vibraciones suaves de alta frecuencia para remover los depósitos endurecidos debajo y arriba de la encía sin dañar el esmalte dental.",
      benefits: ["Remueve el sarro mineralizado rebelde", "Combate el mal aliento (halitosis)", "Protege contra la pérdida ósea prematura"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczMVN5MLHDQmi3nbYrk-695Qq0aNh5WYC3NFPgW_q9q0kUPCw8-i2s-vOi74TlmYwq6fF2KH0Rj8Tp49vI5bz6ZEU1YABrVzM4BZ4ckE5eyB9QyDbCNJ5nNJCieoRMQjtnSPXkkeNE07rOLXI2aBu6o=w825-h450-s-no-gm?authuser=0"
    },
    {
      id: "fluorizacion",
      category: "higiene",
      title: "Fluorización Dental Remineralizante",
      description: "Escudo cristalino de alta concentración para fortalecer la estructura de tus dientes y neutralizar ácidos.",
      details: "Aplicamos capas de barniz o geles fluorados especiales de uso exclusivamente profesional para sellar microtúbulos sensibles y restaurar minerales perdidos del esmalte.",
      benefits: ["Reduce dramáticamente la sensibilidad", "Sella el esmalte dental", "Combate directamente ataques ácidos"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNM-4Rq9iUBzRLOE49I0jHT6LMwgcjEU8grgeT9XnimXTYDvVITgqTSyEMB79C-4FqxhwHIkut_QcDTzHdSTquiT8HReOJhWUdWXN5JKtOm_oS6SwzjmNs_SUIX0nyZBB87gMrwURnVQkFeeAf20ug=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "brackets-metalicos",
      category: "ortodoncia",
      title: "Brackets Metálicos Tradicionales",
      description: "La solución de ortodoncia más confiable, duradera y eficiente para solucionar problemas de alineación complejos.",
      details: "Ortodoncia de alta precisión con materiales metálicos de última generación que hoy en día son mucho más pequeños, redondeados, cómodos y biológicamente amigables.",
      benefits: ["Máxima aceleración y predictibilidad", "Altamente resistentes al desgaste", "La alternativa más rentable"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczP6ykauLx-m-4baGO8YtPHIeIMUYBqtM3Ag4GQdqJF5ipxvkLZI5ZLhg3w_Mu8VwEGdlkyw6LbXGpRLa3pCIJWXOiYY00Ob9ISAgigwndiiqU_sMDcQMfHazhKAj67CXUGVsRLmpaCbisZfSqU7JLg=w945-h945-s-no-gm?authuser=0"
    },
    {
      id: "brackets-esteticos",
      category: "ortodoncia",
      title: "Brackets Estéticos (Zafiro / Porcelana)",
      description: "Alineación de máxima eficacia con brackets totalmente discretos que mimetizan el color de tus dientes.",
      details: "Fabricados de zafiro puro, son brackets transparentes que no se tiñen ni manchan con el café o el tabaco, combinando elegancia y corrección funcional.",
      benefits: ["Prácticamente imperceptibles", "No pierden brillo ni se manchan", "Comodidad suave libre de fricciones"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNzM_JlYIwvW0r5QxL2rqH_BfjdtRJbNoBgh4WQBCVadkbdJ6ZLklLBnXtDomAAk6r78Y5HZf6-SeBJdlv-9rky-HZV_IpzqpJBIX4kZBq7WCGXkHy5V1zeJIQS_VhpTGdMVlR9TXCXdYuGNk7DKJ4=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "alineadores-invisibles",
      category: "ortodoncia",
      title: "Alineadores Invisibles",
      description: "¡La revolución en ortodoncia digital! Reubica tus dientes sin brackets ni alambres metálicos molestos.",
      details: "Placas transparentes alineadoras removibles hechas a medida. Puedes retirarlas fácilmente para comer y cepillarte, facilitando higiene óptima sin restricciones alimentarias.",
      benefits: ["Totalmente removibles e higiénicos", "Estética 100% invisible", "Planificación computarizada 3D previa"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOHulJTzar9bnT8iA-QxBpOsvj2jJT4Yt058tG0Her8sSCuQpkELdDXGRye9hGEdQSNy9Zj3BQ9shZ_duLvqTHHBcfeAHDOIi5tB6np57wQsMe28cmdMhhRg2-sxLFhAU8LzHOpgndGvfZv0wr7owE=w825-h450-s-no-gm?authuser=0"
    },
    {
      id: "blanqueamiento",
      category: "estetica",
      title: "Blanqueamiento Dental Premium",
      description: "Ilumina tu sonrisa y rejuvenece tu expresión facial con un desmanchado profesional avanzado y rápido.",
      details: "Utilizamos agentes blanqueadores de activación controlada para descomponer los cromógenos, aclarando múltiples tonos de esmalte de forma indolora y segura.",
      benefits: ["Resultados visibles en una sola sesión", "Respeta la microestructura del esmalte", "Alta estabilidad de tono a largo plazo"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczN7FtcLqmLc06v7BMvvzIP3KI3PI_LvCEdqWAJt2SwzCFxrP03Nl4909TRmZVtoF8XdytAdoo2XyboetfLxids8Em9kX0qfMHxW8U95EfEiRXci4OIHdsRF-xhHqjjzBgd76V1NUXPR3vP0LImyquc=w825-h450-s-no-gm?authuser=0"
    },
    {
      id: "carillas",
      category: "estetica",
      title: "Carillas Dentales de Alta Estética",
      description: "Láminas ultrafinas de resina de alta gama o porcelana pura para rediseñar formas, corregir giros y tonos ideales.",
      details: "Es el gran secreto de las sonrisas perfectas. Se adhieren firmemente al frente de los dientes con preparación biológica mínima, corrigiendo diastemas, fracturas o pigmentación severa.",
      benefits: ["Corrige fracturas y diastemas de raíz", "Diseño personalizado de forma y brillo", "Materiales ultrarresistentes que no se manchan"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczM3PCuyxsxuRtG76BvQb0hXQUCfMmMTPMa_pEE33xC9atyhov0SgeoA3xLjZHToRlHfrrj7HDoNhHzGSchGsWXusCllSYKDJNW_iObP9bTs0rWPSZKgub6oF9Mp4l8gWLkmnfU3L2AJqIjgG2bWc8M=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "diseno-sonrisa",
      category: "estetica",
      title: "Rediseño de Sonrisa Avanzado",
      description: "Planificación estética tridimensional integral que fusiona tus rasgos faciales para esculpir un canón de simetría ideal.",
      details: "Alineamos encías, emparejamos contornos y calibramos longitudes. El resultado es una sonrisa elegante, natural, fresca y perfectamente integrada con tu gesticulación facial.",
      benefits: ["Completa armonización facial", "Aumenta la autoestima de inmediato", "Planificación personalizada libre de sorpresas"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNWL0KFlUJwsh6FPgIFkm19KT62njGL_4ATb767hF1Gha0tX9NML6xHqMknx0_exWsBySysBshk742afwH2IwyCeSBoyocPJWJhhd67pyQ9msh0NzKWh7TLsxoofGiycFgsTtd-3HUomiWl7Vea2VJg=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "implantes-unitarios",
      category: "rehabilitacion",
      title: "Implantes Dentales Unitarios",
      description: "¡Olvídate de prótesis flojas o puentes fijos destructores de dientes! Sustitución sólida de raíz mediante titanio.",
      details: "El implante se fusiona con el hueso de manera estable. Sobre él, se fija una corona artesanal hecha a mano que imita perfectamente la resistencia y brillo de tus piezas dentales naturales.",
      benefits: ["Bypass al desgaste de dientes vecinos", "Detiene la reabsorción ósea de raíz", "Sujeción idéntica a una pieza ósea real"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPDSGwJdVlTKJeG1oMlEar7TzPj5ZnoQu9YVk3Y4VnDx7QBxCtQhM3nAEfxgISjGbizsca1ZWSZ3j8SViTJZRR_JZ88p8DfOKONKXctINHBbTXQeeKDXSmVpkRWX3_Dg0pRcrcTGsJtiVKi_y9dsIwI=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "protesis-fija",
      category: "rehabilitacion",
      title: "Prótesis Fija y Coronas de Zirconio",
      description: "Restauración dental fija que restaura completamente áreas edéntulas devolviendo biomecánica de la masticación.",
      details: "Diseñamos coronas artesanales de zirconio libre de metal (metal-free) de altísima naturalidad, evitando la típica línea grisácea en la encía propia del metal.",
      benefits: ["Aspecto óptico idéntico a diente natural", "Cero irritación o alergia gingival", "Durabilidad de grado médico asegurada"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNG3N9p1PA0ixxctmrUntsBb5x1J6gLjjz9cRvC-cauige7m7_5bpTQ_lRIB3DIli4QXEBBNYT3T_ThGOQnYFOiEUz3hHfj-EGDNwZIawAI8ne_O1O5bRHPik2RP6to6iy_jWhHzhfAu0sCFtRlnmJU=w1733-h945-s-no-gm?authuser=0"
    },
    {
      id: "rehabilitacion-oral",
      category: "rehabilitacion",
      title: "Rehabilitación Oral Integral",
      description: "La solución integral de alta gama para los casos orales combinados más complejos de desgaste, bruxismo o pérdida múltiple.",
      details: "Plan integral multidisciplinario donde articulamos endodoncia, ortodoncia e implantología simultánea para devolver la oclusión ideal y restablecer la calidad de vida masticatoria.",
      benefits: ["Recuperación del 100% de la fuerza masticatoria", "Rejuvenece las dimensiones del tercio facial", "Bypass completo a dolores articulares (ATM)"],
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczNHfPKVW2nuBqw2DSKz5CFi4vVygybCO_PqYJAFrUJomNauslpd2fvRgocllZwIqEd1CzZz6NffmllWhVQ76NktQZkro3TgOjqUNyfi25dG6FH8h8mu80BKdTvoIX4gdCms0I-GorB5vFNs-TEd46AV=w1733-h945-s-no-gm?authuser=0"
    }
  ];

  const filteredTreatments = activeCategory === "all" 
    ? treatmentsData 
    : treatmentsData.filter(t => t.category === activeCategory);

  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 block">
            Servicios Premium de Salud y Estética
          </span>
          <h2 className="text-3.5xl sm:text-4xl md:text-5.5xl font-serif text-slate-900 leading-tight">
            Especialidades Clínicas
          </h2>
          <div className="h-0.5 w-20 bg-amber-700 mx-auto"></div>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Abordamos de manera integral cada fase de tu salud dental: desde limpiezas ecosónicas preventivas hasta los más demandantes diseños estéticos faciales.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-none border ${
                activeCategory === cat.id
                  ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-300"
                  : "bg-transparent border-slate-200 text-slate-600 hover:text-amber-800 hover:border-amber-700/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={treatment.id}
                id={treatment.id}
                className="group flex flex-col h-full bg-[#fdfdfd] border border-slate-100 hover:border-amber-800/30 shadow-sm hover:shadow-xl transition-all duration-300 select-none overflow-hidden"
              >
                {/* Embedded Image Header of Service with lazy loading */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={treatment.imageUrl}
                    alt={treatment.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0f172a/ffffff?text=${encodeURIComponent(treatment.title)}`;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                    {treatment.category === "higiene" && "Profilaxis e Higiene"}
                    {treatment.category === "ortodoncia" && "Ortodoncia"}
                    {treatment.category === "estetica" && "Diseño Estético"}
                    {treatment.category === "rehabilitacion" && "Rehabilitación"}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-semibold text-slate-950 tracking-tight group-hover:text-amber-800 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 font-light leading-relaxed">
                      {treatment.description}
                    </p>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed italic border-l-2 border-amber-600/30 pl-3">
                      {treatment.details}
                    </p>
                  </div>

                  {/* List of benefits */}
                  <div className="space-y-1.5 pt-2">
                    {treatment.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[10.5px] text-slate-600 font-light">
                        <Check className="w-3 h-3 text-amber-700 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking CTA Button inside the card to maximize conversion */}
                  <div className="pt-4 border-t border-slate-100/60 flex items-center justify-between">
                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-bold uppercase tracking-widest text-slate-950 group-hover:text-amber-700 cursor-pointer flex items-center gap-1 transition-colors"
                    >
                      <span>Agendar Servicio</span>
                      <span>&rarr;</span>
                    </button>
                    <span className="text-[10px] text-slate-400">Kennedy</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
