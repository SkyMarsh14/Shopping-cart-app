import CartContext from "../util/CartContext";
import styled from "styled-components";
import { useContext, useState } from "react";
import TotalPrice from "../components/TotalPrice";

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
  background-color: #eaeded;
`;
const GridWrapper = styled.div`
  display: grid;
  background-color: white;
  padding: 1em;
  width: min(1200px, 80%);
  margin: auto;
  > div:not(:last-child) {
    border-bottom: solid black 1px;
  }
`;
const ItemCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr;
  gap: 2em;
  margin-top: 2em;
  padding: 1.5em;
  align-items: center;
`;
const H1 = styled.h1`
  border-bottom: solid black 1px;
`;
const DetailsDiv = styled.div`
  :first-child {
    font-size: 1.2em;
    font-weight: 900;
    margin-bottom: 0.5em;
  }
`;
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <Container>
      <GridWrapper>
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
        {cart && <TotalPrice></TotalPrice>}
      </GridWrapper>
    </Container>
  );
};
export default Cart;
