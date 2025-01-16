import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  padding: 0 1em;
  text-decoration: none;
  color: rgb(107 114 128);
  &:hover {
    text-decoration: underline;
    color: #171717;
  }
`;

export default StyledLink;
