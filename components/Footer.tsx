import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Importação do Link adicionada

export const Footer: React.FC = () => {
    const location = useLocation();
    const isStudio = location.pathname === '/studio';

    const bgClass = isStudio ? 'bg-black border-t border-gray-800' : 'bg-[#003B5C]';
    const textClass = 'text-white';
    const mutedClass = isStudio ? 'text-gray-500' : 'text-blue-200';

    return (
        <footer className={`${bgClass} ${textClass} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="../assets/images/logo_solutto_branco.png" alt="Solutto" />
                        </div>
                        <p className={`max-w-sm ${mutedClass}`}>
                            Software ERP especializado em franquias e redes
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg mb-4">Produtos</h3>
                        <ul className={`space-y-2 ${mutedClass}`}>
                            <li><Link to="/" className="hover:text-white transition">Solutto Recorder</Link></li>
                            <li><Link to="/studio" className="hover:text-white transition">Solutto Studio</Link></li>
                            <li><a href="https://solutto.com.br" rel="noopener" target="_blank" className="hover:text-white transition">ERP Para Franquias</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className={`space-y-2 ${mutedClass}`}>
                            {/* Mudança crítica abaixo: de <a> para <Link> */}
                            <li><Link to="/privacy" className="hover:text-white transition">Privacidade</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition">Termos de Uso</Link></li>
                            <li><Link to="/support" className="hover:text-white transition">Suporte</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`mt-12 pt-8 border-t ${isStudio ? 'border-gray-800' : 'border-blue-800'} text-center ${mutedClass} text-sm`}>
                    &copy; {new Date().getFullYear()} Solutto. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};