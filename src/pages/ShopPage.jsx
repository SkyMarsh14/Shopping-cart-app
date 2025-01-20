import styled from "styled-components";
import useProductData from "../util/useProductData";
import Card from "../components/itemCard";

const allProductUrl = `https://fakestoreapi.com/products`;

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
  background-color: #eaeded;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 300px;
  gap: 1em;
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
