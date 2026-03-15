import { useEffect, useState } from "react"

const App = () => {

  const [userName,setUserName] = useState("");
  const [Greating,setGreating] = useState("Hello");

 useEffect(() => {
  document.title = userName === "" ? "welcome" : `${Greating},${userName}`
 }, [userName,Greating])
  return(
    <>
    <h2>Enter your Name</h2>
    <input
    value={userName}
    onChange={(e) => {
      setUserName(e.target.value)
    }}
     type="text" />
    <h2>Choose Greating:</h2>
    <input
    value={Greating}
    onChange={(e) => {
      setGreating(e.target.value)
    }}
     type="text" />
    </>
  )
}

export default App