import styled from "styled-components";
import { ShoppingCart } from "lucide-react";
import StyledLink from "../components/StyledLink";
import CartContext from "../util/CartContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  display: flex;
  height: 4em;
  color: #bf4f74;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 2em;
  border-bottom: 1px solid #e5e7eb;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffffd3;
  padding-right: 5%;
  padding-left: 5%;
  z-index: 1;
`;
const TabButton = styled.button`
  padding: 0.1em 1em;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
`;
const ShoppingCartSvg = styled(ShoppingCart)``;
const CartIcon = styled.div`
  display: flex;
`;
const Count = styled.div`
  transform: translateY(-40%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2ch;
  height: 2.2ch;
  border-radius: 50%;
  background-color: orange;
  color: white;
`;
const CartLinkDiv = styled(StyledLink)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <StyledHeader>
      <div className="home">Shopping Cart</div>
      <nav>
        <Ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="shop">Shop</StyledLink>
          <CartLinkDiv to="cart">
            <CartIcon>
              <ShoppingCartSvg />
              {cart && <Counter cart={cart} />}
            </CartIcon>
          </CartLinkDiv>
        </Ul>
      </nav>
    </StyledHeader>
  );
};
const Counter = ({ cart }) => {
  const totalCount = cart.reduce((accumulator, item) => {
    return (accumulator += item.count);
  }, 0);
  if (totalCount <= 0) return;
  return <Count>{totalCount}</Count>;
};

export default Header;
