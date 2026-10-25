import type { Predio } from "../../data/prediosLista"
import PriceCard from "./PriceCard"
import CorretorCard from "../ui/CorretorCard"
import FloorPlan from "../ui/FloorPlan"
import { AreaIcon, BathIcon, BedIcon, CarIcon, CheckIcon, FloorIcon, PinIcon } from "../ui/Icons"


interface ImovelDetailsProps {
    predio: Predio
}

const h2Cls = "text-xl md:text-2xl font-bold tracking-tight text-brand-dark mb-4"

function ImovelDetails({ predio }: ImovelDetailsProps) {
    const enderecoCompleto = `${predio.address}, ${predio.neighborhood}, ${predio.location} - SP`

    const especificacoes = [
        { icon: BedIcon, valor: predio.bedrooms, label: predio.bedrooms === 1 ? "Quarto" : "Quartos" },
        { icon: BathIcon, valor: predio.suites, label: predio.suites === 1 ? "Suíte" : "Suítes" },
        { icon: AreaIcon, valor: predio.area, label: "Área útil" },
        { icon: CarIcon, valor: predio.parking, label: predio.parking === 1 ? "Vaga" : "Vagas" },
        { icon: FloorIcon, valor: `${predio.floor}º`, label: "Andar" },
    ]

    return (
        <div className="flex flex-col gap-12 mt-8">
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 min-w-0 flex flex-col gap-12">
                    <header id="sobre">
                        <div className="flex gap-2 mb-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${predio.status === "Aluguel" ? "bg-accent text-on-accent" : "bg-brand-muted text-white"}`}>
                                {predio.status}
                            </span>
                            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                                {predio.tag}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark">
                            {predio.name}
                        </h1>
                        <p className="mt-3 flex items-center gap-1.5 text-slate-500">
                            <PinIcon className="h-5 w-5 shrink-0 text-brand-muted" />
                            {predio.address} · {predio.neighborhood}, {predio.location}
                        </p>

                        <ul className="mt-8 grid grid-cols-3 sm:grid-cols-5 gap-3">
                            {especificacoes.map(({ icon: Icon, valor, label }) => (
                                <li key={label} className="flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4">
                                    <Icon className="h-6 w-6 text-brand-muted" />
                                    <span className="text-lg font-bold text-brand-dark leading-none">{valor}</span>
                                    <span className="text-xs text-slate-500">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </header>

                    <section>
                        <h2 className={h2Cls}>Sobre o imóvel</h2>
                        <p className="text-base md:text-lg leading-relaxed text-slate-600">
                            {predio.description}
                        </p>
                    </section>

                    <section>
                        <h2 className={h2Cls}>Lazer e comodidades</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {predio.amenities.map((amenidade) => (
                                <li key={amenidade} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-dark">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-muted">
                                        <CheckIcon className="h-4 w-4" />
                                    </span>
                                    {amenidade}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="localizacao">
                        <h2 className={h2Cls}>Localização</h2>
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-200">
                            <iframe
                                title={`Mapa: ${enderecoCompleto}`}
                                src={`https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&output=embed`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-64 md:h-96 w-full border-0"
                            />
                        </div>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {predio.nearby.map((item) => (
                                <li key={item.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-brand-dark">
                                    <strong>{item.label}</strong>
                                    <span className="text-slate-400">{item.distance}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="planta">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                            <h2 className={`${h2Cls} mb-0!`}>Planta</h2>
                            <span className="text-sm text-slate-400">{predio.planta} · ilustrativa</span>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8">
                            <FloorPlan bedrooms={predio.bedrooms} suites={predio.suites} area={parseInt(predio.area)} />
                        </div>
                    </section>
                </div>

                <div className="lg:w-96 shrink-0">
                    <div className="lg:sticky lg:top-28 flex flex-col gap-4">
                        <PriceCard predio={predio} />
                        <CorretorCard corretor={predio.corretor} imovel={predio.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImovelDetails
