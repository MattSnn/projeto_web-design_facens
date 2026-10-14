import BuildingCard from "../ui/BuildingCard";
import { useRef } from "react";
import { prediosLista } from "../../data/prediosLista";
import type { Predio } from "../../data/prediosLista";

interface CardsCarroselProps {
    setImovelEscolhido: (imovel: Predio | null) => void
}
function CardsCarrosel({ setImovelEscolhido }: CardsCarroselProps) {
    const carouselRef = useRef<HTMLDivElement>(null)

    function scrollRight() {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

            // Se a rolagem atual + o tamanho visível for maior ou igual ao tamanho total (com margem de 5px)
            if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5) {
                // Volta para o começo
                carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Continua rolando
                carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
                carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
            }
        }
    }

    return (
        <div id="oportunidades" className="relative isolate w-full pt-12 md:pt-24 ">
            <div className="flex flex-col md:flex-row items-center">

                <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-r from-blue-50 via-transparent to-transparent" />

                <div className="w-85 mb-15 md:mr-15 flex flex-col items-center justify-center ">
                    <h2 className=" text-2xl md:text-4xl font-serif font-medium tracking-tight text-brand-dark text-center pb-2">
                        Imóveis em <br />destaque</h2>
                    <div className="flex gap-2">
                        <button
                            className="w-7 md:w-10 h-7 md:h-10 border border-brand-dark rounded-md text-xs text-brand-dark hover:bg-surface-muted transition"
                            onClick={scrollLeft}>
                            ←
                        </button>
                        <button
                            className="w-7 md:w-10 h-7 md:h-10 border border-brand-dark rounded-md text-xs text-brand-dark hover:bg-surface-muted transition"
                            onClick={scrollRight}>
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    className="flex-1 overflow-hidden max-w-full">

                    <div className="flex gap-3 md:gap-5">
                        {prediosLista.map((predio, index) => (
                            <BuildingCard
                                key={index}
                                predio={predio}
                                setImovelEscolhido={setImovelEscolhido}
                            />
                        ))}

                        <div className="w-1 md:w-1 shrink-0"></div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsCarrosel;