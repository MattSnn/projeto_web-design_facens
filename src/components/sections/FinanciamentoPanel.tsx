import { useState } from "react"
import { parcelaPrice, simulaSac, brl } from "../../utils/finance"
import Panel from "../ui/Panel"
import ResultCard from "../ui/ResultCard"
import NumberField from "../ui/NumberField"
import Field from "../ui/Field"
import { inputCls } from "../../utils/finance"
import Segmented from "../ui/Segmented"


interface FinanciamentoPanelProps {
    onVerImoveis?: (valorMaximo: number) => void
}

function FinanciamentoPanel({ onVerImoveis }: FinanciamentoPanelProps) {
    const [valor, setValor] = useState(450000)
    const [entradaPct, setEntradaPct] = useState(20)
    const [anos, setAnos] = useState(30)
    const [juros, setJuros] = useState(10.5)
    const [sistema, setSistema] = useState<"price" | "sac">("price")
 
    const entrada = valor * (entradaPct / 100)
    const financiado = valor - entrada
    const meses = anos * 12
 
    const sac = simulaSac(financiado, juros, meses)
    const parcela = sistema === "price" ? parcelaPrice(financiado, juros, meses) : sac.primeira
    const total = sistema === "price" ? parcela * meses : sac.total
    const totalJuros = total - financiado
    const pctJuros = total > 0 ? Math.round((totalJuros / total) * 100) : 0
 
    return (
        <Panel
            title="Simule seu financiamento"
            result={
                <ResultCard
                    label={sistema === "price" ? "Parcela estimada" : "Primeira parcela (diminui com o tempo)"}
                    value={brl.format(parcela)}
                    suffix=" /mês"
                    bar={{ pct: pctJuros, left: "Financiado", right: "Juros" }}
                    rows={[
                        { label: "Entrada", value: brl.format(entrada) },
                        { label: "Valor financiado", value: brl.format(financiado) },
                        { label: "Total pago ao final", value: brl.format(total) },
                        { label: "Total de juros", value: brl.format(totalJuros) },
                        { label: "Renda recomendada (parcela ≤ 30%)", value: brl.format(parcela / 0.3) },
                    ]}
                    note="Valores aproximados, sem seguros e taxas do banco. A parcela real depende da análise de crédito."
                    cta="Ver imóveis para esse valor"
                    onCta={onVerImoveis && (() => onVerImoveis(valor))}
                />
            }
        >
            <NumberField label="Valor do imóvel (R$)" value={valor} onChange={setValor} step={10000} />
 
            <Field label="Entrada" hint={`${entradaPct}% · ${brl.format(entrada)}`}>
                <input
                    type="range"
                    min={10}
                    max={80}
                    step={5}
                    value={entradaPct}
                    onChange={(e) => setEntradaPct(Number(e.target.value))}
                    className="accent-brand-muted"
                />
            </Field>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Prazo">
                    <select
                        value={anos}
                        onChange={(e) => setAnos(Number(e.target.value))}
                        className={inputCls}
                    >
                        {[10, 15, 20, 25, 30, 35].map((a) => (
                            <option key={a} value={a}>{a} anos</option>
                        ))}
                    </select>
                </Field>
                <NumberField label="Juros (% ao ano)" value={juros} onChange={setJuros} step={0.1} />
            </div>
 
            <div className="flex flex-col gap-2 text-sm text-slate-500">
                Sistema de amortização
                <Segmented
                    options={[
                        { id: "price", label: "Price · parcela fixa" },
                        { id: "sac", label: "SAC · parcela decrescente" },
                    ]}
                    value={sistema}
                    onChange={setSistema}
                />
            </div>
        </Panel>
    )
}

export default FinanciamentoPanel