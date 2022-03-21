

const actor = {
    title: 'actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'fullname',
            name: 'fullname',
            type: 'string',
            description: 'Dette er full-name',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'Dette er den unike url-en',
            options: {
              source: 'fullname',
              maxLength: 200,
            }
        },
        {
            title: 'picture',
            name: 'picture',
            type: 'string',
            description: 'pic url',
        }

    ]
  }
  
  export default actor