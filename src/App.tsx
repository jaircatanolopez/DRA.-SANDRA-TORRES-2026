import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import BeforeAfter from "./components/BeforeAfter";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import { ClinicStats } from "./types";
import { CalendarRange, X, CheckSquare, MessageSquare, Heart, ShieldAlert, Sparkles, Navigation } from "lucide-react";

export default function App() {
  const [stats, setStats] = useState<ClinicStats>({
    visits: 120,
    whatsappClicks: 45,
    promoClicks: 18,
  });

  const [adminOpen, setAdminOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactService, setContactService] = useState("consulta");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Prevention state locks for analytics triggers
  const trackingInitRef = useRef(false);

  // Fetch stats initially from fullstack server
  const loadStats = () => {
    fetch("/api/stats")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.visits === "number") {
          setStats(data);
        }
      })
      .catch((err) => console.error("Error fetching admin stats:", err));
  };

  const handleIncrementStat = (type: string) => {
    fetch("/api/stats/increment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type })
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data && data.stats) {
          setStats(data.stats);
        }
      })
      .catch((err) => {
        console.error("Error increments:", err);
        // Fallback locale modifiers
        setStats((prev) => {
          const updated = { ...prev };
          if (type === "visits") updated.visits += 1;
          else if (type === "whatsapp") updated.whatsappClicks += 1;
          else if (type === "promo") updated.promoClicks += 1;
          return updated;
        });
      });
  };

  useEffect(() => {
    if (!trackingInitRef.current) {
      trackingInitRef.current = true;
      // Increment page visit safely exactly once on mount
      handleIncrementStat("visits");
      loadStats();
    }
  }, []); // Static dependency array to satisfy guidelines

  const handleTriggerAdmin = () => {
    const password = prompt("Ingrese la contraseña de administración:");
    if (password === "admin123") {
      loadStats();
      setAdminOpen(true);
    } else if (password !== null) {
      alert("Contraseña incorrecta. Por favor intente de nuevo.");
    }
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    handleIncrementStat("whatsapp");

    const serviceLabels: { [key: string]: string } = {
      consulta: "Consulta General de Valoración",
      higiene: "Profilaxis / Limpieza Ultrasonido",
      estetica: "Diseño de Sonrisa",
      ortodoncia: "Ortodoncia Dental",
      cirugia: "Implantes Dentales",
    };

    const textMsg = `Hola Dra. Sandra Milena Torres, mi nombre es *${contactName}*. Quisiera agendar una cita de valoración para *${serviceLabels[contactService] || "Odontología Estética"}*. Mi celular de contacto es ${contactPhone}. Gracias.`;
    const encMsg = encodeURIComponent(textMsg);
    
    window.open(`https://wa.me/573204437948?text=${encMsg}`, "_blank");
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingOpen(false);
      setBookingSubmitted(false);
      setContactName("");
      setContactPhone("");
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-amber-100 selection:text-amber-900 bg-[#FDFDFD]">
      
      {/* 1. Header Navigation */}
      <Navbar 
        onOpenConsultation={() => setBookingOpen(true)} 
        onOpenStats={handleTriggerAdmin} 
      />

      {/* 2. Core Display blocks */}
      <main className="flex-grow shrink-0">
        
        {/* Cinematic Premium Hero */}
        <Hero onOpenConsultation={() => setBookingOpen(true)} />
        
        {/* Premium visual 4-column features bar (cues from Professional Polish theme) */}
        <section className="bg-slate-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-800 text-white select-none shrink-0 border-b border-amber-800/10">
          
          <div 
            onClick={() => {
              const el = document.getElementById("profilaxis");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-b sm:border-b-0 sm:border-r border-slate-850 border-slate-800 p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-4">01 / Higiene</span>
            <h4 className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400">Diseño & Profilaxis</h4>
            <p className="text-[11px] text-slate-500 font-light mt-1 leading-relaxed">Estética avanzada y prevención personalizada para tu perfil bucal.</p>
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById("brackets-metalicos");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-b sm:border-b-0 sm:border-r border-slate-800 p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-4">02 / Ortodoncia</span>
            <h4 className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400">Brackets y Alineadores</h4>
            <p className="text-[11px] text-slate-500 font-light mt-1 leading-relaxed">Corrección precisa de apiñamientos dentales con estéticas invisibles.</p>
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById("implantes-unitarios");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-b lg:border-b-0 lg:border-r border-slate-800 p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-4">03 / Cirugías</span>
            <h4 className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400">Implantes y Rehabilitación</h4>
            <p className="text-[11px] text-slate-500 font-light mt-1 leading-relaxed">Sustitución de raíces perdidas mediante titanio en Kennedy, Bogotá.</p>
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById("contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors cursor-pointer group"
          >
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block mb-4">04 / Tecnología</span>
            <h4 className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400">Equipos Digitales</h4>
            <p className="text-[11px] text-slate-500 font-light mt-1 leading-relaxed">Diagnóstico odontológico asistido por tecnologías y radiografías Studio Oral.</p>
          </div>

        </section>

        {/* Doctor profile biography */}
        <About />

        {/* Categories specialties grid and detail lists */}
        <Treatments onOpenConsultation={() => setBookingOpen(true)} />

        {/* Real Lightboxed Transformations */}
        <BeforeAfter />

        {/* SEO Faq Accordions */}
        <FAQ />

        {/* authority Content Blog items */}
        <Blog />

        {/* Contact address maps and agendamiento triggers */}
        <Contact onIncrementStat={handleIncrementStat} />

      </main>

      {/* 3. Footer utilities portal links */}
      <Footer onTriggerAdmin={handleTriggerAdmin} />

      {/* 4. Asistente Virtual Estefanía (floating chatbot proxy gemini) */}
      <Chatbot 
        onIncrementStat={handleIncrementStat} 
        onOpenConsultation={() => setBookingOpen(true)} 
      />

      {/* 5. Secret admin statistics dashboard */}
      {adminOpen && (
        <AdminPanel
          stats={stats}
          onClose={() => setAdminOpen(false)}
          onRefresh={loadStats}
        />
      )}

      {/* 6. Quick CTA booking Lightbox Modal popups */}
      {bookingOpen && (
        <div className="fixed inset-0 z-180 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 rounded-none">
            
            {/* Close */}
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 cursor-pointer focus:outline-none"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-amber-700 block">Agendamiento Virtual</span>
              <h3 className="text-2xl font-serif text-slate-950 tracking-tight leading-none">Asignar Consulta</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Ingresa tu número celular de contacto. Estefanía la asistente clínica te contactará de inmediato telefónicamente para validarlo.
              </p>

              {bookingSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-none text-center space-y-2">
                  <span className="text-xs font-bold text-emerald-900 block uppercase">¡Procesando!</span>
                  <p className="text-[11px] text-emerald-700 leading-relaxed font-light">
                    Redirigiéndote al canal oficial de la Dra. Sandra Torres...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[9.5px] uppercase tracking-wider font-bold text-slate-500 block">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Claudia Patricia Ospina"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9.5px] uppercase tracking-wider font-bold text-slate-500 block">Celular WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 320 123 4567"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9.5px] uppercase tracking-wider font-bold text-slate-500 block">Procedimiento de Cita</label>
                    <select
                      value={contactService}
                      onChange={(e) => setContactService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 text-xs text-slate-800 outline-none focus:bg-white focus:border-amber-700 transition-colors cursor-pointer"
                    >
                      <option value="consulta">Consulta General de Valoración</option>
                      <option value="higiene">Profilaxis e Higiene Profiláctica</option>
                      <option value="estetica">Diseño de Sonrisa Avanzado</option>
                      <option value="ortodoncia">Ortodoncia Invisible o Brackets</option>
                      <option value="cirugia">Cirugía de Implantes Unitarios</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-amber-800 text-white font-bold py-3 text-xs uppercase tracking-widest transition-all"
                  >
                    Confirmar por WhatsApp &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 7. Conversion Floating Sidebar Actions (SEO Conversion) */}
      <div className="fixed bottom-24 left-6 z-150">
        <a
          href="https://wa.me/573204437948?text=Hola%20Dra.%20Sandra%20Milena%20Torres%2C%20quisiera%20agendar%20una%20cita%20de%20valoraci%C3%B3n%20para%20odontolog%C3%ADa."
          target="_blank"
          onClick={() => handleIncrementStat("whatsapp")}
          className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center rounded-full shadow-2xl hover:bg-emerald-600 transition-transform active:scale-95 hover:scale-105 shrink-0 select-none group"
          title="WhatsApp Cita de Valoración"
        >
          {/* Animated WhatsApp badge representation */}
          <span className="absolute bottom-14 left-1/2 -translate-x-1/2 p-2 px-3 bg-white border border-slate-150 border-slate-100 text-slate-800 font-bold text-[9px] uppercase whitespace-nowrap tracking-wider shadow-md pointer-events-none rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Agendar por WhatsApp
          </span>
          
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.332 11.891-11.891 11.891-2.015 0-3.991-.511-5.741-1.48L0 24zm6.533-3.665l.405.24c1.472.873 3.163 1.335 4.904 1.335 5.32 0 9.65-4.33 9.65-9.65s-4.33-9.65-9.65-9.65-9.65 4.33-9.65 9.65c0 1.91.554 3.766 1.605 5.376l.265.405-1.077 3.931 4.028-1.057z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
