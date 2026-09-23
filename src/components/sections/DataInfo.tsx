import InfoCard from "../ui/InfoCard";
import casa1 from "../assets/casa-card-1.jpg"

const CARDS_INFO = [
    {
        name: "Imoveis vendidos",
        value: "2.345.123",
        image: casa1
    },
    {
        name: "teste2",
        value: "value2",
        image: "temp"
    },
    {
        name: "teste3",
        value: "value3",
        image: "temp"
    },
    {
        name: "teste3",
        value: "value3",
        image: "temp"
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