import { Star } from "lucide-react";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  padding: 0.2em 0.5em;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const StyledImg = styled.img`
  object-position: center;
  height: 200px;
  width: 70%;
  padding: 1em 0;
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  justify-content: center;
`;

const Card = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImg src={data.image} />
      </ImageContainer>
      <RatingDiv>
        <div>$ {data.price}</div>
        <Star />
        <div>
          {data.rating.rate} ({data.rating.count})
        </div>
      </RatingDiv>
    </Container>
  );
};

export default Card;
