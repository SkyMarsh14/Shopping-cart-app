import App from "./pages/App";
import ShopPage from "./pages/ShopPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
