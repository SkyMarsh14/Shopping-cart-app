import styled from "styled-components";
import heroImage from "../assets/homepage-hero.jpg";
const Container = styled.div`
  padding: 4em;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #ffffff;
  h1 > span {
    font-weight: 800;
    font-size: 2em;
  }
`;
const WelcomeMessage = styled.div`
  width: min(1200px, 80%);
`;
const Home = () => {
  return (
    <Container>
      <WelcomeMessage>
        <h1>
          Welcome to <br></br>
          <span>The Awesome Shop</span>
        </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam
          reiciendis velit id quisquam incidunt quo. Obcaecati debitis minima
          animi, incidunt, sint recusandae hic aperiam a illo distinctio, sit
          esse?
        </div>
      </WelcomeMessage>
    </Container>
  );
};

export default Home;
