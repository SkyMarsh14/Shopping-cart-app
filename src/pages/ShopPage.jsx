import styled from "styled-components";
import useProductData from "../util/useProductData";
import Card from "../components/itemCard";
const allProductUrl = `https://fakestoreapi.com/products`;

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #eaeded;
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
const GridContainer = styled.div`
  margin: auto;
  width: min(1200px, 80%);
  padding-bottom: 2em;
`;
const ShopPage = () => {
  const { data, error, loading } = useProductData(allProductUrl);
  return (
    <Container>
      <GridContainer>
        <StyledH1>Shopping Page</StyledH1>
        {loading ? (
          <div>loading...</div>
        ) : (
          <ItemContainer>
            {data && data.map((each) => <Card key={each.id} data={each} />)}
          </ItemContainer>
        )}
      </GridContainer>
    </Container>
  );
};

export default ShopPage;
