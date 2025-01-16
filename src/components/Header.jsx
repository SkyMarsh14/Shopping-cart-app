import styled from "styled-components";
import { ShoppingCart } from "lucide-react";

const StyledHeader = styled.header`
  display: flex;
  color: #bf4f74;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 2em;
  border-bottom: 1px solid black;
  font-size: 1.5em;
  position: fixed;
  top: 0;
  width: 100%;
`;
const Li = styled.li`
  list-style: none;
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
          <Li>Shop</Li>
          <Li>
            <ShoppingCart />
          </Li>
        </Ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
