import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./MovieDetails/Cast/Cast";
import Reviews from "./MovieDetails/Reviews/Reviews";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
