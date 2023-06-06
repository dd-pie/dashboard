import { client } from '$lib/utils/client'
import { HYGRAPH_ENDPOINT } from '$env/static/private'

export const load = async () => {
	const query = `
    query {
      organizations (first:100, where: {lead: true}){
        name
        slug
        companyType
      }
    }`

    const data = await client({ query: query, fetch: fetch, endpoint: HYGRAPH_ENDPOINT });
    
    return { ...data }
}

