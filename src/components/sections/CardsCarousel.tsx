import BuildingCard from "../ui/BuildingCard";
import { useRef } from "react";
import { prediosLista } from "../../data/prediosLista";
import type { Predio } from "../../data/prediosLista";
import { ArrowLeftIcon, ArrowRightIcon } from "../ui/Icons";

interface CardsCarroselProps {
    setImovelEscolhido: (imovel: Predio | null) => void
    onVerTodos: () => void
}
function CardsCarrosel({ setImovelEscolhido, onVerTodos }: CardsCarroselProps) {
    const carouselRef = useRef<HTMLDivElement>(null)

    // anda o tamanho de um card (+ espaço entre eles)
    function passo() {
        const card = carouselRef.current?.firstElementChild as HTMLElement | null
        return card ? card.offsetWidth + 20 : 320
    }

    function scrollRight() {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

            // Se a rolagem atual + o tamanho visível for maior ou igual ao tamanho total (com margem de 5px)
            if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5) {
                // Volta para o começo
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Continua rolando
                carouselRef.current.scrollBy({ left: passo(), behavior: "smooth" });
            }
        }
    }

    function scrollLeft() {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth } = carouselRef.current;

            // Se estiver no começo (com margem de erro de 10px)
            if (scrollLeft <= 10) {
                // Vai direto para o final
                carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
            } else {
                // Continua voltando
                carouselRef.current.scrollBy({ left: -passo(), behavior: "smooth" });
            }
        }
    }

    const arrowCls = "flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-brand-dark shadow-sm transition hover:border-brand-muted hover:bg-brand-muted hover:text-white"

    return (
        <section id="oportunidades" className="relative isolate w-full py-16 md:py-24 bg-slate-50">
            <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-transparent to-transparent" />

            <div className="mx-auto max-w-screen-2xl px-5 md:px-15">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="max-w-xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Seleção ImobiFaces</p>
                        <h2 className="mt-2 text-3xl md:text-5xl font-display font-medium tracking-tight text-brand-dark">
                            Imóveis em destaque
                        </h2>
                        <p className="mt-3 text-slate-500">
                            Apartamentos escolhidos a dedo pelos nossos corretores, prontos para visitar.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" aria-label="Anterior" className={arrowCls} onClick={scrollLeft}>
                            <ArrowLeftIcon className="h-5 w-5" />
                        </button>
                        <button type="button" aria-label="Próximo" className={arrowCls} onClick={scrollRight}>
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={onVerTodos}
                            className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-muted"
                        >
                            Ver todos <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={carouselRef}
                className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 md:px-15 scroll-px-5 md:scroll-px-15 pb-4">
                {prediosLista.map((predio) => (
                    <BuildingCard
                        key={predio.id}
                        predio={predio}
                        setImovelEscolhido={setImovelEscolhido}
                    />
                ))}
                <div className="w-1 shrink-0" />
            </div>

            <div className="mt-4 px-5 sm:hidden">
                <button
                    type="button"
                    onClick={onVerTodos}
                    className="w-full rounded-full bg-brand-dark px-5 py-3.5 text-sm font-bold text-white"
                >
                    Ver todos os imóveis
                </button>
            </div>
        </section>
    )
}

export default CardsCarrosel;
