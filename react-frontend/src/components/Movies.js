import Movie from "./Movie";
import { useState, useEffect } from "react";
import { getMovies } from "../utils/services/movies";





const Movies = () =>{

    const[movies, setMovies] = useState([])

    useEffect(async() =>{
   
        // const actors = await getActors()
            const movies = await getMovies()
            console.log(movies)
            //console.log(actors)
    
            setMovies(movies)
            
    }, [])
 


    const mapMovies = movies?.map((m) => (
        <Movie title={m.title} actor={m.actor} picture={m.picture}  key={m.title}  />
      ));
    return(
        <div className="Movies">
            {mapMovies}
        </div>
    )
}

export default Movies;