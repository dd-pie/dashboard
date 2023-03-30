import { client } from '$lib/utils/client'
import { HYGRAPH_ENDPOINT } from '$env/static/private'

export const load = async () => {
	const query = `
    query {
      projects (where: {projectStatus: active}, first:100){
        id
        title
        projectStatus
        productOwners {
          firstName
          prefix
          surname
        }
        organization {
          name
        }
        courses {
          abbreviation
        }
      }
    }`
  
    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clarwzlzm7q2k01td0dlkb5tx/master'

    const data = await client({ query: query, fetch: fetch, endpoint: HYGRAPH_ENDPOINT });
    
    return { ...data }
}

