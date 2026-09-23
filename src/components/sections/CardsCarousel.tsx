import BuildingCard from "../ui/BuildingCard";
import predio1 from "../../assets/predio-1.jpg"
import { useRef } from "react";

const predios = [
    {
        name: "Boa Vista Towers",
        img: predio1,
        info: "2 ou 3 dorms",
        area: "43 a 85 m²",
        location: "Alto da Boa Vista",
    },
    {
        name: "Horizonte Moema",
        img: predio1,
        info: "3 a 4 dorms (2 suítes)",
        area: "120 a 240 m²",
        location: "Moema",
    },
    {
        name: "Vila Madalena",
        img: predio1,
        info: "Studio e 1 dorm",
        area: "35 a 55 m²",
        location: "Vila Madalena",
    },
    {
        name: "Jardins Prime",
        img: predio1,
        info: "4 dorms (4 suítes)",
        area: "200 a 420 m²",
        location: "Jardim Paulista",
    },
    {
        name: "Pinheiros Design",
        img: predio1,
        info: "1 a 3 dorms",
        area: "50 a 110 m²",
        location: "Pinheiros",
    },
    {
        name: "Urban Tatuapé",
        img: predio1,
        info: "2 dorms (1 suíte)",
        area: "65 a 90 m²",
        location: "Tatuapé",
    },
    {
        name: "Terraço Ibirapuera",
        img: predio1,
        info: "3 dorms (1 a 3 suítes)",
        area: "140 a 300 m²",
        location: "Vila Mariana",
    },
    {
        name: "Oásis Brooklin",
        img: predio1,
        info: "1 ou 2 dorms",
        area: "45 a 75 m²",
        location: "Brooklin",
    },
]

function CardsCarrosel() {
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
                        <div className="w-1 md:w-1 flex-shrink-0"></div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsCarrosel;