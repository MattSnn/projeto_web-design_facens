import { useState } from "react"
import { brl, pct } from "../../utils/finance"
import NumberField from "../ui/NumberField"
import Panel from "../ui/Panel"
import ResultCard from "../ui/ResultCard"

interface AluguelPanelProps {
    onVerImoveis?: (aluguelMaximo: number) => void
}

function AluguelPanel({ onVerImoveis }: AluguelPanelProps) {
    const [aluguel, setAluguel] = useState(2500)
    const [condominio, setCondominio] = useState(600)
    const [iptu, setIptu] = useState(900)
    const [reajuste, setReajuste] = useState(5)
 
    const mensal = aluguel + condominio + iptu / 12
 
    return (
        <Panel
            title="Quanto custa alugar?"
            result={
                <ResultCard
                    label="Custo mensal total"
                    value={brl.format(mensal)}
                    suffix=" /mês"
                    rows={[
                        { label: "Custo por ano", value: brl.format(mensal * 12) },
                        { label: "Renda usual exigida (3× o aluguel)", value: brl.format(aluguel * 3) },
                        { label: `Aluguel após reajuste de ${pct(reajuste)}`, value: brl.format(aluguel * (1 + reajuste / 100)) },
                    ]}
                    note="Estimativa. O reajuste segue o índice previsto em contrato e as exigências variam por imobiliária."
                    cta="Ver imóveis para alugar"
                    onCta={onVerImoveis && (() => onVerImoveis(aluguel))}
                />
            }
        >
            <NumberField label="Aluguel (R$/mês)" value={aluguel} onChange={setAluguel} step={100} max={10_000_000} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <NumberField label="Condomínio (R$/mês)" value={condominio} onChange={setCondominio} step={50} max={10_000_000} />
                <NumberField label="IPTU (R$/ano)" value={iptu} onChange={setIptu} step={100} max={10_000_000} />
                <NumberField label="Reajuste (% ao ano)" value={reajuste} onChange={setReajuste} step={0.5} max={100} />
            </div>
        </Panel>
    )
}

export default AluguelPanel