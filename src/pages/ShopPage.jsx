import styled from "styled-components";
import useProductData from "../util/useProductData";
import Card from "./../components/itemCard";

const allProductUrl = `https://fakestoreapi.com/products`;

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
`;
const ItemContainer = styled.div`
  display: grid;
`;
const ShopPage = () => {
  const { data, error, loading } = useProductData(allProductUrl);
  return (
    <Container>
      <h1>You are now in Shop page</h1>
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
