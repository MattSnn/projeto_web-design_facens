import Footer from "../components/layout/Footer"
import PicturesDisplay from "../components/sections/PicturesDisplay"
import type { Predio } from "../data/prediosLista"

interface ImovelPageProps {
    predio: Predio | null
}

function ImovelPage({ predio }: ImovelPageProps) {
    return (
        <div>
            <PicturesDisplay nome={predio?.name || ""} />
            <Footer />
        </div>
    )
}

export default ImovelPage