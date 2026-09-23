import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import CardsCarousel from "./components/sections/CardsCarousel"
import Hero from "./components/sections/Hero"
import Contact from "./components/sections/Contact"
import DataInfo from "./components/sections/DataInfo"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <CardsCarousel />
      <DataInfo />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
