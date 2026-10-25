import Footer from "../components/layout/Footer"
import PicturesDisplay from "../components/sections/PicturesDisplay"
import type { Predio } from "../data/prediosLista"
import ImovelDetails from "../components/sections/ImovelDetails"
interface ImovelPageProps {
    predio: Predio | null
}

function ImovelPage({ predio }: ImovelPageProps) {
    if (!predio) {
        return (
            <div className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col">
                <main className="flex-1 flex flex-col items-center justify-center gap-3 px-4 py-24 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">Imóvel não encontrado</h1>
                    <p className="text-slate-500">O link pode estar incorreto ou o anúncio foi removido.</p>
                </main>
                <Footer />
            </div>
        )
    }

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