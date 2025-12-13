import React from 'react';
import { Feature } from '../types';

const studioFeatures: Feature[] = [
    {
        title: "Timeline Multi-track",
        description: "Edição não-linear completa. Camadas ilimitadas de vídeo, áudio e imagens.",
        icon: "fa-layer-group"
    },
    {
        title: "Legendas IA",
        description: "Transcreva áudio automaticamente e gere legendas sincronizadas com um clique.",
        icon: "fa-closed-captioning"
    },
    {
        title: "Efeitos & Transições",
        description: "Biblioteca vasta de transições profissionais e efeitos visuais em tempo real.",
        icon: "fa-wand-magic"
    },
    {
        title: "Render Frame-by-Frame",
        description: "Controle total da qualidade de exportação, bitrate e dimensões (Social/Web).",
        icon: "fa-film"
    }
];

const Studio: React.FC = () => {
    return (
        <div className="bg-[#121212] min-h-screen text-gray-200 pt-20 font-sans selection:bg-blue-500 selection:text-white">
            
            {/* CINEMATIC HERO */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Solutto Studio
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Edição Profissional.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Sem sair do navegador.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Uma suite completa de pós-produção integrada ao Solutto Recorder.
                            Crie, edite e renderize com a performance de desktop na nuvem.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2">
                                <i className="fa-solid fa-play"></i>
                                Começar Projeto
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                                <i className="fa-brands fa-youtube"></i>
                                Ver Demo
                            </button>
                        </div>
                    </div>

                    {/* INTERFACE MOCKUP */}
                    <div className="relative mx-auto max-w-6xl">
                        <div className="rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-2xl overflow-hidden relative group">
                            {/* Window Controls */}
                            <div className="h-10 bg-[#252525] border-b border-gray-800 flex items-center justify-between px-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">Untitled Project - Solutto Studio</div>
                                <div className="w-16"></div>
                            </div>

                            {/* Editor Layout Simulation */}
                            <div className="aspect-video relative bg-[#0f0f0f]">
                                <img 
                                    src="https://picsum.photos/1200/675" 
                                    alt="Video Preview" 
                                    className="w-full h-full object-cover opacity-60"
                                />
                                {/* Overlay UI Elements */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="flex justify-between p-4">
                                        <div className="w-16 h-full bg-[#1e1e1e]/80 backdrop-blur border border-white/10 rounded-lg"></div>
                                        <div className="w-64 h-48 bg-[#1e1e1e]/80 backdrop-blur border border-white/10 rounded-lg p-3">
                                            <div className="text-xs text-gray-400 mb-2">Properties</div>
                                            <div className="space-y-2">
                                                <div className="h-1 bg-gray-700 rounded w-full"></div>
                                                <div className="h-1 bg-gray-700 rounded w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Area */}
                                    <div className="h-32 bg-[#1e1e1e]/90 backdrop-blur border-t border-gray-700 p-2 flex flex-col gap-2">
                                        <div className="flex justify-between text-[10px] text-gray-500 px-2 font-mono">
                                            <span>00:00</span><span>00:15</span><span>00:30</span>
                                        </div>
                                        <div className="flex-1 relative">
                                            <div className="absolute left-0 w-1/3 h-8 bg-blue-900/60 border border-blue-500 rounded flex items-center justify-center text-xs text-blue-200">Video Track 1</div>
                                            <div className="absolute left-1/4 w-1/4 h-8 top-10 bg-purple-900/60 border border-purple-500 rounded flex items-center justify-center text-xs text-purple-200">Audio Overlay</div>
                                            <div className="absolute left-1/3 h-full w-0.5 bg-red-500 top-0 z-10 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition cursor-pointer">
                                        <i className="fa-solid fa-play text-3xl text-white ml-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DARK FEATURES GRID */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {studioFeatures.map((feature, idx) => (
                            <div key={idx} className="p-6 bg-[#151515] border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 text-white shadow-lg">
                                    <i className={`fa-solid ${feature.icon} text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTEGRATION SECTION */}
            <section className="py-24 border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Integração Nativa</h2>
                            <p className="text-gray-400 mb-8">
                                O Solutto Studio lê diretamente os arquivos do Solutto Recorder. 
                                Terminou de gravar? Clique em "Editar no Studio" e seu projeto já nasce configurado.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Sem upload ou download de arquivos brutos
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Formatos otimizados para Web
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fa-solid fa-check text-green-500"></i>
                                    Exportação direta para LMS ou Redes Sociais
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col items-center justify-center aspect-square border border-gray-800">
                                <i className="fa-brands fa-google-drive text-5xl text-gray-500 mb-4"></i>
                                <span className="text-gray-400 font-bold">Google Drive</span>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col items-center justify-center aspect-square border border-gray-800">
                                <i className="fa-brands fa-youtube text-5xl text-red-600 mb-4"></i>
                                <span className="text-gray-400 font-bold">YouTube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Studio;