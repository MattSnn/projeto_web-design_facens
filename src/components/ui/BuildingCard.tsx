import type { Predio } from "../../data/prediosLista"
import CardsList from "./CardsList"

interface BuildingCardProps {
    setImovelEscolhido: (imovel: Predio | null) => void
    predio: Predio
}

// Card do carrossel da página inicial: mesmo visual da lista, com largura fixa e "snap" na rolagem
function BuildingCard({ setImovelEscolhido, predio }: BuildingCardProps) {
    return (
        <div className="w-[78vw] max-w-80 sm:w-80 shrink-0 snap-start py-2">
            <CardsList predio={predio} setImovelEscolhido={setImovelEscolhido} />
        </div>
    )
}

export default BuildingCard
