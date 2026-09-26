import buildings from "../assets/buildings.png";

function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${buildings})` }}>

            <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-transparent">
                <div className="flex h-screen items-center justify-center px-6">
                    <div className="max-w-2xl text-center">

                        <h1 className="font-['Times_New_Roman'] text-6xl md:text-8xl font-medium tracking-tight">
                            <span className="text-white">Imobi</span>
                            <span className="text-blue-400">Faces</span>
                        </h1>

                        <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                            Há mais de 15 anos conectando pessoas aos seus lares ideais.
                            Somos especialistas em imóveis de alto padrão, unindo
                            atendimento próximo, confiança e as melhores oportunidades
                            do mercado imobiliário.
                        </p>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero