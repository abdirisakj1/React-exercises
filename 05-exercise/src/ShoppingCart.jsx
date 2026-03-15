import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [quantity] = useState(1);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const increase = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decrease = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (productName.trim() !== "" && price.trim("") !== "") {
      const newProduct = {
        id: Date.now(),
        title: productName,
        price: price,
        quantity: quantity,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setPrice("");
    }
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h3>Add a Product</h3>

      <form onSubmit={handleAddProduct}>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product name"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min={1}
          placeholder="Price"
        />

        <button type="submit">Add to cart</button>
      </form>

      <h3>Products in Cart</h3>

      {products.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> -{product.price}
              <div>
                Quantity:
                <button onClick={() => decrease(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increase(product.id)}>+</button>
              </div>
              <button onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
          ))}
          <h3>Total Price: {totalPrice}</h3>
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
