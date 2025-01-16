import styled from "styled-components";
import { ShoppingCart } from "lucide-react";
import StyledLink from "./StyledLink";

const StyledHeader = styled.header`
  display: flex;
  color: #bf4f74;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 2em;
  border-bottom: 1px solid #e5e7eb;
  position: fixed;
  top: 0;
  width: 100%;
`;
const TabButton = styled.button`
  padding: 0.1em 1em;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="home">Shopping Cart</div>
      <nav>
        <Ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="shop">Shop</StyledLink>
          <ShoppingCart />
        </Ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
