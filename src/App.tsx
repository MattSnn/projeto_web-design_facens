import InitialPage from "./pages/InitialPage"
import AptoPage from "./pages/AptoPage"
import ImovelPage from "./pages/ImovelPage"
import NavBar from "./components/layout/NavBar"
import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import prediosLista, { type Predio } from "./data/prediosLista"
import CalculatorPage from "./pages/CalculatorPage"
import { buildUrl, getParam, PAGE_TITLES, readRoute } from "./utils/navigation"
import type { Navigate, PageId, Route } from "./utils/navigation"

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
    { id: "fotos", label: "Fotos" },
    { id: "sobre", label: "Sobre" },
    { id: "calculadora", label: "Calculadora" },
    { id: "localizacao", label: "Localização" },
    { id: "planta", label: "Planta" },
  ],
  CalculatorPage: [
    { id: "fotos", label: "Fotos" },
  ],
}

function App() {
  const [route, setRoute] = useState<Route>(readRoute)
  const activePage = route.page

  // botão voltar/avançar do navegador
  useEffect(() => {
    function onPopState() {
      const next = readRoute()
      setRoute((prev) => (prev.page === next.page && prev.search === next.search ? prev : next))
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  // ao trocar de página: volta pro topo (ou vai até a seção do #hash)
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const target = hash ? document.getElementById(hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: "instant" })
  }, [route.page, route.search])

  const navigate: Navigate = (page, params, hash) => {
    const url = buildUrl(page, params, hash)
    if (url !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.pushState(null, "", url)
    }
    setRoute(readRoute())
  }

  const imovelEscolhido: Predio | null =
    activePage === "imovelPage"
      ? prediosLista.find((predio) => String(predio.id) === getParam(route.search, "id")) ?? null
      : null

  useEffect(() => {
    document.title = imovelEscolhido ? `${imovelEscolhido.name} | ImobiFaces` : PAGE_TITLES[activePage]
  }, [activePage, imovelEscolhido])

  function navigateToImovelPage(imovel: Predio | null) {
    if (imovel !== null) {
      navigate("imovelPage", { id: imovel.id })
    }
  }

  const PAGES: Record<PageId, ReactElement> = {
    initialPage: <InitialPage setImovelEscolhido={navigateToImovelPage} />,
    todosOsApartamentos: <AptoPage setImovelEscolhido={navigateToImovelPage}/>,
    imovelPage: <ImovelPage predio={imovelEscolhido} />,
    calculatorPage: <CalculatorPage />
  }

  return (
    <div>
      <NavBar
        LinkIDs={navBarLinks[activePage] ?? navBarLinks["initialPage"]}
        setActivePage={(page) => navigate(page)}
      />
      <div className="pt-20">
        {PAGES[activePage] ?? PAGES["initialPage"]}
      </div>
    </div>
  )
}

export default App
