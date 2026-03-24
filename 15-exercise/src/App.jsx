import React, { useState } from "react";
import translateContext from "./TranslateContext";
import TranslateContextComponent from "./TranslateContextComponent";

function App() {
  const [lang, setLang] = useState("en");

  const switchTogle = () => {
  setLang((prev) => (prev === "en" ? "es" : "en") )
  };

  return (
    <translateContext.Provider value={lang}>
      <button onClick={switchTogle}>
        Switch To {lang === "en" ? "Spanish" : "English"}
      </button>
      <TranslateContextComponent />
    </translateContext.Provider>
  );
}

export default App;
