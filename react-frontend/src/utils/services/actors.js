import client from "../client";


const eventFields = `
  fullname,
  'slug': slug.current,
  picture,
`

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${eventFields}}`);
  return data;
};

export const getActor = async (slug) =>{
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${eventFields}}`,
    { slug }
  )
  return data
}