import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 sm:w-96 sm:h-96 bg-brand-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 sm:w-80 sm:h-80 bg-fuchsia-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-xs sm:text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
              O sistema mais completo do Brasil
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Tudo que Você Precisa em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Um Só Lugar</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sistema completo e profissional. Gerencie sua agenda, clientes e financeiro com inteligência artificial, <span className="font-bold text-brand-600">sem precisar contratar uma secretária</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a 
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 active:scale-95 transform hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#demo"
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center"
              >
                Ver Demonstração
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-500">
              <div className="flex items-center bg-white/50 px-3 py-1 rounded-full border border-slate-100 sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="h-4 w-4 text-brand-600 mr-2" />
                Sem fidelidade
              </div>
              <div className="flex items-center bg-white/50 px-3 py-1 rounded-full border border-slate-100 sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="h-4 w-4 text-brand-600 mr-2" />
                Suporte humanizado
              </div>
              <div className="flex items-center bg-white/50 px-3 py-1 rounded-full border border-slate-100 sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="h-4 w-4 text-brand-600 mr-2" />
                Setup instantâneo
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <div className="relative rounded-2xl shadow-2xl bg-white border border-slate-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
                <img 
                  src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/dashborda%20print%20agendify.png" 
                  alt="Dashboard Agendify" 
                  className="w-full h-auto object-cover"
                />
            </div>
            
            {/* Floating Mobile Element - Now visible on mobile too but styled differently */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-left-6 w-2/5 sm:w-1/3 shadow-2xl rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white transform -rotate-6 sm:-rotate-3 overflow-hidden z-20">
               <img 
                  src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/link%20agendamento%20celular.png" 
                  alt="Mobile Booking" 
                  className="w-full h-auto"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;