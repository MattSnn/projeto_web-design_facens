import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
// import BuildingCard from "./components/BuildingCard"
// import predio1 from "./assets/predio-1.jpg"

function App() {

  // const predios = [
  //   {
  //     name: "Boa Vista Towers",
  //     img: predio1,
  //     info: "2 ou 3 dorms",
  //     area: "43 a 614 m²",
  //     location: "Alto da Boa Vista",
  //   },
  //   {
  //     name: "Edifício Central",
  //     img: "/images/edificio-central.jpg",
  //     info: "2 ou 3 dorms",
  //     area: "60 a 420 m²",
  //     location: "São Paulo",
  //   },
  // ]

  return (
    <div>
      <NavBar />
      {/* {predios.map((predio) => (
        <BuildingCard
          key={predio.name}
          name={predio.name}
          img={predio.img}
          info={predio.info}
          area={predio.area}
          location={predio.location}
        />
      ))} */}

      <Footer />
    </div>
  )
}

export default App
