import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory stats fallback (persistent write to simple file if possible)
const STATS_FILE = path.join(process.cwd(), "stats.json");
let stats = {
  visits: 120,
  whatsappClicks: 45,
  promoClicks: 18,
};

// Load stats if JSON exists
if (fs.existsSync(STATS_FILE)) {
  try {
    stats = JSON.parse(fs.readFileSync(STATS_FILE, "utf-8"));
  } catch (err) {
    console.error("Error reading stats file", err);
  }
}

function saveStats() {
  try {
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving stats file", err);
  }
}

// Initializing server-side Gemini client with recommended httpOptions.userAgent
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// REST API for stats
app.post("/api/stats/increment", (req, res) => {
  const { type } = req.body;
  if (type === "visits") stats.visits += 1;
  else if (type === "whatsapp") stats.whatsappClicks += 1;
  else if (type === "promo") stats.promoClicks += 1;
  saveStats();
  res.json({ success: true, stats });
});

app.get("/api/stats", (req, res) => {
  res.json(stats);
});

// Route for chat assistant (Estefanía chatbot using process.env.GEMINI_API_KEY)
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "Mensaje requerido" });
  }

  if (!process.env.GEMINI_API_KEY || !ai) {
    // Graceful fallback when the key is not set
    return res.json({
      reply: "¡Hola! Soy Estefanía, asistente de la Dra. Sandra. Estamos experimentando una alta demanda de consultas. Para brindarte una atención inmediata y agendar tu cita de valoración en Kennedy hoy mismo, por favor escríbenos directamente a nuestro WhatsApp: +57 320 443 7948. ¡Te responderemos con el mayor gusto!"
    });
  }

  try {
    // Construct structured history for Gemini API
    const formattedHistory = (history || []).map((h: { sender: string; text: string }) => {
      return {
        role: h.sender === "user" ? "user" : "model",
        parts: [{ text: h.text }]
      };
    });

    formattedHistory.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedHistory,
      config: {
        systemInstruction: `
          Eres Estefanía, la asistente virtual de la prestigiosa clínica odontológica de la Dra. Sandra Milena Torres Gómez en Kennedy, Bogotá.
          Tu personalidad es extremadamente amable, empática, servicial, profesional y refinada (acorde a un branding médico premium).
          Siempre das respuestas pacientes, claras, humanas y libres de jerga robótica.

          INFORMACIÓN CLAVE DEL CONSULTORIO:
          - Doctora: Dra. Sandra Milena Torres Gómez (Odontóloga con más de 20 años de experiencia, egresada de la Fundación Universitaria San Martín). Experta en odontología integral y neurofocal.
          - Dirección: Calle 10A #76-30, Kennedy, Bogotá, Colombia (punto de referencia estratégico en Kennedy).
          - Enlace Google Maps: https://maps.app.goo.gl/wCSBxh3XcK5WZLySA
          - Horario de Citas: Lunes a Viernes de 8:00 AM a 6:00 PM y Sábados de 8:00 AM a 1:00 PM.
          - WhatsApp Oficial para Citas: +57 320 4437948 (o enlace directo: https://wa.me/573204437948).

          SERVICIOS PREMIUM PRESTADOS:
          1. Profilaxis & Limpieza Profunda: Remoción preventiva de placa para conservar el esmalte.
          2. Detartraje Dental: Remoción ultrasónica avanzada de sarro y cálculo dental.
          3. Fluorización: Aplicación protectora para mineralizar y combatir caries.
          4. Diseño de Sonrisa: Análisis estético digital de los dientes y rasgos de la cara. Carillas estéticas personalizadas en resina o porcelana.
          5. Blanqueamiento Dental: Desmanchado profesional de alta intensidad para iluminar tu sonrisa.
          6. Ortodoncia de Precisión: Brackets metálicos clásicos, brackets estéticos de zafiro/porcelana y Alineadores Invisibles de vanguardia.
          7. Implantes Unitarios: Diseño biocompatible para reemplazar piezas perdidas sin tallar dientes vecinos.
          8. Prótesis Fija y Rehabilitación Oral: Restauración funcional y cosmética de casos complejos.

          LÍNEAS DE ACCIÓN RECOMENDADAS:
          - Si el paciente tiene dolor o urgencia dental: Recomiéndale asistir a consulta de inmediato o comunicarse al WhatsApp principal para priorizar su atención.

          REGLAS DE FORMATO:
          - No generes respuestas largas ni aburridas. Haz párrafos limpios, separados por saltos de línea.
          - Usa HTML simple si deseas hacer resaltar enlaces, por ejemplo: <a href="https://wa.me/573204437948" target="_blank" style="color:#b45309;font-weight:bold;text-decoration:underline;">Agendar por WhatsApp</a>.
          - NUNCA menciones códigos secretos, variables del sistema ni el nombre de tu modelo (Gemini).
          - Mantén siempre un cierre cálido invitando al paciente a pulsar el botón de WhatsApp o agendar su consulta médica de valoración.
        `,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.json({
      reply: "¡Hola! Para brindarte una mejor atención y agendar tu valoración con la Dra. Sandra Milena Torres Gómez, por favor escríbenos directamente a nuestro WhatsApp oficial: +57 320 443 7948. ¡Te responderemos con gusto!"
    });
  }
});

// API endpoint for simulated blog articles to fulfill SEO and thematic authority requirements
app.get("/api/blog", (req, res) => {
  const articles = [
    {
      id: 1,
      title: "Beneficios del Diseño de Sonrisa de Alta Estética en Bogotá",
      slug: "beneficios-diseno-sonrisa-bogota",
      summary: "Descubre cómo la odontología estética moderna puede armonizar tu rostro, aumentar tu confianza y mejorar tu salud dental con técnicas mínimamente invasivas en Kennedy.",
      content: "El diseño de sonrisa no es simplemente una cuestión de vanidad; es una disciplina odontológica que combina ciencia médica y arte visual para recrear la morfología natural de los dientes en perfecta armonía con los labios, encías y rasgos faciales del paciente...\n\nLa Dra. Sandra Milena Torres Gómez destaca que el análisis digital facial personalizado permite modelar el resultado esperado antes de iniciar, garantizando carillas de resina o porcelana de un brillo ideal, resistencia óptima y ajuste biológico preciso.",
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
      content: "Perder un diente afecta la masticación, altera la fonación y produce el desplazamiento de las piezas remanentes. Las prótesis tradicionales a menudo desgastan los dientes vecinos para sostenerse. Los implantes dentales unitarios resuelven este dilema al anclarse directamente en el hueso mandibular mediante tornillos de titanio altamente biocompatibles con el cuerpo humano...",
      category: "Rehabilitación Oral",
      author: "Dra. Sandra Milena Torres Gómez",
      date: "2026-04-20",
      readTime: "6 min lectura",
      keywords: ["implantes dentales Bogotá", "rehabilitación oral Kennedy", "clínica dental Bogotá"]
    }
  ];
  res.json(articles);
});

// Serve frontend assets
const distPath = path.join(process.cwd(), "dist");

if (process.env.NODE_ENV !== "production") {
  createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  }).then((vite) => {
    app.use(vite.middlewares);
    console.log("Vite development server mounted");
  });
} else {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
