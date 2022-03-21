import Movie from "./Movie";
import { useState, useEffect } from "react";
import { getActors } from "../utils/services/actors";
import Actor from "./Actor";
import { NavLink } from "react-router-dom";





const Actors = () =>{

    const[actors, setActors] = useState([])

    useEffect(async() =>{
   
        // const actors = await getActors()
            const actors = await getActors()
            console.log(actors)
            //console.log(actors)
    
            setActors(actors)
            
    }, [])
 


    const mapActors = actors?.map((m) => (
        <div className="actor">
            <Actor slug={m.slug} fullname={m.fullname} picture={m.picture}  key={m.fullname}  />
            <NavLink to={":"+m.slug} >Read more</NavLink>

        </div>
      ));
    return(
        <div >
            <h1>
                All Actors
            </h1>
            <div className="actors">
                
                {mapActors}
            </div>
        </div>
    )
}

export default Actors;