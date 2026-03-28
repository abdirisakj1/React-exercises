import { useState } from "react";
import ProductContext from "./ProductContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      <ProductItem id={1} name="Widget" price={19.99} />
      <ProductItem id={2} name="Gadget" price={29.99} />
      <CartSummary />
    </ProductContext.Provider>
  );
}

export default App;