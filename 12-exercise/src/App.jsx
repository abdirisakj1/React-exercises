import { useState } from "react"

const App = () => {

  const [count,setCount] = useState(0)

  const decrease = () => {
    setCount(count - 1)
  }
  const increase = () => {
    setCount(count + 1)
  }
  return(
    <>
    <h1>Count : {count}</h1>
    <button onClick={decrease} disabled={count <= 0}>Decreament</button>
    <button onClick={increase}>Increament</button>
    </>
  )
}

export default App