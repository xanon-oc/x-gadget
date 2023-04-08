import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const { cartArray, products } = useLoaderData();

  console.log(cartArray, products);
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Cart;
