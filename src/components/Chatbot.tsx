import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, PhoneCall, CalendarRange } from "lucide-react";
import { ChatMessage } from "../types";

interface ChatbotProps {
  onIncrementStat: (type: string) => void;
  onOpenConsultation: () => void;
}

export default function Chatbot({ onIncrementStat, onOpenConsultation }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "bot",
      text: "¡Hola! Soy <strong>Estefanía</strong> ✨, la asistente virtual de la <strong>Dra. Sandra Milena Torres Gómez</strong>. ¿En qué puedo servirte hoy? Puedo contarte sobre nuestros tratamientos de profilaxis, ortodoncia invisible, diseño de sonrisa o agilizar tu cita de valoración.",
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = [
    { text: "¿Qué es profilaxis?", key: "profilaxis" },
    { text: "Dolor de muela", key: "dolor" },
    { text: "Ortodoncia Invisible", key: "ortodoncia" },
    { text: "Diseño de Sonrisa", key: "diseno" },
    { text: "Ubicación y Horarios", key: "ubicacion" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsTyping(true);

    try {
      // Connect to server proxy `/api/chat` safely hiding keys
      const historyPayload = messages.slice(-8).map((m) => ({
        sender: m.sender,
        text: m.text.replace(/<[^>]*>/g, "") // strip HTML tags for Gemini context history
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      const data = await res.json();
      setIsTyping(false);

      const botMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: "bot",
        text: data.reply || "Lo siento, experimentamos un error temporal. Por favor contáctanos directamente por nuestro WhatsApp oficial +57 320 443 7948.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error communicating with chat proxy:", err);
      setIsTyping(false);
      
      const errorMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: "bot",
        text: "¡Hola! Parece que tenemos fallas de conexión temporales. Con gusto responderemos todas tus preguntas y asignaremos tu valoración dental por nuestro WhatsApp oficial: <a href='https://wa.me/573204437948' target='_blank' style='color:#b45309;font-weight:bold;text-decoration:underline;'>Chatear por WhatsApp aquí</a>.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-150 font-sans">
      
      {/* Floating Action Button trigger */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            onIncrementStat("promo"); // track chatbot engagement
          }}
          className="relative bg-gradient-to-br from-slate-900 to-amber-900 text-white rounded-full p-4 sm:px-6 sm:py-4 shadow-2xl hover:shadow-amber-800/30 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group focus:outline-none"
          title="Asistente Virtual"
        >
          {/* Audio pulsing rings */}
          <span className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping -z-10"></span>
          
          <Bot className="w-6 h-6 text-amber-300" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-slate-100 font-sans">
            Consultar a Estefanía
          </span>
        </button>
      )}

      {/* Actual Chat Window Interface (Professional Polish aesthetic) */}
      {isOpen && (
        <div className="w-[340px] sm:w-[400px] h-[550px] bg-slate-950 border border-slate-800 shadow-2xl flex flex-col justify-between animate-fade-in text-white overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">Estefanía ✨</h4>
                <p className="text-[9.5px] text-green-500 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  <span>En Línea • Consultorio Médico</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors rounded"
              title="Minimizar chat"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Quick Choice recommendation pills */}
          <div className="bg-slate-900/60 p-2.5 flex items-center gap-2 overflow-x-auto shrink-0 border-b border-slate-900">
            {quickReplies.map((qr) => (
              <button
                key={qr.key}
                onClick={() => handleSend(qr.text)}
                className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/40 hover:bg-amber-800 hover:text-white px-3 py-1.5 whitespace-nowrap transition-colors focus:outline-none cursor-pointer border border-amber-900/50"
              >
                {qr.text}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/40 select-text">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 max-w-[85%] ${
                  m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                {/* Visual Avatar icons */}
                <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${
                  m.sender === "user" ? "bg-amber-800 text-white" : "bg-slate-800 text-amber-400"
                }`}>
                  {m.sender === "user" ? <User className="w-4.5 h-4.5" /> : <Bot className="w-4.5 h-4.5" />}
                </div>

                <div className={`p-3 relative shrink-0 w-full ${
                  m.sender === "user"
                    ? "bg-amber-900 text-white rounded-none"
                    : "bg-slate-900 text-slate-100 rounded-none border border-slate-800"
                }`}>
                  <p 
                    className="text-xs font-light leading-relaxed whitespace-pre-wrap select-text selection:bg-amber-100 selection:text-slate-900" 
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  ></p>
                  
                  <span className="text-[8px] text-slate-500 mt-1 block text-right font-sans font-medium">
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Simulated typing indicator */}
            {isTyping && (
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-slate-800 text-amber-400 shrink-0 flex items-center justify-center">
                  <Bot className="w-4.5 h-4.5" />
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 whitespace-nowrap">
                  <div className="flex gap-1 text-amber-500 text-xs items-center justify-center font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-200"></span>
                    <span className="font-sans font-light text-[10px] text-slate-500 ml-1.5">Estefanía redactando...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Consultation shortcuts in footer to make it conversion-ready */}
          <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-900/60 flex items-center justify-between text-[11px] text-slate-400">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="text-amber-500 hover:text-white font-bold inline-flex items-center gap-1 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              <CalendarRange className="w-3.5 h-3.5" />
              <span>Agenda de Citas</span>
            </button>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/573204437948"
              target="_blank"
              onClick={() => onIncrementStat("whatsapp")}
              className="text-emerald-500 hover:text-white font-bold inline-flex items-center gap-1 cursor-pointer uppercase tracking-wider text-[10px]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Llamar Directo</span>
            </a>
          </div>

          {/* Chat input form */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              placeholder="Pregúntame sobre precios, profilaxis, dirección..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(userInput); }}
              className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 leading-none text-xs px-4 py-3 outline-none focus:border-amber-700 font-light"
            />
            <button
              onClick={() => handleSend(userInput)}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 shrink-0 focus:outline-none transition-colors"
              title="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
