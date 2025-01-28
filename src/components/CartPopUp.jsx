import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router";
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
const CheckIcon = styled(Check)`
  color: white;
  border-radius: 50%;
  padding: 4px;
  background-color: #87df87;
  display: inline-block;
  vertical-align: top;
  transform: translateY(10%);
  margin-right: 1ch;
`;
const Span = styled.span`
  width: 20ch;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  text-overflow: ellipsis;
`;
const CartLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8 em;
  color: white;
  background-color: black;
  border-radius: 3px;
  margin-left: 1em;
  padding: 0.2em 0.3em;
`;
const CartPopup = ({ itemName, setVisible }) => {
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
          <CheckIcon />
          <Span>{capName}</Span> has been added to the cart!
          <CartLink to="/cart" viewTransition>
            View Cart
          </CartLink>
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
