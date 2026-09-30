import BuildingCard from "../ui/BuildingCard";
import { useRef } from "react";

type Predio = 
    {
        name: string;
        img: string;
        info: string;
        area: string;
        location: string;
    };

type AptoListProps = {
        title: string;
        predios: Predio[];
}


function AptoList({title, predios}: AptoListProps) {
    const aptoRef = useRef<HTMLDivElement>(null)

    function scrollRight() {
        if (aptoRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = aptoRef.current;

            // Se a rolagem atual + o tamanho visível for maior ou igual ao tamanho total (com margem de 5px)
            if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 5) {
                // Volta para o começo
                aptoRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Continua rolando
                aptoRef.current.scrollBy({ left: 300, behavior: "smooth" });
            }
        }
    }

    function scrollLeft() {
        if (aptoRef.current) {
            const { scrollLeft, scrollWidth } = aptoRef.current;

            // Se estiver no começo (com margem de erro de 10px)
            if (scrollLeft <= 10) {
                // Vai direto para o final
                aptoRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
            } else {
                // Continua voltando
                aptoRef.current.scrollBy({ left: -300, behavior: "smooth" });
            }
        }
    }

    return (
        <div id="oportunidades" className="relative isolate w-full pt-12 md:pt-24 ">
            <div className="flex flex-col md:flex-row items-center">

                <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-r from-blue-50 via-transparent to-transparent" />

                <div className="w-85 mb-15 md:mr-15 flex flex-col items-center justify-center ">
                    <h2 className=" text-2xl md:text-4xl font-serif font-medium tracking-tight text-brand-dark text-center pb-2">
                        {title}</h2>
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
                    ref={aptoRef}
                    className="flex-1 overflow-hidden max-w-full">

                    <div className="flex gap-3 md:gap-5">
                        {predios.map((predio, index) => (
                            <BuildingCard
                                key={index}
                                name={predio.name}
                                img={predio.img}
                                info={predio.info}
                                area={predio.area}
                                location={predio.location}
                            />
                        ))}

                        <div className="w-1 md:w-1 shrink-0"></div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AptoList;