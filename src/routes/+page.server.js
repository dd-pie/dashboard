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
      organizations {
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
      organizations {
        name
      }
      courses {
        abbreviation
      }
    }
  }`

  const queryPartners = `query {
    organizations (last:6, where: {lead: false}){
      name
      slug
    }
  }`

  const queryLeads = `query {
    organizations (last:6, where: {lead: true}){
      name
      slug
    }
  }`

  // where: {projectStatus: pending}

    const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clarwzlzm7q2k01td0dlkb5tx/master'

    const dataPendingProjects = await client({ query: queryPendingProjects, fetch: fetch, endpoint: endpoint });
    const dataActiveProjects = await client({ query: queryActiveProjects, fetch: fetch, endpoint: endpoint });
    const dataPartners = await client({ query: queryPartners, fetch: fetch, endpoint: endpoint });
    const dataLeads = await client({ query: queryLeads, fetch: fetch, endpoint: endpoint });


    
    return {
        pendingProjects: {...dataPendingProjects}, 
        activeProjects: {...dataActiveProjects},
        partners: {...dataPartners},
        leads: {...dataLeads}
    }
}

