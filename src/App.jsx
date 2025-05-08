import Buttons from "./assets/components/Buttons"
import Cards from "./assets/components/Cards"
import { useState } from "react"

function App() {
  const [activeButton, setActiveButton] = useState(null)

  return (
    <>
      <h1>Learn Web development</h1>
      <div className="container">

        <Buttons activeButton={activeButton} setActiveButton={setActiveButton}></Buttons>

        <Cards activeButton={activeButton}></Cards>
      </div>
    </>
  )
}

export default App
