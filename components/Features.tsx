import React from 'react';
import { Feature } from '../types';
import { 
  Users, Calendar, Scissors, Briefcase, BarChart3, 
  Wallet, MessageSquare, Bell, Palette, Globe, 
  Lock, Zap, ShieldCheck, Smartphone, FileText, Settings 
} from 'lucide-react';

const featuresList: Feature[] = [
  {
    title: "Agenda Multi-funcionário",
    description: "Gerencie múltiplos funcionários com agendas individuais e visão geral completa.",
    icon: Users
  },
  {
    title: "Gestão de Clientes",
    description: "Cadastro completo de clientes com histórico de atendimentos e preferências.",
    icon: Calendar
  },
  {
    title: "Catálogo de Serviços",
    description: "Configure serviços com preços, durações e profissionais habilitados.",
    icon: Scissors
  },
  {
    title: "Gestão de Funcionários",
    description: "Controle horários, folgas e comissões de cada profissional.",
    icon: Briefcase
  },
  {
    title: "Dashboard Completo",
    description: "Métricas e relatórios em tempo real sobre seu negócio.",
    icon: BarChart3
  },
  {
    title: "Controle Financeiro",
    description: "Acompanhe receitas, despesas e lucro com relatórios detalhados.",
    icon: Wallet
  },
  {
    title: "WhatsApp Automático",
    description: "Lembretes e confirmações automáticas via WhatsApp.",
    icon: MessageSquare
  },
  {
    title: "Notificações por Email",
    description: "Envio automático de emails de confirmação e lembrete.",
    icon: Bell
  },
  {
    title: "White-label Completo",
    description: "Personalize cores, logo e marca da sua página de agendamento.",
    icon: Palette
  },
  {
    title: "Página de Agendamento",
    description: "Link personalizado para seus clientes agendarem online 24/7.",
    icon: Globe
  },
  {
    title: "Bloqueios de Horário",
    description: "Bloqueie horários para folgas, férias ou compromissos.",
    icon: Lock
  },
  {
    title: "Controle de Despesas",
    description: "Registre e categorize todas as despesas do seu negócio.",
    icon: FileText
  },
  {
    title: "Segurança Total",
    description: "Seus dados protegidos com criptografia de ponta.",
    icon: ShieldCheck
  },
  {
    title: "Tempo Real",
    description: "Sincronização instantânea em todos os dispositivos.",
    icon: Zap
  },
  {
    title: "Relatórios Exportáveis",
    description: "Exporte dados em Excel e PDF para sua contabilidade.",
    icon: FileText
  },
  {
    title: "Configurações Avançadas",
    description: "Personalize cada detalhe do sistema para seu negócio.",
    icon: Settings
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Recursos Poderosos para o seu Negócio
          </h2>
          <p className="text-lg text-slate-600">
            Descubra porque o Agendify é a escolha certa para quem busca profissionalismo e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;