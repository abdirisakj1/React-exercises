import { useContext } from 'react';
import ProductContext from './ProductContext';

function CartSummary() {
  const { cartItems, removeFromCart } = useContext(ProductContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
                {item.name} - ${item.price}
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartSummary;
