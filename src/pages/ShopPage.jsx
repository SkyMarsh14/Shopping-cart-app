import styled from "styled-components";
import useProductData from "../util/useProductData";
import Card from "../components/itemCard";

const allProductUrl = `https://fakestoreapi.com/products`;

const Container = styled.div`
  background-color: #eaeded;
  padding: 0 2em 2em 2em;
  position: relative;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 300px;
  gap: 1em;
`;
const StyledH1 = styled.h1`
  padding: 0.5em;
  padding-top: 2.5em;
`;
const ShopPage = () => {
  const { data, error, loading } = useProductData(allProductUrl);
  return (
    <Container>
      <StyledH1>Shopping Page</StyledH1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ItemContainer>
          {data && data.map((each) => <Card key={each.id} data={each} />)}
        </ItemContainer>
      )}
    </Container>
  );
};

export default ShopPage;
