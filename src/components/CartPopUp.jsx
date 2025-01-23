import styled from "styled-components";
import CartContext from "../util/CartContext";
import { useContext } from "react";

const Container = styled.div`
  width: 15ch;
`;

const CartPopup = () => {
  const [cart] = useContext(CartContext);
  return <Container></Container>;
};
