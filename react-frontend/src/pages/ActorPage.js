import Actor from "../components/Actor";
import { getActor } from "../utils/services/actors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ActorPage = () =>{

    const[actor, setActor] = useState([])
    const { slug } = useParams()
    const value = slug.replace(':', '')



    useEffect(async() =>{
   
         console.log(value)
        // const actors = await getActors()
            const act = await getActor(value)
            console.log(act)
            //console.log(actors)
    
            setActor(act)
            
    }, [])

    const mapActor = actor?.map((m) => (
        <Actor fullname={m.fullname} picture={m.picture} />
      ));

    return(
        <div className="actorsPage">
            {mapActor}
        </div>
    )
}

export default ActorPage;