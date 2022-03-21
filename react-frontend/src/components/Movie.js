
const Movie = ({title, actor, picture}) =>{

    return(
        <div className="movie">
             <h3> {title}</h3>
            <img src={picture} />
            <p> Acted in this movie - {actor}</p>
        </div>
    )
}

export default Movie;