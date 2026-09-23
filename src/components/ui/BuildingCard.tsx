interface BuildingCardProps {
    name: string
    img: string
    info: string
    location: string
    area: string
}

function BuildingCard({ name, img, info, location, area }: BuildingCardProps) {
    return (
        <div className="relative h-55 md:h-80 w-42 md:w-85 shrink-0 group m-1">

            <img
                src={img}
                alt={`Foto do ${name}`}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    rounded-tr-[50px]
                "
            />

            <div
                className="
                    absolute
                    left-0
                    bottom-0
                    w-full md:w-55
                    h-13 md:h-18.75
                    group-hover:h-60
                    transition-all
                    duration-500
                    opacity-80 md:opacity-90 bg-gray-300  md:bg-surface
                    px-5
                    py-5
                "
            >

                {/* Nome */}
                <h2 className="text-md md:text-xl text-ink mb-4">
                    {name}
                </h2>
                <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {/* Informações */}
                    <div className="flex flex-col gap-3">

                        {/* Dormitórios */}
                        <div className="flex items-center gap-2 text-sm text-black">
                            <span className="text-accent text-xl">
                                🛏
                            </span>

                            <span>{info}</span>
                        </div>

                        {/* Área */}
                        <div className="flex items-center gap-2 text-sm text-black">
                            <span className="text-accent text-xl">
                                ◎
                            </span>

                            <span>{area}</span>
                        </div>

                        {/* Localização */}
                        <div className="flex items-center gap-2 text-sm text-black">
                            <span className="text-accent text-xl">
                                ♧
                            </span>

                            <span>{location}</span>
                        </div>

                        {/* Botão */}
                        <button
                            className="
                            mt-2
                            w-25
                            h-8.5
                            bg-accent
                            rounded-md
                            text-xs
                            text-on-accent
                            hover:bg-accent-hover
                            transition
                        "
                        >
                            Conheça
                            <span className="text-lg"> →</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BuildingCard