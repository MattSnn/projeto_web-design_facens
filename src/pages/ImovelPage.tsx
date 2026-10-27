import Footer from "../components/layout/Footer"
import PicturesDisplay from "../components/sections/PicturesDisplay"
import prediosLista, { type Predio } from "../data/prediosLista"
import ImovelDetails from "../components/sections/ImovelDetails"
import Contact from "../components/sections/Contact"
import CardsList from "../components/ui/CardsList"
import { ArrowLeftIcon, ArrowRightIcon } from "../components/ui/Icons"
import { veioDoSite } from "../utils/navigation"
import type { Navigate } from "../utils/navigation"

interface ImovelPageProps {
    predio: Predio | null
    navigate: Navigate
    setImovelEscolhido: (imovel: Predio) => void
}

function ImovelPage({ predio, navigate, setImovelEscolhido }: ImovelPageProps) {
    if (!predio) {
        return (
            <div className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col">
                <main className="flex-1 flex flex-col items-center justify-center gap-3 px-4 py-24 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">Imóvel não encontrado</h1>
                    <p className="text-slate-500">O link pode estar incorreto ou o anúncio foi removido.</p>
                    <button
                        type="button"
                        onClick={() => navigate("todosOsApartamentos")}
                        className="mt-4 rounded-full bg-brand-muted px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                    >
                        Ver todos os imóveis
                    </button>
                </main>
                <Footer />
            </div>
        )
    }

    // mesmo tipo de negócio, priorizando a mesma cidade
    const semelhantes = prediosLista
        .filter((p) => p.id !== predio.id && p.status === predio.status)
        .sort((a, b) => Number(b.location === predio.location) - Number(a.location === predio.location))
        .slice(0, 3)

    const tipo = predio.status === "Aluguel" ? "aluguel" : "venda"

    return (
        <div className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col">
            <main className="w-full max-w-screen-2xl mx-auto px-4 md:px-15 pb-16">

                {/* Breadcrumb */}
                <nav aria-label="Você está em" className="flex flex-wrap items-center gap-2 pt-6 text-sm text-slate-500">
                    <button
                        type="button"
                        onClick={() => veioDoSite() ? window.history.back() : navigate("todosOsApartamentos")}
                        className="mr-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-semibold text-brand-dark transition hover:border-brand-muted"
                    >
                        <ArrowLeftIcon className="h-4 w-4" /> Voltar
                    </button>
                    <button type="button" className="hover:text-brand-muted" onClick={() => navigate("initialPage")}>Início</button>
                    <span aria-hidden="true">/</span>
                    <button type="button" className="hover:text-brand-muted" onClick={() => navigate("todosOsApartamentos", { tipo })}>
                        {predio.status === "Aluguel" ? "Alugar" : "Comprar"}
                    </button>
                    <span aria-hidden="true">/</span>
                    <button type="button" className="hover:text-brand-muted" onClick={() => navigate("todosOsApartamentos", { tipo, busca: predio.location })}>
                        {predio.location}
                    </button>
                    <span aria-hidden="true">/</span>
                    <span className="font-medium text-brand-dark" aria-current="page">{predio.name}</span>
                </nav>

                <PicturesDisplay pictures={predio.images} name={predio.name} />
                <ImovelDetails predio={predio} />

                {semelhantes.length > 0 && (
                    <section className="mt-20">
                        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-dark">Imóveis semelhantes</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => navigate("todosOsApartamentos", { tipo })}
                                className="inline-flex items-center gap-1.5 font-semibold text-brand-muted hover:underline"
                            >
                                Ver todos <ArrowRightIcon className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {semelhantes.map((p) => (
                                <CardsList key={p.id} predio={p} setImovelEscolhido={setImovelEscolhido} />
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Contact />
            <Footer />
        </div>
    )
}

export default ImovelPage
