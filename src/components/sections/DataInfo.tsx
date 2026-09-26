import InfoCard from "../ui/InfoCard";
import casa1 from "../assets/casa-card-1.jpg"
import Corretores from "../assets/corretor.png"
import Familias from "../assets/FamiliasAtendidas.jpg"
import ImobiFaces from "../assets/ImobiFacens.jpg"

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

function DataInfo(){
    return(
        <div className="flex justify-center gap-6 px-8 py-16 bg-blue-50">
            {CARDS_INFO.map((card) => (
                <InfoCard 
                    key={card.name}
                    name={card.name}
                    value={card.value}
                    image={card.image}
                />
            ))}
        </div>
    )
}

export default DataInfo;