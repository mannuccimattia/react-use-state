import Buttons from "./assets/components/Buttons"
import Cards from "./assets/components/Cards"

function App() {

  return (
    <>
      <h1>Learn Web development</h1>
      <div className="container">
        <div className="btn-wrapper">
          <Buttons></Buttons>
        </div>
        <Cards></Cards>
      </div>
    </>
  )
}

export default App
