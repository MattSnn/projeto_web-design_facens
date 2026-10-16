import { useState } from "react"
import type { Predio } from "../../data/prediosLista"
 
interface PriceCardProps {
    predio: Predio | null
}
 
const brl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
})
 
// Tabela Price: todas as parcelas têm o mesmo valor.
// Fórmula: PMT = financiado * i / (1 - (1 + i)^-meses), onde i = taxa mensal.
function calcParcela(financiado: number, taxaAnual: number, meses: number): number {
    if (financiado <= 0 || meses <= 0) return 0
 
    // converte a taxa anual na taxa mensal equivalente
    const i = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1
 
    if (i === 0) return financiado / meses
    return (financiado * i) / (1 - Math.pow(1 + i, -meses))
}
 
function PriceCard({ predio }: PriceCardProps) {

    const [mostrarSimulador, setMostrarSimulador] = useState(false)
    const [entradaPct, setEntradaPct] = useState(20)
    const [anos, setAnos] = useState(30)
    const [taxaAnual, setTaxaAnual] = useState(10.5)
 
    if (!predio) return null
 
    const isAluguel = predio.status === "Aluguel"
 
    // venda
    const entrada = predio.price * (entradaPct / 100)
    const financiado = predio.price - entrada
    const parcela = calcParcela(financiado, taxaAnual, anos * 12)
 
    // aluguel
    const totalMensal = predio.price + predio.condoFee + predio.iptu / 12
 
    const linhas = [
        { label: "Condomínio", valor: `${brl.format(predio.condoFee)}/mês` },
        { label: "IPTU", valor: `${brl.format(predio.iptu)}/ano` },
        { label: "Área útil", valor: predio.area },
    ]
 
    return (
        <aside className="lg:sticky lg:top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 
            {/* Valor */}
            <p className="text-xs uppercase tracking-wide text-slate-400">
                {isAluguel ? "Aluguel" : "Valor"}
            </p>
            <p className="mt-1 text-3xl md:text-4xl font-bold text-brand-dark">
                {brl.format(predio.price)}
                {isAluguel && <span className="text-base font-medium text-slate-500">/mês</span>}
            </p>
            <p className="mt-1 text-sm text-slate-500">
                {isAluguel
                    ? `${brl.format(totalMensal)}/mês com condomínio e IPTU`
                    : `ou ${brl.format(parcela)}/mês no financiamento`}
            </p>
 
            {/* Detalhes */}
            <dl className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm">
                {linhas.map((linha) => (
                    <div key={linha.label} className="flex justify-between gap-4">
                        <dt className="text-slate-500">{linha.label}</dt>
                        <dd className="font-medium text-brand-dark">{linha.valor}</dd>
                    </div>
                ))}
            </dl>
 
            {/* Botões */}
            <a
                href="#contato"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-accent font-bold text-on-accent hover:bg-accent-hover transition"
            >
                Agendar visita
            </a>
 
            {!isAluguel && (
                <button
                    type="button"
                    onClick={() => setMostrarSimulador(!mostrarSimulador)}
                    className="mt-3 h-12 w-full rounded-full border border-slate-300 font-medium text-brand-dark hover:bg-slate-50 transition"
                >
                    {mostrarSimulador ? "Fechar simulador" : "Simular financiamento"}
                </button>
            )}
 
            {/* Calculadora */}
            {!isAluguel && mostrarSimulador && (
                <div className="mt-5 flex flex-col gap-4 rounded-xl bg-slate-50 p-4 text-sm">
 
                    <label className="flex flex-col gap-2">
                        <span className="flex justify-between gap-2 text-slate-600">
                            Entrada
                            <strong className="text-brand-dark">
                                {entradaPct}% · {brl.format(entrada)}
                            </strong>
                        </span>
                        <input
                            type="range"
                            min={10}
                            max={80}
                            step={5}
                            value={entradaPct}
                            onChange={(e) => setEntradaPct(Number(e.target.value))}
                            className="accent-brand-muted"
                        />
                    </label>
 
                    <label className="flex flex-col gap-2">
                        <span className="text-slate-600">Prazo</span>
                        <select
                            value={anos}
                            onChange={(e) => setAnos(Number(e.target.value))}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-brand-dark"
                        >
                            {[10, 15, 20, 25, 30, 35].map((a) => (
                                <option key={a} value={a}>
                                    {a} anos
                                </option>
                            ))}
                        </select>
                    </label>
 
                    <label className="flex flex-col gap-2">
                        <span className="text-slate-600">Juros (% ao ano)</span>
                        <input
                            type="number"
                            min={0}
                            max={30}
                            step={0.1}
                            value={taxaAnual}
                            onChange={(e) => setTaxaAnual(Number(e.target.value) || 0)}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-brand-dark"
                        />
                    </label>
 
                    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                        <p className="text-xs text-slate-400">Parcela estimada</p>
                        <p className="text-2xl font-bold text-brand-dark">{brl.format(parcela)}</p>
                        <p className="mt-1 text-xs text-slate-500">
                            {brl.format(financiado)} financiados em {anos * 12} meses
                        </p>
                    </div>
 
                    <p className="text-xs text-slate-400">
                        Simulação pela tabela Price, sem seguros e taxas. Valores meramente ilustrativos.
                    </p>
                </div>
            )}
        </aside>
    )
}
 
export default PriceCard
 