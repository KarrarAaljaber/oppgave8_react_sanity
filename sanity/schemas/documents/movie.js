const movie = {
    title: 'movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            type: 'string',
            description: 'Dette er tittelen',
        }
        ,
        {
            title: 'actor',
            name: 'actor',
            type: 'reference',
            to: [{ type: 'actor' }],

        },
        {
            title: 'picture',
            name: 'picture',
            type: 'string',
            description: 'pic url',
        }

    ]
  }
  
  export default movie