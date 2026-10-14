import Footer from "../components/layout/Footer"
import CardsCarousel from "../components/sections/CardsCarousel"
import Hero from "../components/sections/Hero"
import Contact from "../components/sections/Contact"
import DataInfo from "../components/sections/DataInfo"
import type { Predio } from "../data/prediosLista"

interface InitialPageProps {
  setImovelEscolhido: (imovel: Predio | null) => void
}

function InitialPage({ setImovelEscolhido }: InitialPageProps) {

  return (
    <div>
      <Hero />
      <CardsCarousel setImovelEscolhido={setImovelEscolhido} />
      <DataInfo />
      <Contact />
      <Footer />
    </div>
  )
}

export default InitialPage