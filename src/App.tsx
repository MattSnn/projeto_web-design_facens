import InitialPage from "./pages/InitialPage"
import AptoPage from "./pages/AptoPage"
import ImovelPage from "./pages/ImovelPage"
import NavBar from "./components/layout/NavBar"
import { useState } from "react"
import type { ReactElement } from "react"
import type { Predio } from "./data/prediosLista"

const navBarLinks: Record<string, Array<{ id: string, label: string }>> = {
  initialPage: [
    { id: "inicio", label: "Início" },
    { id: "oportunidades", label: "Oportunidades" },
    { id: "contato", label: "contato" },
  ],
  todosOsApartamentos: [
    { id: "alugar", label: "Alugar" },
    { id: "comprar", label: "Comprar" },
    { id: "contato", label: "contato" },
  ],
  imovelPage: [
    { id: "alugar", label: "Alugar" },
    { id: "comprar", label: "Comprar" },
    { id: "contato", label: "contato" },
  ],
}

function App() {
  const [activePage, setActivePage] = useState<string>("initialPage")
  const [imovelEscolhido, setImovelEscolhido] = useState<Predio | null>(null)

  function navigateToImovelPage(imovel: Predio | null) {
    setImovelEscolhido(imovel)
    if (imovel !== null) {
      setActivePage("imovelPage")
    }
  }

  const PAGES: Record<string, ReactElement> = {
    initialPage: <InitialPage setImovelEscolhido={navigateToImovelPage} />,
    todosOsApartamentos: <AptoPage setImovelEscolhido={navigateToImovelPage}/>,
    imovelPage: <ImovelPage predio={imovelEscolhido} />
  }




  return (
    <div>
      <NavBar
        LinkIDs={navBarLinks[activePage] ?? navBarLinks["initialPage"]}
        setActivePage={setActivePage}
      />
      <div className="pt-20">
        {PAGES[activePage] ?? PAGES["initialPage"]}
      </div>
    </div>
  )
}

export default App
