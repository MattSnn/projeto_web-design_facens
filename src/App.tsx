import InitialPage from "./pages/InitialPage"
import NavBar from "./components/layout/NavBar"
import {useState} from "react"
import type {ReactElement} from "react"

const PAGES: Record<string, ReactElement> = {
  initialPage: <InitialPage />,
  // todosOsApartamentos: <TododsOsApartamentosPage />,
}

function App() {
  const [activePage, setActivePage] = useState<string>("initialPage")

  return(
    <div>
      <NavBar 
        LinkIDs={[
          {id: "inicio", label: "Início"},
          {id: "oportunidades", label: "Oportunidades"},
          {id: "contato", label: "Contato"},
        ]}
        setActivePage={setActivePage}
      />
      {PAGES[activePage] ?? PAGES["initialPage"]}
    </div>
  )
}

export default App
