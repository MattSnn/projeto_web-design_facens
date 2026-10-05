import InfoCard from "../ui/InfoCard";
import casa1 from "../assets/casa-card-1.jpg"
import Corretores from "../assets/corretor.png"
import Familias from "../assets/FamiliasAtendidas.jpg"
import ImobiFaces from "../assets/ImobiFacens.jpg"
import Separation
 from "../ui/Separation";
const CARDS_INFO = [
    {
        name: "Imoveis Vendidos:",
        value: "345.123",
        image: casa1
    },
    {
        name: "Famílias Atendidas",
        value: "496.589",
        image: Familias
    },
    {
        name: "Anos de Mercado:",
        value: "15",
        image: ImobiFaces
    },
    {
        name: "Corretores Especialistas:",
        value: "25",
        image: Corretores
    }
]

function DataInfo() {
    return (
        <div className="relative isolate w-full px-8 py-16">

            <Separation/>

            <div className="content-center text-center justify-center mx-auto">
                <h1 className="font-bold text-3xl pb-10">Sobre nós</h1>
            </div>


            <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-r from-blue-50 via-transparent to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
                {CARDS_INFO.map((card) => (
                    <div
                        className="w-full"
                        key={card.name}
                    >
                        <InfoCard
                            name={card.name}
                            value={card.value}
                            image={card.image}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DataInfo;