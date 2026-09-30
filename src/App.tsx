import InitialPage from "./pages/InitialPage"
import NavBar from "./components/layout/NavBar"
import {useState} from "react"
import AptoPage from "./pages/AptoPage"
import type {ReactElement} from "react"

const navBarLinks: Record<string, Array<{id: string, label: string}>> = {
  initialPage: [
    {id: "inicio", label: "Início"},
    {id: "oportunidades", label: "Oportunidades"},
    {id: "contato", label: "contato"},
  ],
  todosOsApartamentos: [
    {id: "alugar", label: "Alugar"},
    {id: "comprar", label: "Comprar"},
    {id: "contato", label: "contato"},
  ],
}


const PAGES: Record<string, ReactElement> = {
  initialPage: <InitialPage />,
  todosOsApartamentos: <AptoPage />
}

function App() {
  const [activePage, setActivePage] = useState<string>("initialPage")

  return(
    <div>
      <NavBar 
        LinkIDs={navBarLinks[activePage] ?? navBarLinks["initialPage"]}
        setActivePage={setActivePage}
      />
      {PAGES[activePage] ?? PAGES["initialPage"]}
    </div>
  )
}

export default App
