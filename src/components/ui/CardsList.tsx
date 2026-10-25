import type { Predio } from "../../data/prediosLista"
import { formatPreco } from "../../utils/finance"
import { AreaIcon, ArrowRightIcon, BedIcon, CarIcon, PinIcon } from "./Icons"

interface CardsListProps {
    predio: Predio;
    setImovelEscolhido: (imovel: Predio) => void;
}

function CardsList({ predio, setImovelEscolhido }: CardsListProps) {
    const isAluguel = predio.status === "Aluguel"

    return (
        <article
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-sm
            hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-dark/10 focus-within:ring-2 focus-within:ring-brand-muted
            starting:opacity-0 starting:translate-y-4 transition duration-500 ease-out motion-reduce:transition-none">

            {/* Foto + selos */}
            <div className="relative aspect-4/3 overflow-hidden">
                <img
                    src={predio.mainImg}
                    alt={`Fachada do ${predio.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${isAluguel ? "bg-accent text-on-accent" : "bg-brand-muted text-white"}`}>
                        {predio.status}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
                        {predio.tag}
                    </span>
                </div>
                <p className="absolute bottom-3 left-4 flex items-center gap-1 text-sm font-medium text-white">
                    <PinIcon className="h-4 w-4" />
                    {predio.neighborhood}, {predio.location}
                </p>
            </div>

            {/* Informações */}
            <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="text-lg font-bold leading-tight text-ink line-clamp-1">
                    {/* o link cobre o card inteiro (after:inset-0), assim tudo é clicável e acessível pelo teclado */}
                    <button
                        type="button"
                        onClick={() => setImovelEscolhido(predio)}
                        className="text-left after:absolute after:inset-0 focus:outline-none"
                    >
                        {predio.name}
                    </button>
                </h3>

                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <li className="flex items-center gap-1.5"><BedIcon className="h-4 w-4 text-brand-muted" />{predio.bedrooms} {predio.bedrooms === 1 ? "quarto" : "quartos"}</li>
                    <li className="flex items-center gap-1.5"><AreaIcon className="h-4 w-4 text-brand-muted" />{predio.area}</li>
                    <li className="flex items-center gap-1.5"><CarIcon className="h-4 w-4 text-brand-muted" />{predio.parking} {predio.parking === 1 ? "vaga" : "vagas"}</li>
                </ul>

                <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">{isAluguel ? "Aluguel" : "Valor"}</p>
                        <p className="text-xl font-bold text-brand-dark">{formatPreco(predio.price, predio.status)}</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-muted transition-all duration-300 group-hover:bg-brand-muted group-hover:text-white" aria-hidden="true">
                        <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                </div>
            </div>
        </article>
    )
}

export default CardsList
