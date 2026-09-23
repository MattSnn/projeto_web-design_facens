import BuildingCard from "./BuildingCard";
import predio1 from "../assets/predio-1.jpg"
import { useRef } from "react";

const predios = [
    {
        name: "Boa Vista Towers",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "43 a 614 m²",
        location: "Alto da Boa Vista",
    },
    {
        name: "Predio 2",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
    {
        name: "Edifício Central",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
    {
        name: "Edifício Central",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
    {
        name: "Boa Vista Towers",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "43 a 614 m²",
        location: "Alto da Boa Vista",
    },
    {
        name: "Predio 2",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
    {
        name: "Edifício Central",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
    {
        name: "Edifício Central",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "60 a 420 m²",
        location: "São Paulo",
    },
]

function CardsCarrosel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    function scrollRight() {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            
            // Se a rolagem atual + o tamanho visível for maior ou igual ao tamanho total (com margem de 10px)
            if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
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
        <div className="w-full pt-12 md:pt-24 ">
            <div className="flex flex-col md:flex-row items-center">

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
                        {predios.map((predio, index) => (
                            <BuildingCard
                                key={index} // Alterado para index para evitar erro de chaves duplicadas
                                name={predio.name}
                                img={predio.img}
                                info={predio.info}
                                area={predio.area}
                                location={predio.location}
                            />
                        ))}
                        
                        {/* DIV ESPAÇADORA INVISÍVEL NO FINAL DA LISTA */}
                        <div className="w-2 md:w-8 flex-shrink-0"></div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsCarrosel;