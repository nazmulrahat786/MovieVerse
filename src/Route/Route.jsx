import { createBrowserRouter } from "react-router";
import MainPage from "../Page/MainPage";
import Home from "../Components/Home";
import NotFound from "../Page/NotFound";
import MovieDetails from "../Components/MovieDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
        {
            index: true,
            Component: Home,
            path: ""
        },
        {
          path: "movie/:id",
          loader: ({ params }) => fetch(`/public/movieData.json`)
          ,

        Component: MovieDetails





        }
        
        
        ,
        {
          path: "*",
          Component: NotFound
        }
    ]
  },
]);
export default router;