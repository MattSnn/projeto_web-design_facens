import { useState } from "react"
import { brl, pct } from "../../utils/finance"
import NumberField from "../ui/NumberField"
import Panel from "../ui/Panel"
import ResultCard from "../ui/ResultCard"

function ConsorcioPanel() {
    const [carta, setCarta] = useState(450000)
    const [meses, setMeses] = useState(180)
    const [adm, setAdm] = useState(18)
    const [fundo, setFundo] = useState(2)
 
    const taxaTotal = adm + fundo
    const total = carta * (1 + taxaTotal / 100)
    const parcela = meses > 0 ? total / meses : 0
    const custoTaxas = total - carta
    const pctTaxas = total > 0 ? Math.round((custoTaxas / total) * 100) : 0
 
    return (
        <Panel
            title="Simule seu consórcio"
            result={
                <ResultCard
                    label="Parcela estimada"
                    value={brl.format(parcela)}
                    suffix=" /mês"
                    bar={{ pct: pctTaxas, left: "Carta de crédito", right: "Taxas" }}
                    rows={[
                        { label: "Carta de crédito", value: brl.format(carta) },
                        { label: "Total pago ao final", value: brl.format(total) },
                        { label: "Custo das taxas", value: brl.format(custoTaxas) },
                        { label: "Taxa total", value: pct(taxaTotal) },
                    ]}
                    note="Aproximação: não inclui seguro nem o reajuste anual da carta. Você só usa o crédito depois de ser contemplado (sorteio ou lance)."
                    cta="Falar sobre consórcio"
                />
            }
        >
            <NumberField label="Carta de crédito (R$)" value={carta} onChange={setCarta} step={10000} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <NumberField label="Prazo (meses)" value={meses} onChange={setMeses} step={12} min={1} max={240} />
                <NumberField label="Taxa de adm. (%)" value={adm} onChange={setAdm} step={0.5} max={100} />
                <NumberField label="Fundo de reserva (%)" value={fundo} onChange={setFundo} step={0.5} max={100} />
            </div>
        </Panel>
    )
}

export default ConsorcioPanel