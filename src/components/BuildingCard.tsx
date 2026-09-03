interface BuildingCardProps {
    name: string
    img: string
    info: string
    location: string
    area: string
}

function BuildingCard({ name, img, info, location, area }: BuildingCardProps) {
    return (
        <div className="relative h-[320px] w-[340px] shrink-0 group">

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
                    w-[220px]
                    h-[75px]
                    group-hover:h-[240px]
                    transition-all
                    duration-500
                    bg-white
                    px-5
                    py-5
                "
            >

                {/* Nome */}
                <h2 className="text-xl text-gray-900 mb-4">
                    {name}
                </h2>
                <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {/* Informações */}
                    <div className="flex flex-col gap-3">

                        {/* Dormitórios */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-[#B9E94C] text-xl">
                                🛏
                            </span>

                            <span>{info}</span>
                        </div>

                        {/* Área */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-[#B9E94C] text-xl">
                                ◎
                            </span>

                            <span>{area}</span>
                        </div>

                        {/* Localização */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-[#B9E94C] text-xl">
                                ♧
                            </span>

                            <span>{location}</span>
                        </div>

                        {/* Botão */}
                        <button
                            className="
                            mt-2
                            w-[100px]
                            h-[34px]
                            bg-[#B9E94C]
                            rounded-md
                            text-xs
                            text-emerald-950
                            hover:bg-[#a9dc3e]
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