import { Star } from "lucide-react";
import styled from "styled-components";
import AddCartBtn from "./AddToCartBtn";

const Container = styled.div`
  display: grid;
  background-color: white;
  padding: 0.4em 0.7em;
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
const StarIcon = styled(Star)`
  transform: translateX(0.3em);
`;
const Card = ({ data }) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImg src={data.image} alt={data.title} />
      </ImageContainer>
      <RatingDiv>
        <div>$ {data.price}</div>
        <StarIcon />
        <div data-testid="rate-count">
          {data.rating.rate} ({data.rating.count})
        </div>
      </RatingDiv>
      <AddCartBtn itemData={data} />
    </Container>
  );
};

export default Card;
