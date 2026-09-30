import Footer from "../components/layout/Footer"
import Contact from "../components/sections/Contact"
import AptoList from"../components/sections/AptoList"

function AptoPage() {
    return (
        <div>

            <div>
                <AptoList title="Venda" predios={[]} />
            </div>

            <div>
                <AptoList title="Locação" predios={[]} />
            </div>

            <Contact />
            <Footer />
        </div>
    )
}






export default AptoPage