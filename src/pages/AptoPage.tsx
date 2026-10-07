import Footer from "../components/layout/Footer"
import FilterBar from "../components/layout/FilterBar"
import Contact from "../components/sections/Contact"
import AptoList from"../components/sections/AptoList"
import prediosLista from"../data/prediosLista";
import { useState } from "react";
function AptoPage() {

    const [search, setSearch] = useState<string>("")
    const [priceSelected, setPriceSelected] = useState<string>("")
    const [areaSelected, setAreaSelected] = useState<string>("")

    const filteredPredios = prediosLista.filter(predio => {
        const matchesSearch = predio.name.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = priceSelected === "" || 
            (priceSelected === "<500000" && predio.price < 500000) ||
            (priceSelected === "500000-1000000" && predio.price >= 500000 && predio.price <= 1000000) ||
            (priceSelected === ">1000000" && predio.price > 1000000);
        const matchesArea = areaSelected === "" || 
            (areaSelected === "<50" && parseInt(predio.area) < 50) ||
            (areaSelected === "50-100" && parseInt(predio.area) >= 50 && parseInt(predio.area) <= 100) ||
            (areaSelected === ">100" && parseInt(predio.area) > 100);
        return matchesSearch && matchesPrice && matchesArea;
    }
    );

    return (
        <div>
            <FilterBar 
            setSearch={setSearch}
            setPrice={setPriceSelected}
            setArea={setAreaSelected}
            />
            <div>
                <AptoList title="Todos os Imóveis" predios={filteredPredios}/>
            </div>


            <Contact />
            <Footer />
        </div>
    )
}






export default AptoPage