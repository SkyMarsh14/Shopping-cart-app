import styled from "styled-components";
const Container = styled.div`
  width: 20vw;
  position: fixed;
  right: 0;
  bottom: 0;
`;
const Modal = styled.div`
  width: 100%;
  padding: 1em;
  border-radius: 10px;
`;

const CartPopup = ({ itemName }) => {
  const capName = capitalize(itemName);
  return (
    <Container>
      <Modal>{capName} has been added to the cart!</Modal>
    </Container>
  );
};

const capitalize = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetter + remainingLetters;
};

export default CartPopup;
