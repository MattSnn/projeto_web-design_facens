import Footer from "../components/layout/Footer"
import Contact from "../components/sections/Contact"
import AptoList from"../components/sections/AptoList"
import prediosLista from"../data/prediosLista";

function AptoPage() {
    return (
        <div>

            <div>
                <AptoList title="Venda" predios={prediosLista} />
            </div>

            <div>
                <AptoList title="Locação" predios={prediosLista} />
            </div>

            <Contact />
            <Footer />
        </div>
    )
}






export default AptoPage