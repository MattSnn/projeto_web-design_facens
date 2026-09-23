import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import CardsCarousel from "./components/sections/CardsCarousel"
import Hero from "./components/sections/Hero"
import Contact from "./components/sections/Contact"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <CardsCarousel />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
