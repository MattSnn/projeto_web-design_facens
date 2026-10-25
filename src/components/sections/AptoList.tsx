import CardsList from "../ui/CardsList";
import type { Predio } from "../../data/prediosLista";
 
interface AptoListProps {
    title: string;
    predios: Predio[];
    setImovelEscolhido: (imovel: Predio) => void;
};
 
 
function AptoList({ title, predios, setImovelEscolhido }: AptoListProps) {

    return (
        <section id="oportunidades" className="relative isolate w-full pt-10 md:pt-16 pb-16">
 
            <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-r from-blue-50 via-transparent to-transparent" />
 
            <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8">
 
                {/* Cabeçalho da lista: título + quantidade de resultados (útil quando os filtros entrarem) */}
                <header className="flex flex-wrap items-baseline justify-between gap-2 mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-ink">
                        {title}
                    </h2>
 
                    <p className="text-sm text-ink/70" aria-live="polite">
                        {predios.length} {predios.length === 1 ? "imóvel" : "imóveis"}
                    </p>
                </header>
 
                {predios.length > 0 ? (
                    // 1 coluna no celular, 2 no tablet, 3-4 no desktop
                    <div
                        key={predios.map(p => p.id).join("|")}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-6">
                        {predios.map((predio) => (
                            <CardsList
                                key={predio.id}
                                predio={predio}
                                setImovelEscolhido={setImovelEscolhido}
                            />
                        ))}
                    </div>
                ) : (
                    // Estado vazio: aparece quando os filtros não retornam nada
                    <div className="py-20 text-center">
                        <p className="text-lg font-bold text-ink">
                            Nenhum imóvel encontrado
                        </p>
                        <p className="mt-1 text-sm text-ink/70">
                            Tente mudar a busca, a metragem ou o preço.
                        </p>
                    </div>
                )}
 
            </div>
        </section>
    )
}
 
export default AptoList;