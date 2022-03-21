import client from "../client";


const eventFields = `
    title,
    'actor': actor->fullname,

`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${eventFields}}`);
  return data;
};