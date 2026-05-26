import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail, Shield, CheckCircle, Navigation, ExternalLink } from "lucide-react";

interface ContactProps {
  onIncrementStat: (type: string) => void;
}

export default function Contact({ onIncrementStat }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "profilaxis",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Increment WhatsApp/Cita interaction statistic
    onIncrementStat("whatsapp");

    // Construct custom WhatsApp Message for Dra. Sandra Torres
    const serviceLabels: { [key: string]: string } = {
      profilaxis: "Profilaxis / Limpieza profunda",
      ortodoncia: "Ortodoncia (brackets / alineadores)",
      diseno: "Diseño de Sonrisa",
      implantes: "Implantes Dentales",
      rehabilitacion: "Rehabilitación Oral / Coronas"
    };

    const textMsg = `Hola Dra. Sandra Milena Torres, mi nombre es *${formData.name}*. Quisiera agendar una cita de valoración para el servicio de *${serviceLabels[formData.service] || "Valoración General"}*. Mi número de contacto es ${formData.phone}. Info adicional: ${formData.message || "Ninguna"}`;
    const encMsg = encodeURIComponent(textMsg);
    
    // Trigger window redirection to WhatsApp
    window.open(`https://wa.me/573204437948?text=${encMsg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 block">
            Ubicación y Agendamiento en Bogotá
          </span>
          <h2 className="text-3.5xl sm:text-4xl md:text-5.5xl font-serif text-slate-900 leading-tight">
            Programa Tu Visita
          </h2>
          <div className="h-0.5 w-20 bg-amber-700 mx-auto"></div>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Ubicados estratégicamente en Kennedy, Bogotá. Brindamos facilidades de acceso vehicular y de transporte para tu mayor conveniencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Direct Contact Cards (cols 5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-slate-950 font-light">
                Datos de Contacto
              </h3>
              
              <div className="space-y-4">
                {/* Physical address card */}
                <div className="flex items-start space-x-4 p-4 bg-slate-50/60 border border-slate-105 border-slate-100 shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Consultorio Principal</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Calle 10A #76-30, Kennedy, Bogotá D.C., Colombia
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-slate-200/50">
                      <a
                        href="https://maps.app.goo.gl/wCSBxh3XcK5WZLySA"
                        target="_blank"
                        rel="no-referrer"
                        onClick={() => onIncrementStat("whatsapp")}
                        className="text-[9.5px] uppercase font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Google Maps</span>
                      </a>
                      <span className="text-slate-300">|</span>
                      <a
                        href="https://waze.com/ul/hd2g62vjtu"
                        target="_blank"
                        rel="no-referrer"
                        onClick={() => onIncrementStat("whatsapp")}
                        className="text-[9.5px] uppercase font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Waze</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="flex items-start space-x-4 p-4 bg-slate-50/60 border border-slate-100 shadow-sm">
                  <Clock className="w-5 h-5 text-amber-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Horario de Citas</h4>
                    <p className="text-xs text-slate-600 mt-1.5 font-light leading-relaxed">
                      <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM <br />
                      <strong>Sábados:</strong> 8:00 AM - 1:00 PM <br />
                      <span className="text-amber-800 italic mt-1.5 inline-block">*Atención únicamente con cita previa asignada.</span>
                    </p>
                  </div>
                </div>

                {/* Direct Phone details */}
                <div className="flex items-start space-x-4 p-4 bg-slate-50/60 border border-slate-100 shadow-sm">
                  <Phone className="w-5 h-5 text-amber-700 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Línea Telefónica & WhatsApp</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      +57 320 443 7948
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Medical Safety Seals */}
            <div className="p-6 bg-slate-950 text-white space-y-3">
              <h4 className="text-[10px] uppercase font-black text-amber-500 tracking-widest flex items-center gap-1">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>Práctica Clínica Autorizada</span>
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                Consultorio registrado y homologado ante la Secretaría Distrital de Salud de Bogotá. Protocolos estrictos de bioseguridad, esterilización ecosónica y materiales biológicos homologados.
              </p>
            </div>
          </div>

          {/* Center Block: Interactive Conversions Form (cols 7) */}
          <div className="lg:col-span-7 bg-[#fdfdfd] border border-slate-100 shadow-xl p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-slate-950 font-light">
                Agendamiento Inmediato
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Completa este formulario simplificado. Serás redirigido a nuestro canal de WhatsApp para coordinar el día y la hora exacta de tu cita de valoración con nuestro asistente.
              </p>
            </div>

            {submitted ? (
              <div className="my-8 p-6 bg-emerald-50 border border-emerald-100 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">¡Solicitud Procesada!</h4>
                <p className="text-[12px] text-emerald-700 font-light leading-relaxed">
                  Has sido conectado con el WhatsApp de agenda de citas. Si la ventana no abrió automáticamente, por favor haz clic en el botón flotante de la esquina inferior.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 mt-6 font-sans">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    Nombres y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Claudia Patricia Ospina"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-amber-700 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    Número de Celular (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 320 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-amber-700 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    Especialidad de Interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 outline-none focus:bg-white focus:border-amber-700 transition-colors cursor-pointer"
                  >
                    <option value="profilaxis">Profilaxis e Higiene Dental</option>
                    <option value="ortodoncia">Ortodoncia (brackets / alineadores invisibles)</option>
                    <option value="diseno">Diseño de Sonrisa Avanzado</option>
                    <option value="implantes">Implantes Unitarios de Titanio</option>
                    <option value="rehabilitacion">Rehabilitación Oral / Prótesis Fija</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                    Breve nota médica o duda
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Indícanos si presentas dolor, inflamación, o alguna inquietud específica..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-amber-700 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 border border-slate-900 hover:bg-amber-800 text-white font-bold py-4 text-xs uppercase tracking-widest transition-all shadow-md active:scale-95"
                >
                  Conectar Agenda con WhatsApp &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Iframe Map representation with fully local details */}
        <div className="mt-16 w-full aspect-[16/6] min-h-[300px] bg-slate-100 overflow-hidden shadow-sm border border-slate-150 border-slate-100 shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.857827664766!2d-74.15042992417958!3d4.641611942358022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c1a5c5c5c5d%3A0x1234567890abcdef!2sCl.+10a%20%2376-30%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación consultorio Kennedy Dra. Sandra Milena Torres G."
          ></iframe>
        </div>

      </div>
    </section>
  );
}
