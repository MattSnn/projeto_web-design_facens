import Footer from "../components/layout/Footer"
import CardsCarousel from "../components/sections/CardsCarousel"
import Hero from "../components/sections/Hero"
import Contact from "../components/sections/Contact"
import DataInfo from "../components/sections/DataInfo"
import type { Predio } from "../data/prediosLista"
import type { Navigate } from "../utils/navigation"

interface InitialPageProps {
  setImovelEscolhido: (imovel: Predio | null) => void
  navigate: Navigate
}

function InitialPage({ setImovelEscolhido, navigate }: InitialPageProps) {

  return (
    <div>
      <Hero navigate={navigate} />
      <CardsCarousel setImovelEscolhido={setImovelEscolhido} onVerTodos={() => navigate("todosOsApartamentos")} />
      <DataInfo />
      <Contact />
      <Footer />
    </div>
  )
}

export default InitialPage