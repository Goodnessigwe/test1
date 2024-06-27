//import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Sincwithus from "./Components/Sincwithus/Sincwithus"
import MiddleContainer from "./Components/MiddleContainer/MiddleContainer"
import ReadmoreCont from "./Components/ReadmoreCont/ReadmoreCont"
import AreaofFocus from "./Components/AreaOfFocus/AreaofFocus"
import ConceptInnovation from "./Components/ConceptInnovation/ConceptInnovation"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sincwithus/>
      <MiddleContainer/>
      <ReadmoreCont/>
      <AreaofFocus/>
      <ConceptInnovation/>
      <Footer/>
    </div>
  )
}

export default App