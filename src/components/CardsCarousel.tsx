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
        carouselRef.current?.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    }

    function scrollLeft() {
        carouselRef.current?.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full pt-24 ">
            <div className="flex items-center">

                <div className="w-[340px] mr-15 flex flex-col items-center justify-center ">
                    <h2 className="text-4xl font-serif font-medium tracking-tight text-emerald-950 text-center pb-2">
                        Imóveis em <br />destaque</h2>
                    <div className="flex gap-2">
                        <button
                            className="
                            w-10
                            h-10
                            border-1
                            border-black
                            rounded-md
                            text-xs
                            text-emerald-950
                            hover:bg-[#D3D3D3]
                            transition"
                            onClick={scrollLeft}>
                            ←
                        </button>
                        <button
                            className="
                            w-10
                            h-10
                            border-1
                            border-black
                            rounded-md
                            text-xs
                            text-emerald-950
                            hover:bg-[#D3D3D3]
                            transition"
                            onClick={scrollRight}>→</button>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    className="flex-1 overflow-hidden">

                    <div className="flex gap-5">
                        {predios.map((predio) => (
                            <BuildingCard
                                key={predio.name}
                                name={predio.name}
                                img={predio.img}
                                info={predio.info}
                                area={predio.area}
                                location={predio.location}
                            />
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CardsCarrosel;