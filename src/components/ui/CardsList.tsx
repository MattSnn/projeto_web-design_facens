interface CardsListProps {
    name: string
    img: string
    info: string
    location: string
    area: string
}

function CardsList({ name, img, info, location, area }: CardsListProps) {
    return (
        
        <article
            tabIndex={0}
            className="relative w-full aspect-4/5 group overflow-hidden rounded-2xl shadow-md hover:shadow-xl 
            focus-visible:shadow-xl focus-visible:outline-2 focus-visible:outline-accent
            starting:opacity-0 starting:translate-y-4 transition duration-500 ease-out motion-reduce:transition-none">

            <img
                src={img}
                alt={`Foto do ${name}`}
                loading="lazy"
                className=" absolute inset-0 h-full w-full object-cover transition-transform 
                duration-700 group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"/>

            {/* Painel de informações: fechado mostra só o nome, aberto mostra os detalhes */}
            <div
                className="
                    absolute
                    left-0
                    bottom-0
                    rounded-tr-3xl
                    w-full md:w-4/5
                    h-14 md:h-16
                    group-hover:h-4/5
                    group-focus-within:h-4/5
                    overflow-hidden
                    transition-all
                    duration-500
                    motion-reduce:transition-none
                    opacity-90 bg-gray-300 md:bg-surface
                    px-4
                    py-3
                "
            >

                {/* Nome */}
                <h2 className="text-sm md:text-base font-bold text-ink mb-3 leading-tight line-clamp-1">
                    {name}
                </h2>

                <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                    {/* Informações */}
                    <div className="flex flex-col gap-2">

                        {/* Dormitórios */}
                        <div className="flex items-center gap-2 text-xs md:text-sm text-black">
                            <span className="text-accent text-lg" aria-hidden="true">
                                🛏
                            </span>

                            <span>{info}</span>
                        </div>

                        {/* Área */}
                        <div className="flex items-center gap-2 text-xs md:text-sm text-black">
                            <span className="text-accent text-lg" aria-hidden="true">
                                ◎
                            </span>

                            <span>{area}</span>
                        </div>

                        {/* Localização */}
                        <div className="flex items-center gap-2 text-xs md:text-sm text-black">
                            <span className="text-accent text-lg" aria-hidden="true">
                                ♧
                            </span>

                            <span>{location}</span>
                        </div>

                        {/* Botão */}
                        <button
                            className="
                                mt-1
                                w-25
                                h-8.5
                                bg-accent
                                rounded-md
                                text-xs
                                text-on-accent
                                hover:bg-accent-hover
                                transition
                                flex
                                items-center
                                justify-center
                                font-bold
                                gap-1.5
                            "
                        >
                            <span>Conheça</span>
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    leading-none
                                    text-sm
                                    select-none
                                "
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default CardsList