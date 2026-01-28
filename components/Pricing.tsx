import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Mensal",
    price: "27,90",
    period: "/mês",
    features: [
      "Agenda Multi-funcionário",
      "Link de Agendamento Online",
      "Gestão de Clientes",
      "Catálogo de Serviços",
      "Controle Financeiro",
      "Dashboard Completo",
      "Suporte via Email"
    ],
    ctaLink: "https://app.sellpay.com.br/c/lipz",
    ctaText: "Assinar Mensal",
    highlight: false
  },
  {
    name: "Anual",
    price: "197,00",
    period: "/ano",
    features: [
      "Todas as funcionalidades do Mensal",
      "Integração WhatsApp IA",
      "White-label (Sua Marca)",
      "Relatórios Avançados",
      "Suporte Prioritário",
      "Economia de 41% em relação ao mensal",
      "Setup Gratuito"
    ],
    ctaLink: "https://app.sellpay.com.br/c/9sxb",
    ctaText: "QUERO O PLANO ANUAL",
    highlight: true,
    subLink: "https://app.sellpay.com.br/c/lipz",
    subLinkText: "Ou assine o mensal por R$ 27,90"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-brand-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Investimento Inteligente
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Escolha o plano ideal para alavancar seu negócio. Sem taxas escondidas, cancele quando quiser.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-3xl p-6 sm:p-8 w-full md:w-1/2 lg:w-1/3 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white text-slate-900 shadow-2xl shadow-brand-500/20 scale-100 md:scale-105 z-20 border-4 border-brand-500' 
                  : 'bg-slate-800 text-white border border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max">
                  <span className="bg-brand-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6 sm:mb-8 text-center pt-2">
                <h3 className={`text-xl font-bold mb-4 ${plan.highlight ? 'text-brand-700' : 'text-slate-300'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center">
                  <span className="text-sm font-semibold mb-6 mr-1">R$</span>
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`text-sm mb-6 ml-1 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
                {plan.highlight && (
                  <p className="text-green-600 font-semibold text-sm mt-2 bg-green-100 inline-block px-3 py-1 rounded-full">
                    Economize R$ 137,80/ano
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-brand-600' : 'text-brand-400'}`} />
                    <span className="text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a 
                  href={plan.ctaLink}
                  className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all transform hover:-translate-y-1 active:scale-95 ${
                    plan.highlight 
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-500/30' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
                
                {plan.highlight && plan.subLink && (
                    <div className="text-center mt-4">
                        <a href={plan.subLink} className="text-sm text-slate-500 hover:text-brand-600 underline decoration-dotted p-2 block">
                            {plan.subLinkText}
                        </a>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;