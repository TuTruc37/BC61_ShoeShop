import { useRoutes } from "react-router-dom";
import ShoeShop from "./ShoeShop/ShoeShop";
function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <ShoeShop />,
    },
  ]);
  return route;
}

export default App;
