import { client } from '$lib/utils/client'

export const load = async () => {
	const query = `
  query {
    projects (last:8){
      id
      slug
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

    const data = await client({ query: query, fetch: fetch, endpoint: endpoint });
    
    return {
        ...data
    }
}

