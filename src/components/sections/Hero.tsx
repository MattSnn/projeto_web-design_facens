import buildings from "../assets/buildings.png";

function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${buildings})` }}>

            <div className="absolute inset-0 bg-linear-to-r from-brand-full-dark via-brand-full-dark/60 to-brand-full-dark/25">
                <div className="flex h-screen pl-20 items-center justify-left px-6">
                    <div className="max-w-2xl text-left">

                        <h1 className="font-family: ['inter'] text-6xl md:text-8xl font-medium tracking-tight">
                            <span className="text-white">Imobi</span>
                            <span className="text-blue-400">Faces</span>
                        </h1>

                        <p className="font-family: ['inter'] mt-5 text-base md:text-lg text-white/80 leading-relaxed">
                            Há mais de 15 anos conectando pessoas aos seus lares ideais.
                            Somos especialistas em imóveis de alto padrão, unindo
                            atendimento próximo, confiança e as melhores oportunidades
                            do mercado imobiliário.
                        </p>

                        <div className="pt-10 text-white  gap-6 flex">
                            <button className="px-6 py-3 rounded-full hover:cursor-pointer bg-brand-muted border border-white/20 text-white font-semibold  hover:bg-brand-muted/70 transition-all duration-300">
                                Ver oportunidades</button>
                            <button className="px-6 py-3 rounded-full hover:cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-300">
                                Falar com um especialista
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero