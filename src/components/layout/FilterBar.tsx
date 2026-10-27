import { brl } from "../../utils/finance"
import { FILTROS_VAZIOS } from "../../utils/filtros"
import type { Filtros, Ordem } from "../../utils/filtros"

interface FilterBarProps {
    filtros: Filtros
    setFiltros: (filtros: Filtros) => void
    total: number
}

const PRECOS_VENDA = [400000, 600000, 800000, 1000000, 1500000]
const PRECOS_ALUGUEL = [2500, 3500, 5000, 7000]

const selectCls = "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-brand-dark outline-none transition focus:border-brand-muted focus:bg-white"
const labelCls = "flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-400"

function FilterBar({ filtros, setFiltros, total }: FilterBarProps) {
    const set = <K extends keyof Filtros>(key: K, value: Filtros[K]) => setFiltros({ ...filtros, [key]: value })

    // a faixa de preço muda conforme o tipo (venda x aluguel)
    const opcoesPreco = filtros.tipo === "aluguel" ? PRECOS_ALUGUEL : filtros.tipo === "venda" ? PRECOS_VENDA : []
    const precoForaDaLista = filtros.precoMax > 0 && !opcoesPreco.includes(filtros.precoMax)
    const temFiltro = JSON.stringify(filtros) !== JSON.stringify(FILTROS_VAZIOS)

    return (
        <div className="relative z-10 -mt-10 mx-auto w-full max-w-screen-2xl px-4 md:px-8">
            <div className="rounded-3xl bg-white p-4 md:p-6 shadow-xl shadow-brand-dark/10 ring-1 ring-slate-200">

                <div className="flex flex-col lg:flex-row gap-3">
                    {/* Busca */}
                    <label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-brand-muted focus-within:bg-white">
                        <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20 20-3.5-3.5" />
                        </svg>
                        <span className="sr-only">Pesquisar</span>
                        <input
                            type="search"
                            value={filtros.busca}
                            placeholder="Busque por nome, endereço, bairro ou cidade..."
                            onChange={(e) => set("busca", e.target.value)}
                            className="h-12 w-full bg-transparent text-sm text-brand-dark outline-none placeholder:text-slate-400"
                        />
                    </label>

                    {/* Comprar / Alugar */}
                    <div className="flex rounded-xl bg-slate-100 p-1" role="group" aria-label="Tipo de negócio">
                        {([["", "Todos"], ["venda", "Comprar"], ["aluguel", "Alugar"]] as const).map(([valor, label]) => (
                            <button
                                key={valor}
                                type="button"
                                aria-pressed={filtros.tipo === valor}
                                onClick={() => setFiltros({ ...filtros, tipo: valor, precoMax: 0 })}
                                className={`flex-1 lg:flex-none rounded-lg px-5 py-2.5 text-sm font-bold transition ${filtros.tipo === valor ? "bg-brand-dark text-white shadow" : "text-slate-500 hover:text-brand-dark"}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label htmlFor="filter-quartos" className={labelCls}>
                        Quartos
                        <select id="filter-quartos" value={filtros.quartos} onChange={(e) => set("quartos", Number(e.target.value))} className={selectCls}>
                            <option value={0}>Qualquer</option>
                            {[1, 2, 3, 4].map((q) => <option key={q} value={q}>{q}+ {q === 1 ? "quarto" : "quartos"}</option>)}
                        </select>
                    </label>

                    <label htmlFor="filter-type" className={labelCls}>
                        Metragem
                        <select id="filter-type" value={filtros.area} onChange={(e) => set("area", e.target.value)} className={selectCls}>
                            <option value="">Qualquer</option>
                            <option value="<50">Menor que 50m²</option>
                            <option value="50-100">Entre 50m² e 100m²</option>
                            <option value=">100">Acima de 100m²</option>
                        </select>
                    </label>

                    <label htmlFor="filter-price" className={labelCls}>
                        Preço até
                        <select
                            id="filter-price"
                            value={filtros.precoMax}
                            disabled={filtros.tipo === "" && !precoForaDaLista}
                            onChange={(e) => set("precoMax", Number(e.target.value))}
                            className={`${selectCls} disabled:cursor-not-allowed disabled:opacity-60`}
                        >
                            <option value={0}>{filtros.tipo === "" && !precoForaDaLista ? "Escolha comprar ou alugar" : "Qualquer"}</option>
                            {precoForaDaLista && <option value={filtros.precoMax}>{brl.format(filtros.precoMax)}{filtros.tipo === "aluguel" ? "/mês" : ""}</option>}
                            {opcoesPreco.map((p) => <option key={p} value={p}>{brl.format(p)}{filtros.tipo === "aluguel" ? "/mês" : ""}</option>)}
                        </select>
                    </label>

                    <label htmlFor="filter-ordem" className={labelCls}>
                        Ordenar por
                        <select id="filter-ordem" value={filtros.ordem} onChange={(e) => set("ordem", e.target.value as Ordem)} className={selectCls}>
                            <option value="relevancia">Relevância</option>
                            <option value="menor-preco">Menor preço</option>
                            <option value="maior-preco">Maior preço</option>
                            <option value="maior-area">Maior área</option>
                        </select>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm">
                    <p className="text-slate-500" aria-live="polite">
                        <strong className="text-brand-dark">{total}</strong> {total === 1 ? "imóvel encontrado" : "imóveis encontrados"}
                    </p>
                    {temFiltro && (
                        <button
                            type="button"
                            onClick={() => setFiltros(FILTROS_VAZIOS)}
                            className="font-semibold text-brand-muted hover:underline"
                        >
                            Limpar filtros
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilterBar
