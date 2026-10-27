import Footer from "../components/layout/Footer"
import FilterBar from "../components/layout/FilterBar"
import { FILTROS_VAZIOS } from "../utils/filtros"
import type { Filtros, Ordem, Tipo } from "../utils/filtros"
import Contact from "../components/sections/Contact"
import AptoList from "../components/sections/AptoList"
import prediosLista, { type Predio } from "../data/prediosLista";
import { useEffect, useState } from "react";
import { getParam } from "../utils/navigation";
import buildings from "../components/assets/buildings.jpg";

interface AptoPageProps {
    setImovelEscolhido: (imovel: Predio) => void;
    search: string;
}

// "São Paulo" e "sao paulo" viram a mesma coisa na busca
const normalizar = (texto: string) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

function filtrosDaUrl(search: string): Filtros {
    const tipo = getParam(search, "tipo")
    return {
        ...FILTROS_VAZIOS,
        busca: getParam(search, "busca"),
        tipo: (tipo === "venda" || tipo === "aluguel" ? tipo : "") as Tipo,
        quartos: Number(getParam(search, "quartos")) || 0,
        precoMax: Number(getParam(search, "precoMax")) || 0,
        area: getParam(search, "area"),
        ordem: (getParam(search, "ordem") || "relevancia") as Ordem,
    }
}

const TITULOS: Record<Tipo, string> = {
    "": "Todos os imóveis",
    venda: "Imóveis à venda",
    aluguel: "Imóveis para alugar",
}

function AptoPage({ setImovelEscolhido, search }: AptoPageProps) {

    const [filtros, setFiltros] = useState<Filtros>(() => filtrosDaUrl(search))

    // mantém os filtros na URL (sem criar histórico), assim dá para compartilhar a busca
    useEffect(() => {
        const query = new URLSearchParams({ pagina: "imoveis" })
        for (const [key, value] of Object.entries(filtros)) {
            if (value && !(key === "ordem" && value === "relevancia")) query.set(key, String(value))
        }
        window.history.replaceState(null, "", `${window.location.pathname}?${query.toString()}`)
    }, [filtros])

    const area = (predio: Predio) => parseInt(predio.area)

    const filteredPredios = prediosLista.filter(predio => {
        const texto = normalizar(`${predio.name} ${predio.neighborhood} ${predio.location}`)
        const matchesSearch = normalizar(filtros.busca).split(/\s+/).every((palavra) => texto.includes(palavra));
        const matchesTipo = filtros.tipo === "" ||
            (filtros.tipo === "venda" && predio.status === "À venda") ||
            (filtros.tipo === "aluguel" && predio.status === "Aluguel");
        const matchesPrice = filtros.precoMax === 0 || predio.price <= filtros.precoMax;
        const matchesQuartos = predio.bedrooms >= filtros.quartos;
        const matchesArea = filtros.area === "" ||
            (filtros.area === "<50" && area(predio) < 50) ||
            (filtros.area === "50-100" && area(predio) >= 50 && area(predio) <= 100) ||
            (filtros.area === ">100" && area(predio) > 100);
        return matchesSearch && matchesTipo && matchesPrice && matchesQuartos && matchesArea;
    }
    ).sort((a, b) => {
        if (filtros.ordem === "menor-preco") return a.price - b.price
        if (filtros.ordem === "maior-preco") return b.price - a.price
        if (filtros.ordem === "maior-area") return area(b) - area(a)
        return 0
    });

    return (
        <div className="bg-slate-50">
            {/* Cabeçalho da página */}
            <header
                className="relative isolate bg-brand-dark bg-cover bg-center px-4 md:px-8 pt-12 pb-20 md:pt-16 md:pb-24 text-white"
                style={{ backgroundImage: `url(${buildings})` }}
            >
                <div className="absolute inset-0 -z-10 bg-brand-full-dark/80" />
                <div className="mx-auto max-w-screen-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Encontre seu próximo endereço</h1>
                    <p className="mt-3 max-w-xl text-brand-light/80">
                        Filtre por tipo, quartos, metragem e preço. Todos os anúncios são verificados pela nossa equipe.
                    </p>
                </div>
            </header>

            <FilterBar
                filtros={filtros}
                setFiltros={setFiltros}
                total={filteredPredios.length}
            />
            <div>
                <AptoList
                    title={TITULOS[filtros.tipo]}
                    predios={filteredPredios}
                    setImovelEscolhido={setImovelEscolhido}
                    onLimpar={() => setFiltros(FILTROS_VAZIOS)}
                />
            </div>

            <Contact />
            <Footer />
        </div>
    )
}


export default AptoPage
