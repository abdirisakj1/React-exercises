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
      <ProductItem id={1} name="watch" price={13} />
      <ProductItem id={2} name="mobile" price={175} />
      <ProductItem id={2} name="mouse" price={2.33} />
      <CartSummary />
    </ProductContext.Provider>
  );
}

export default App;