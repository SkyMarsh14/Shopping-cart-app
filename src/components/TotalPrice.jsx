import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../util/CartContext";

const Container = styled.div`
  height: 3em;
  margin-left: auto;
  padding-right: 1em;
  padding-top: 0.5em;
`;
const Span = styled.span`
  font-weight: 800;
  font-size: 1.2em;
  margin-left: 1em;
`;
const TotalPrice = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((accumulator, item) => {
    return (accumulator += item.count * item.price);
  }, 0);
  const totalCount = cart.reduce((accumulator, item) => {
    return (accumulator += item.count);
  }, 0);
  return (
    <Container>
      Subtotal ({totalCount} items){" "}
      <Span>${Math.round(totalPrice * 100) / 100}</Span>
    </Container>
  );
};

export default TotalPrice;
