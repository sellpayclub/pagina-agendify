import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <img 
              src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/logo%20agendify.png" 
              alt="Agendify Logo" 
              className="h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Agendify. Todos os direitos reservados.</p>
            <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-brand-600 transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-brand-600 transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;