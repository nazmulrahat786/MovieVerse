import { createBrowserRouter } from "react-router";
import MainPage from "../Page/MainPage";
import Home from "../Components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
        {
            index: true,
            Component: Home,
            path: ""
        }
    ]
  },
]);
export default router;