import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const StyledH1 = styled.h1`
  font-size: 3em;
`;
const HomepageLink = styled(Link)`
  font-size: 2em;
`;
const ErrorPage = () => {
  return (
    <StyledDiv>
      <StyledH1>Oh no, this route doesn't exist!</StyledH1>
      <HomepageLink to="/">
        You can go back to home page by clicking here, though!
      </HomepageLink>
    </StyledDiv>
  );
};

export default ErrorPage;
