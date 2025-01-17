import { useState } from "react";
import GlobalStyle from "../styles/globalStyles.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartContext from "../util/CartContext.js";

const App = () => {
  const [cart, setCart] = useState(null);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </CartContext.Provider>
  );
};

export default App;
