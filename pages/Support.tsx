import React, { useState } from 'react';

// Interfaces mantidas
interface ContactFormData {
    name: string;
    email: string;
    tel: string;
    obs: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "A extensão diz que não tem permissão para acessar a câmera/microfone.",
        answer: "Isso ocorre quando o navegador bloqueia o acesso por segurança. Clique no ícone de cadeado 🔒 na barra de endereço do navegador, localize as permissões de Câmera e Microfone e altere para 'Permitir'. Recarregue a página em seguida."
    },
    {
        question: "Gravei um vídeo, mas ele ficou sem áudio.",
        answer: "Verifique se você selecionou a fonte de áudio correta no popup da extensão antes de iniciar. Se escolheu 'Áudio do Sistema', certifique-se de que a aba ou aplicativo estava emitindo som durante a gravação."
    },
    {
        question: "Minha gravação parou inesperadamente.",
        answer: "Isso pode acontecer por falta de memória RAM disponível no seu computador ou se a aba que estava sendo gravada foi fechada. Tente fechar outras abas pesadas e gravar novamente."
    },
    {
        question: "O vídeo exportado não abre no meu player.",
        answer: "O formato padrão é WEBM, otimizado para web. Se precisar enviar para alguém, recomendamos converter para MP4 no Editor ou usar um player compatível como o VLC."
    }
];

const Support: React.FC = () => {
    // Estado do Formulário
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        tel: '',
        obs: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    // --- MÁSCARA DE TELEFONE (NOVO) ---
    const phoneMask = (value: string) => {
        if (!value) return "";
        
        // Remove tudo o que não é dígito
        value = value.replace(/\D/g, '');
        
        // Limita a 11 dígitos (DDD + 9 números)
        value = value.substring(0, 11);

        // Aplica a formatação
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // (11) 9...
        value = value.replace(/(\d)(\d{4})$/, '$1-$2'); // ...-1234

        return value;
    }

    // Manipulação dos inputs com aplicação da máscara
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        // Se for o campo de telefone, aplica a máscara
        if (name === 'tel') {
            value = phoneMask(value);
        }

        setFormData({ ...formData, [name]: value });
    };

    // Alternar FAQ
    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const payload = {
            ...formData,
            // Remove a formatação ao enviar, mantendo apenas números (opcional, mas recomendado para APIs)
            tel: formData.tel.replace(/\D/g, ''), 
            requestType: "solutto-recorder"
        };

        try {
            const response = await fetch('https://core-ksi-0965169e8f49.herokuapp.com/utils/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', tel: '', obs: '' });
            } else {
                throw new Error('Falha no envio');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-20">
            {/* Header Section */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20 bg-[#003B5C]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                     <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500 opacity-20 blur-3xl"></div>
                     <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Central de <span className="text-[#00C0A3]">Suporte.</span>
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Encontre respostas rápidas para problemas comuns ou entre em contato direto com nosso time de engenharia.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    
                    {/* Coluna da Esquerda: FAQ */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#003B5C] mb-8 flex items-center gap-3">
                            <i className="fa-solid fa-circle-question text-[#00C0A3]"></i>
                            Perguntas Frequentes
                        </h2>
                        
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                    <button 
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800">{item.question}</span>
                                        <i className={`fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}></i>
                                    </button>
                                    
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coluna da Direita: Formulário */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#003B5C] mb-2">Ainda precisa de ajuda?</h2>
                            <p className="text-gray-500 mb-8 text-sm">Preencha o formulário abaixo. Nossa equipe responde em até 24h.</p>

                            {status === 'success' ? (
                                <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center animate-fade-in-up">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fa-solid fa-check text-2xl text-green-600"></i>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Mensagem Enviada!</h3>
                                    <p>Recebemos sua solicitação e entraremos em contato em breve.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-green-700 hover:underline">Enviar outra mensagem</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            // As classes aqui pegarão o estilo global definido no index.css
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="joao@empresa.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                                            <input 
                                                type="tel" 
                                                name="tel"
                                                required
                                                value={formData.tel}
                                                onChange={handleChange}
                                                placeholder="(11) 99999-9999"
                                                maxLength={15} // Limite de segurança visual
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Como podemos ajudar?</label>
                                        <textarea 
                                            name="obs"
                                            required
                                            value={formData.obs}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Descreva seu problema ou sugestão em detalhes..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                            <i className="fa-solid fa-circle-exclamation mr-2"></i>
                                            Ocorreu um erro ao enviar. Tente novamente mais tarde.
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={status === 'submitting'}
                                        className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
                                            ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#003B5C] hover:bg-[#002a42] hover:shadow-xl hover:-translate-y-1'}
                                        `}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <i className="fa-solid fa-circle-notch fa-spin"></i> Enviando...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensagem <i className="fa-solid fa-paper-plane"></i>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;