import CardsList from "../ui/CardsList";

type Predio = {
    name: string;
    img: string;
    info: string;
    area: string;
    location: string;
};
 
type AptoListProps = {
    title: string;
    predios: Predio[];
};
 
 
function AptoList({ title, predios }: AptoListProps) {

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
                    // 2 columns on mobile, 3 on tablet, 5 on desktop. Page scroll is vertical only.
                    <div
                        key={predios.map(p => p.name).join("|")} 
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                        {predios.map((predio, index) => (
                            <CardsList
                                key={index}
                                name={predio.name}
                                img={predio.img}
                                info={predio.info}
                                area={predio.area}
                                location={predio.location}
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