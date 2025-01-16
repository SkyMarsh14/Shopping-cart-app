import styled from "styled-components";
import useProductData from "../util/useProductData";

const allProductUrl = `https://fakestoreapi.com/products`;

const Container = styled.div`
  padding: 2em;
  margin-top: 3em;
`;
const ShopPage = () => {
  const { data, error, loading } = useProductData(allProductUrl);
  console.log(data);
  return (
    <Container>
      <h1>You are now in Shop page</h1>
    </Container>
  );
};

export default ShopPage;
