import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/logo%20agendify.png" 
                alt="Agendify Logo" 
                className="h-9 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                Funcionalidades
              </button>
              <button onClick={() => scrollToSection('ai-feature')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                Inteligência Artificial
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                Demonstração
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-brand-700 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5"
              >
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-6 space-y-8">
          <div className="space-y-6 text-center">
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-2xl font-bold text-slate-800 py-2 active:scale-95 transition-transform"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('ai-feature')} 
              className="block w-full text-2xl font-bold text-slate-800 py-2 active:scale-95 transition-transform"
            >
              Inteligência Artificial
            </button>
            <button 
              onClick={() => scrollToSection('demo')} 
              className="block w-full text-2xl font-bold text-slate-800 py-2 active:scale-95 transition-transform"
            >
              Demonstração
            </button>
          </div>
          
          <div className="pt-8">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-brand-600 text-white text-xl py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              Ver Planos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;