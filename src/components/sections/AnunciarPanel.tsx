import { useState } from "react"
import { brl } from "../../utils/finance"
import NumberField from "../ui/NumberField"
import Panel from "../ui/Panel"
import ResultCard from "../ui/ResultCard"

function AnunciarPanel() {
    const [valor, setValor] = useState(600000)
    const [aluguel, setAluguel] = useState(3000)
    const [adm, setAdm] = useState(10)
    const [vago, setVago] = useState(1)
 
    const liquidoAnual = aluguel * Math.max(12 - vago, 0) * (1 - adm / 100)
    const rentabilidade = valor > 0 ? (liquidoAnual / valor) * 100 : 0
 
    return (
        <Panel
            title="Quanto rende o seu imóvel alugado?"
            result={
                <ResultCard
                    label="Renda líquida média"
                    value={brl.format(liquidoAnual / 12)}
                    suffix=" /mês"
                    rows={[
                        { label: "Renda líquida por ano", value: brl.format(liquidoAnual) },
                        { label: "Taxa de administração", value: `${brl.format((aluguel * adm) / 100)}/mês` },
                        { label: "Rentabilidade anual líquida", value: `${rentabilidade.toFixed(1).replace(".", ",")}%` },
                    ]}
                    note="Estimativa simples: não considera imposto de renda sobre aluguel, reformas nem impostos do imóvel."
                    cta="Anunciar meu imóvel"
                />
            }
        >
            <NumberField label="Valor do imóvel (R$)" value={valor} onChange={setValor} step={10000} />
            <NumberField label="Aluguel pretendido (R$/mês)" value={aluguel} onChange={setAluguel} step={100} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <NumberField label="Taxa de administração (%)" value={adm} onChange={setAdm} step={0.5} />
                <NumberField label="Meses vagos por ano" value={vago} onChange={setVago} />
            </div>
        </Panel>
    )
}

export default AnunciarPanel