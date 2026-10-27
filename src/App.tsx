import InitialPage from "./pages/InitialPage"
import AptoPage from "./pages/AptoPage"
import ImovelPage from "./pages/ImovelPage"
import NavBar from "./components/layout/NavBar"
import type { NavLink } from "./components/layout/NavBar"
import { useCallback, useEffect, useState } from "react"
import type { ReactElement } from "react"
import prediosLista, { type Predio } from "./data/prediosLista"
import CalculatorPage from "./pages/CalculatorPage"
import TrabalheConoscoPage from "./pages/TrabalheConoscoPage"
import { APP_STATE, buildUrl, EVENTO_NAVEGAR, getParam, PAGE_TITLES, readRoute } from "./utils/navigation"
import type { Navigate, NavegarDetail, PageId, Route } from "./utils/navigation"

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
  trabalheConosco: [
    { id: "vagas", label: "Vagas" },
    { id: "candidatura", label: "Candidatura" },
  ],
}

function App() {
  // "visita" muda a cada navegação: é a key das páginas, então clicar de novo em
  // "Todos", "Comprar" etc. sempre recomeça a página do zero (filtros limpos, topo)
  const [route, setRoute] = useState<Route & { visita: number }>(() => ({ ...readRoute(), visita: 0 }))
  const activePage = route.page

  // botão voltar/avançar do navegador
  useEffect(() => {
    function onPopState() {
      const next = readRoute()
      // clique em link de seção (#contato) só muda o hash: não recria a página
      setRoute((prev) => (prev.page === next.page && prev.search === next.search ? prev : { ...next, visita: prev.visita + 1 }))
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
  }, [route.visita])

  const navigate = useCallback<Navigate>((page, params, hash) => {
    const url = buildUrl(page, params, hash)
    if (url !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.pushState(APP_STATE, "", url)
    }
    setRoute((prev) => ({ ...readRoute(), visita: prev.visita + 1 }))
  }, [])

  // componentes sem acesso ao navigate (Footer) usam goTo(), que dispara este evento
  useEffect(() => {
    function onNavegar(e: Event) {
      const { page, params, hash } = (e as CustomEvent<NavegarDetail>).detail
      navigate(page, params, hash)
    }
    window.addEventListener(EVENTO_NAVEGAR, onNavegar)
    return () => window.removeEventListener(EVENTO_NAVEGAR, onNavegar)
  }, [navigate])

  // a lista grava os filtros na URL; aqui só atualizamos a rota, sem recriar a página
  const sincronizarBusca = useCallback((search: string) => {
    setRoute((prev) => (prev.search === search ? prev : { ...prev, search }))
  }, [])

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
    initialPage: <InitialPage key={route.visita} setImovelEscolhido={navigateToImovelPage} navigate={navigate} />,
    todosOsApartamentos: <AptoPage key={route.visita} setImovelEscolhido={navigateToImovelPage} search={route.search} onUrlChange={sincronizarBusca} />,
    imovelPage: <ImovelPage key={route.visita} predio={imovelEscolhido} navigate={navigate} setImovelEscolhido={navigateToImovelPage} />,
    calculatorPage: <CalculatorPage key={route.visita} navigate={navigate} />,
    trabalheConosco: <TrabalheConoscoPage key={route.visita} />,
  }

  return (
    <div>
      <NavBar
        activePage={activePage}
        LinkIDs={activePage === "imovelPage" && !imovelEscolhido ? [] : navBarLinks[activePage] ?? navBarLinks["initialPage"]}
        setActivePage={navigate}
      />
      <div className="pt-16 md:pt-20">
        {PAGES[activePage] ?? PAGES["initialPage"]}
      </div>
    </div>
  )
}

export default App
