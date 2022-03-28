import client from "../client";


const eventFields = `
    title,
    'actor': actor->fullname,
    picture,

`

export const getActorWithMovies = async (fullname) =>{
  const data = await client.fetch(
    ` *[_type=="actor" && fullname == $fullname]{
        fullname,
        picture,
        "starsin": *[_type=='movie' && references(^._id)]{ title }
      } `, { fullname}
  )
  return data
}

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${eventFields}}`);
  return data;
};