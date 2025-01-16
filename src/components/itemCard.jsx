import { Star } from "lucide-react";
import styled from "styled-components";
const Container = styled.div``;
const StyledImg = styled.img``;
const RatingDiv = styled.div`
  display: flex;
`;

const Card = ({ data }) => {
  return (
    <Container>
      <StyledImg src={data.image} />
      <div>${data.price}</div>
      <RatingDiv>
        <Star />
        <div>
          {data.rating.rate} ({data.rating.count})
        </div>
      </RatingDiv>
    </Container>
  );
};

export default Card;
