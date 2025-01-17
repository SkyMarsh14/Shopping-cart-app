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
      if (prev === null) {
        return [itemData.id];
      } else {
        return [...prev, itemData.id];
      }
    });
  };
  return (
    <StyledBtn type="button" onClick={handleClick}>
      Add to Cart
    </StyledBtn>
  );
};

export default AddCartBtn;
