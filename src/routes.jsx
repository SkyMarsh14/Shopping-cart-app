import App from "./pages/App";
import ShopPage from "./pages/ShopPage";
import Home from "./pages/Home";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
];

export default routes;
