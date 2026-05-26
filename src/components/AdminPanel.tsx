import { useState, useEffect } from "react";
import { BarChart, RefreshCw, X, Shield, Eye, Calendar, Award } from "lucide-react";
import { ClinicStats } from "../types";

interface AdminPanelProps {
  onClose: () => void;
  stats: ClinicStats;
  onRefresh: () => void;
}

export default function AdminPanel({ onClose, stats, onRefresh }: AdminPanelProps) {
  const maxVal = Math.max(stats.visits, stats.whatsappClicks, stats.promoClicks, 10);
  
  // Custom percentages for SVG/CSS Bar Charts representation
  const pctVisits = (stats.visits / maxVal) * 100;
  const pctWa = (stats.whatsappClicks / maxVal) * 100;
  const pctPromo = (stats.promoClicks / maxVal) * 100;

  return (
    <div className="fixed inset-0 z-200 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-10 max-w-4xl w-full text-white shadow-2xl relative">
        
        {/* Absolute Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full focus:outline-none transition-colors"
          title="Cerrar Panel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-8">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Administración Clínica</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-wide">
              Panel de Estadísticas SEO & Conversión
            </h2>
          </div>
          
          <button
            onClick={onRefresh}
            className="inline-flex items-center justify-center space-x-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold px-4 py-2 uppercase tracking-widest text-white transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Actualizar Datos</span>
          </button>
        </div>

        {/* Stats Numeric Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          
          {/* Visits card */}
          <div className="p-6 bg-slate-950 border border-slate-800 relative overflow-hidden">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Total Visitas</span>
            <div className="text-4xl font-serif font-semibold text-amber-400 mt-2">{stats.visits}</div>
            <p className="text-[10px] text-slate-500 mt-2">Visitas únicas orgánicas registradas.</p>
          </div>

          {/* WhatsApp clicks */}
          <div className="p-6 bg-slate-950 border border-slate-800 relative overflow-hidden">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Agendamientos (WhatsApp)</span>
            <div className="text-4xl font-serif font-semibold text-emerald-400 mt-2">{stats.whatsappClicks}</div>
            <p className="text-[10px] text-slate-500 mt-2">Clics de pacientes para cita de valoración.</p>
          </div>

          {/* Promo clicks */}
          <div className="p-6 bg-slate-950 border border-slate-800 relative overflow-hidden">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Interacciones Promoción</span>
            <div className="text-4xl font-serif font-semibold text-pink-400 mt-2">{stats.promoClicks}</div>
            <p className="text-[10px] text-slate-500 mt-2">Interés en convenios y promociones.</p>
          </div>

        </div>

        {/* Custom SVG/CSS Bar Chart (Avoids dependencies glitches) */}
        <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 space-y-6">
          <h3 className="text-md font-serif font-semibold text-white tracking-wider flex items-center gap-2">
            <BarChart className="w-4 h-4 text-amber-500" />
            <span>Rendimiento Gráfico de Conversión</span>
          </h3>

          <div className="space-y-4 pt-2">
            
            {/* Row 1 - Visits */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Visitas Orgánicas del Sitio</span>
                <span className="font-bold text-amber-400">{stats.visits}</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-none overflow-hidden">
                <div 
                  className="h-full bg-amber-500 transition-all duration-500" 
                  style={{ width: `${pctVisits}%` }}
                ></div>
              </div>
            </div>

            {/* Row 2 - Whatsapp */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Consultas e Interés en Servicios (WhatsApp)</span>
                <span className="font-bold text-emerald-400">{stats.whatsappClicks}</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-none overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500" 
                  style={{ width: `${pctWa}%` }}
                ></div>
              </div>
            </div>

            {/* Row 3 - Promo */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Clics en Promoción Especial</span>
                <span className="font-bold text-pink-400">{stats.promoClicks}</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-none overflow-hidden">
                <div 
                  className="h-full bg-pink-500 transition-all duration-500" 
                  style={{ width: `${pctPromo}%` }}
                ></div>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-800 text-[10.5px] text-slate-500 flex flex-wrap justify-between">
            <span>Objetivo mensual: <strong>50 citas de valoración orgánicas.</strong></span>
            <span>Tasa de Conversión: <strong>{stats.visits > 0 ? ((stats.whatsappClicks / stats.visits) * 100).toFixed(1) : 0}%</strong></span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-xs font-semibold px-8 py-3.5 uppercase tracking-widest text-white transition-colors"
          >
            Cerrar Ventana Administrativa
          </button>
        </div>

      </div>
    </div>
  );
}
