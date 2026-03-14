import { useState } from "react"

const App = () => {

  const [isTurn,setIsTurn] = useState(true);
  const toggle = () => {
    setIsTurn(!isTurn)
  }
  return(
    <>
    <p>the button Light is {isTurn? "OFF" : "ONN"}</p>
    <button onClick={toggle}>Turn {isTurn? "ONN" : "OFF"}</button>
    </>
  )
}

export default App