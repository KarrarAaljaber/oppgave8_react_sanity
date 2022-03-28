import Actor from "../components/Actor";
import { getActor } from "../utils/services/actors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorWithMovies } from "../utils/services/movies";


const ActorPage = () =>{

    const[actor, setActor] = useState([])
    const[movies,setMovies] = useState([])
    const { slug } = useParams()
    const value = slug.replace(':', '')



    useEffect(async() =>{
   
         console.log(value)
        // const actors = await getActors()
            const act = await getActor(value)
            console.log(act[0].fullname)
            const moviz = await getActorWithMovies(act[0].fullname);

            setActor(act)
            setMovies(moviz[0].starsin)
            
    }, [])


      
    const mapMovies = movies?.map((m) => (<li key={m?.title}> {m?.title} </li>))

    return(
        <div className="actorsPage">
            <Actor fullname={actor[0]?.fullname} picture={actor[0]?.picture}  />

            <h3> This actor stars in these movies {mapMovies}   </h3>
                
        </div>
    )
}

export default ActorPage;