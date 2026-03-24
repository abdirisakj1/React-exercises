import React, { useContext } from "react";
import translateContext from "./TranslateContext";

function TranslateContextComponent() {
  const lang = useContext(translateContext);

  return (
    <div>
      <h2>{lang === "en" ? "Hello!" : "Hola!"}</h2>
    </div>
  );
}

export default TranslateContextComponent;
