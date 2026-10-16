import type { Predio } from "../../data/prediosLista"
import Separation from "../ui/Separation"
import PriceCard from "./PriceCard"


interface ImovelDetailsProps {
    predio: Predio | null
}

function ImovelDetails({ predio }: ImovelDetailsProps) {
    return (
        <div className="flex flex-col gap-8 mt-5">
            <div id="sobre" className="w-full flex flex-col lg:flex-row gap-8">
                <div className="flex-1 min-w-0">
                    <header>
                        <div className="flex gap-2 mb-2">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                {predio?.status}
                            </span>
                            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                                {predio?.tag}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {predio?.name}
                        </h1>
                        <p className="text-sm text-slate-600">
                            📍{predio?.address} — {predio?.neighborhood} - {predio?.location}
                        </p>
                    </header>
                    <Separation />
                    <ul className="flex flex-wrap gap-x-8 gap-y-3 border-y border-slate-200 py-5 text-sm md:text-base text-slate-600">
                        <li className="flex items-center gap-2">🛏{predio?.bedrooms} Quartos</li>
                        <li className="flex items-center gap-2">◎{predio?.area}</li>
                        <li className="flex items-center gap-2">🅿{predio?.parking} Vagas</li>
                        <li className="flex items-center gap-2">🏢{predio?.floor}º Andar</li>
                    </ul>
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-3">Sobre o imóvel</h2>
                        <p className="leading-relaxed text-slate-500">
                            {predio?.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-3">Sobre o imóvel</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {predio?.amenities.map((amenite) => (
                                <li className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark">
                                    {amenite}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div id="calculadora" className="lg:w-88 shrink-0">
                    <PriceCard predio={predio} />
                </div>
            </div>

            <div id="localizacao">
                <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-4">Localização</h2>
                <div className="h-56 md:h-80 w-full rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400">
                    Imagem da região (a encontrar)
                </div>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                    {predio?.nearby.map((item) => (
                        <li className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark">
                            {item.label} — {item.distance}
                        </li>
                    ))}
                </ul>
            </div>
            <div id="planta">
                <h2 className="text-xl md:text-2xl font-semibold text-brand-dark mb-4">Planta</h2>
                <div className="h-56 md:h-80 w-full rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400">
                    Futura Planta (a encontrar)
                </div>
            </div>

        </div>
    )
}

export default ImovelDetails