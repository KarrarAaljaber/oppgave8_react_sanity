import { NavLink } from "react-router-dom";

const Actor = ({fullname, picture, slug}) =>{

    return(
        <div >
            <h3> {fullname}</h3>
            <img src={picture} />
        </div>
    )
}

export default Actor;