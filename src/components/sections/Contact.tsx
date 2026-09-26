function Contact() {
    return (
        <section className="w-full max-w-4xl mx-auto my-12 px-4 text-brand-dark">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Entre em contato conosco!</h1>
                <p className="text-base text-gray-600">
                    Escolha um dos canais abaixo para falar com nossa equipe.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">

                <div className="flex-1 flex flex-col items-center p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <svg className="w-8 h-8 mb-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-lg font-semibold mb-2">E-mail</h2>
                    <a href="mailto:imobifacesn@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                        imobifacesn@gmail.com
                    </a>
                </div>

                <div className="flex-1 flex flex-col items-center p-8 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <svg className="w-8 h-8 mb-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h2 className="text-lg font-semibold mb-2">Telefone / Outro</h2>
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                        Teste2
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Contact;