import CartContext from "../util/CartContext";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
`;
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cart ? (
        cart.map((item) => {
          <div key={crypto.randomUUID()}>
            <img src={item.image} alt="" />
            <div>{item.title}</div>
          </div>;
        })
      ) : (
        <div>No item in the cart</div>
      )}
    </Container>
  );
};
export default Cart;
