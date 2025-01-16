import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  padding: 0 1em;
  text-decoration: underline transparent;
  color: rgb(107 114 128);
  transition: text-decoration-color 0.3s, color 0.3s ease-in;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #171717;
    color: #171717;
  }
`;

export default StyledLink;
