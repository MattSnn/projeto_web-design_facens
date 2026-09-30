import Footer from "../components/layout/Footer"
import CardsCarousel from "../components/sections/CardsCarousel"
import Hero from "../components/sections/Hero"
import Contact from "../components/sections/Contact"
import DataInfo from "../components/sections/DataInfo"

function InitialPage() {

  return (
    <div>
      <Hero />
      <CardsCarousel />
      <DataInfo />
      <Contact />
      <Footer />
    </div>
  )
}

export default InitialPage