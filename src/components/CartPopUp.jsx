import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
const Container = styled.div`
  position: fixed;
  right: 1em;
  bottom: 1em;
  z-index: 1;
`;
const inAnimation = keyframes`
    0%{
        opacity:30%;
        transform:translateY(-50%);
        
    }
    50%{
        opacity:0.6;
    }
    100%{
        opacity:1;
        transform:translateY(0%);
    }
`;
const outAnimation = keyframes`
    0%{
        opacity:1;
        transform:translateY(0%);
    }
    100%{
        opacity:0;
        transform:translateY(-50%);
    }
`;
const Modal = styled.div`
  width: 100%;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 0 8px gray;
  background-color: white;
  animation: ${(props) => (props.$fadeout ? outAnimation : inAnimation)} 0.3s 1
    forwards;
`;

const Span = styled.span`
  text-overflow: ellipsis;
  max-width: 10ch;
`;
const CartPopup = ({ itemName, visible, setVisible }) => {
  const capName = capitalize(itemName);
  const [showModal, setShowModal] = useState(true);
  const [fadeout, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowModal(false);
        setVisible(false);
      }, 300);
    }, 1800);
    return () => clearTimeout(timer);
  }, [setVisible]);
  return (
    <Container>
      {showModal && (
        <Modal $fadeout={fadeout}>
          <Span>{capName}</Span> has been added to the cart!
        </Modal>
      )}
    </Container>
  );
};

const capitalize = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetter + remainingLetters;
};

export default CartPopup;
