import { useEffect, useState } from "react";

const App = () => {
  const [trucker, SetTrucker] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    const handleTrcuk = (e) => {
     SetTrucker({
      X : e.clientX,
      Y: e.clientY
     })
    }
    window.addEventListener("mousemove",handleTrcuk);
    return() => {
      window.removeEventListener("mousemove", handleTrcuk)
    }
  },[])
  return (
    <>
      <p>Mouse Trucker X: {trucker.X}</p>
      <p>Mouse Trucker Y: {trucker.Y}</p>
    </>
  );
};

export default App;
