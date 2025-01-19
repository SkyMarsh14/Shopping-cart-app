import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../util/CartContext";
import { Trash2 } from "lucide-react";
const StyledButton = styled.button``;
const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  gap: 1em;
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
          <Trash2 onClick={() => handleClick(-1)}></Trash2>
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
