import CartContext from "../util/CartContext";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
  background-color: #eaeded;
`;
const ItemCard = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 3fr 0.5fr;
  gap: 2em;
  margin-top: 2em;
  padding: 1.5em;
`;
const H1 = styled.h1`
  border-bottom: solid 1px black;
`;
const DetailsDiv = styled.div``;
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <Container>
      <H1>Shopping Cart</H1>
      {cart ? (
        cart.map((item) => {
          return (
            <ItemCard key={crypto.randomUUID()}>
              <img src={item.image}></img>
              <DetailsDiv>
                <div>{item.title}</div>
                <div>{item.description}</div>
              </DetailsDiv>
              <div>${item.price * item.count}</div>
            </ItemCard>
          );
        })
      ) : (
        <div>No item in the cart</div>
      )}
    </Container>
  );
};
export default Cart;
