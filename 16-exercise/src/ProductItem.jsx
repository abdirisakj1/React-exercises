import { useContext } from "react";
import ProductContext from "./ProductContext";

function ProductItem({ id, name, price }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div>
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;