import React from 'react';
import { MessageCircle, Bot, Zap, Clock } from 'lucide-react';

const AiFeature: React.FC = () => {
  return (
    <section id="ai-feature" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">Exclusividade Agendify</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua Secretária Virtual com <span className="text-emerald-400">Inteligência Artificial</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Não perca mais clientes por falta de resposta. Nossa IA atende no WhatsApp 24/7, confirma horários e impede faltas automaticamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chat Simulation */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 p-4 sm:p-6 shadow-2xl relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg whitespace-nowrap">
                WhatsApp Automático
             </div>
             
             <div className="space-y-4 font-sans text-sm sm:text-base mt-2">
                {/* Message 1: System */}
                <div className="flex justify-start">
                   <div className="bg-slate-700 text-slate-200 rounded-2xl rounded-tl-none py-2.5 px-3 sm:py-3 sm:px-4 max-w-[90%] sm:max-w-[85%]">
                      <p>Olá! Gostaria de confirmar seu agendamento para amanhã às 14:00?</p>
                      <span className="text-xs text-slate-400 block mt-1 text-right">10:00</span>
                   </div>
                </div>

                {/* Message 2: Client */}
                <div className="flex justify-end">
                   <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-none py-2.5 px-3 sm:py-3 sm:px-4 max-w-[90%] sm:max-w-[85%]">
                      <p>Oi! Infelizmente tive um imprevisto. Posso reagendar?</p>
                      <span className="text-xs text-emerald-200 block mt-1 text-right">10:15</span>
                   </div>
                </div>

                 {/* Message 3: AI */}
                 <div className="flex justify-start">
                   <div className="bg-slate-700 text-slate-200 rounded-2xl rounded-tl-none py-2.5 px-3 sm:py-3 sm:px-4 max-w-[95%] sm:max-w-[85%]">
                      <p>Claro! Entendo perfeitamente. 😊 Tenho os seguintes horários livres para quinta-feira:</p>
                      <ul className="mt-2 list-disc list-inside text-emerald-300">
                        <li>09:00</li>
                        <li>15:30</li>
                        <li>17:00</li>
                      </ul>
                      <p className="mt-2">Qual prefere?</p>
                      <span className="text-xs text-slate-400 block mt-1 text-right">10:15 • IA Agendify</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Feature List */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-xl">
                <Bot className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="ml-4 sm:ml-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Disponível 24/7</h3>
                <p className="text-slate-400 text-sm sm:text-base">Seu negócio nunca dorme. A IA atende clientes de madrugada, finais de semana e feriados.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="ml-4 sm:ml-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Redução Drástica de Faltas</h3>
                <p className="text-slate-400 text-sm sm:text-base">O sistema envia lembretes e solicita confirmação automaticamente, liberando o horário caso o cliente cancele.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="ml-4 sm:ml-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Gestão Autônoma</h3>
                <p className="text-slate-400 text-sm sm:text-base">Marca, desmarca e reagenda sem intervenção humana, tudo sincronizado com seu calendário em tempo real.</p>
              </div>
            </div>
            
             <div className="pt-6">
                <a href="#pricing" className="block w-full text-center sm:inline-block bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                  Quero essa tecnologia
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeature;