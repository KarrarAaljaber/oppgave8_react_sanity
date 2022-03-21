
const Movie = ({title, actor}) =>{

    return(
        <div className="movie">
            <h1> Movie title -  {title}</h1>
            <p> Actors in this movie - {actor}</p>
        </div>
    )
}

export default Movie;