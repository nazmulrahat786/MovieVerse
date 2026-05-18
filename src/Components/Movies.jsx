import { use } from "react";
import MovieCard from "./MovieCard";


const Movies = ({ movies }) => {
    const moviesData = use(movies);
    console.log(moviesData);



 
    return (
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 p-5 bg-mist-950">
            {
                moviesData.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
            
        </div>
    );
};

export default Movies;