import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../util/CartContext";
const StyledBtn = styled.button`
  background-color: rgb(255, 216, 20);
  color: black;
  cursor: pointer;
  border-style: none;
  border-radius: 10px;
  justify-self: center;
  align-self: center;
  padding-right: 2em;
  padding-left: 2em;
  height: 80%;
  &:hover {
    opacity: 0.8;
  }
`;
const AddCartBtn = ({ itemData }) => {
  const [cart, setCart] = useContext(CartContext);
  const handleClick = () => {
    setCart((prev) => {
      console.log(prev);
      if (!prev) {
        return [{ ...itemData, count: 1 }];
      }
      const itemIndex = prev.findIndex((each) => each.id === itemData.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          count: updatedCart[itemIndex].count + 1,
        };
        return updatedCart;
      }
      return [...prev, { ...itemData, count: 1 }];
    });
  };
  return (
    <StyledBtn type="button" onClick={handleClick}>
      Add to Cart
    </StyledBtn>
  );
};

export default AddCartBtn;
