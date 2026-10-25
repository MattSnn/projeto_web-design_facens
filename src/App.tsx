import InitialPage from "./pages/InitialPage"
import AptoPage from "./pages/AptoPage"
import ImovelPage from "./pages/ImovelPage"
import NavBar from "./components/layout/NavBar"
import type { NavLink } from "./components/layout/NavBar"
import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import prediosLista, { type Predio } from "./data/prediosLista"
import CalculatorPage from "./pages/CalculatorPage"
import { buildUrl, getParam, PAGE_TITLES, readRoute } from "./utils/navigation"
import type { Navigate, PageId, Route } from "./utils/navigation"

const navBarLinks: Record<PageId, NavLink[]> = {
  initialPage: [
    { id: "inicio", label: "Início" },
    { id: "oportunidades", label: "Destaques" },
    { id: "sobre-nos", label: "Sobre nós" },
    { id: "contato", label: "Contato" },
  ],
  todosOsApartamentos: [
    { id: "todos", label: "Todos", page: "todosOsApartamentos" },
    { id: "comprar", label: "Comprar", page: "todosOsApartamentos", params: { tipo: "venda" } },
    { id: "alugar", label: "Alugar", page: "todosOsApartamentos", params: { tipo: "aluguel" } },
    { id: "contato", label: "Contato" },
  ],
  imovelPage: [
    { id: "fotos", label: "Fotos" },
    { id: "sobre", label: "Sobre" },
    { id: "localizacao", label: "Localização" },
    { id: "planta", label: "Planta" },
    { id: "contato", label: "Contato" },
  ],
  calculatorPage: [
    { id: "simuladores", label: "Simuladores" },
    { id: "comparativo", label: "Comparativo" },
    { id: "dicas", label: "Dicas" },
    { id: "contato", label: "Contato" },
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
    initialPage: <InitialPage setImovelEscolhido={navigateToImovelPage} navigate={navigate} />,
    todosOsApartamentos: <AptoPage key={route.search} setImovelEscolhido={navigateToImovelPage} search={route.search} />,
    imovelPage: <ImovelPage predio={imovelEscolhido} />,
    calculatorPage: <CalculatorPage />
  }

  return (
    <div>
      <NavBar
        activePage={activePage}
        LinkIDs={navBarLinks[activePage] ?? navBarLinks["initialPage"]}
        setActivePage={(page, params) => navigate(page, params)}
      />
      <div className="pt-16 md:pt-20">
        {PAGES[activePage] ?? PAGES["initialPage"]}
      </div>
    </div>
  )
}

export default App
