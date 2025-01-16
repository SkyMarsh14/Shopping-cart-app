import GlobalStyle from "../styles/globalStyles.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
