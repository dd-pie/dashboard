import { client } from '$lib/utils/client'
import { HYGRAPH_ENDPOINT } from '$env/static/private'

export const load = async ({params: {slug}}) => {

	const query = `
    query Organization {
      organization(where: {slug: "${slug}"}){
        slug
      name
      description {
        html
      }
      companyType
      projects {
        title
      }
    }
  }`

    const data = await client({ query: query, variables:{slug: slug}, fetch: fetch, endpoint: HYGRAPH_ENDPOINT });
    
    return {
        ...data
    }
}

