import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../util/CartContext";
import { Trash2 } from "lucide-react";
const StyledIcon = styled(Trash2)``;
const StyledButton = styled.button`
  height: 2em;
  width: 2em;
  border: none;
  background-color: #59b4f9;
  color: #ffffffdb;
  &:hover {
    opacity: 0.8;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  justify-self: center;
  background-color: #efeded;
  overflow: hidden;
  border-radius: 10px;
`;
const Counter = ({ index }) => {
  const [cart, setCart] = useContext(CartContext);
  function handleClick(number) {
    setCart((prev) => {
      const updatedCart = [...prev];
      updatedCart[index] = {
        ...updatedCart[index],
        count: updatedCart[index].count + number,
      };
      return updatedCart;
    });
  }
  return (
    <Container>
      {cart[index].count === 1 ? (
        <StyledButton>
          <StyledIcon onClick={() => handleClick(-1)}></StyledIcon>
        </StyledButton>
      ) : (
        <StyledButton onClick={() => handleClick(-1)}>-</StyledButton>
      )}
      <div>{cart[index]?.count}</div>
      <StyledButton onClick={() => handleClick(1)}>+</StyledButton>
    </Container>
  );
};
export default Counter;
