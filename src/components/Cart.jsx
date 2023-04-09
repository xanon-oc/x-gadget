import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { deleteShoppingCart, removeFromDb } from "../Utils/fakeDB";
import { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  // remove items from shopping cart

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  // Delete shopping Cart
  const deleteCartHandler = () => {
    deleteShoppingCart();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart Is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              handleRemoveItem={handleRemoveItem}
              product={product}
              key={product.id}
            />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount : <span className="font-semibold"></span>
            {total}$
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button onClick={deleteCartHandler} className="btn-outlined">
              Clear Cart
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
