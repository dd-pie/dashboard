import { client } from '$lib/utils/client'

export const load = async () => {
	const queryPendingProjects = `
  query {
    projects (last:6, where: {projectStatus: pending}){
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

  const queryActiveProjects = `
  query {
    projects (last:6, where: {projectStatus: active}){
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

  // where: {projectStatus: pending}

    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clarwzlzm7q2k01td0dlkb5tx/master'

    const dataPendingProjects = await client({ query: queryPendingProjects, fetch: fetch, endpoint: endpoint });
    const dataActiveProjects = await client({ query: queryActiveProjects, fetch: fetch, endpoint: endpoint });


    
    return {
        pendingProjects: {...dataPendingProjects}, 
        activeProjects: {...dataActiveProjects}
    }
}

