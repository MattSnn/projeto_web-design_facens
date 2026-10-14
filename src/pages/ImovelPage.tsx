import Footer from "../components/layout/Footer"
import PicturesDisplay from "../components/sections/PicturesDisplay"
import type { Predio } from "../data/prediosLista"
import ImovelDetails from "../components/sections/ImovelDetails"
interface ImovelPageProps {
    predio: Predio | null
}

function ImovelPage({ predio }: ImovelPageProps) {
    return (
        <div className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col">
            <main className="flex-col gap-20 w-full max-w-screen-2xl mx-auto px-4 md:px-15 pb-10">
                <PicturesDisplay />
                <ImovelDetails predio={predio} />
            </main>
            <Footer />
        </div>
    )
}

export default ImovelPage