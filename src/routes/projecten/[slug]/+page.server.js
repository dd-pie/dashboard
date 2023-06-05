import { client } from '$lib/utils/client'
import { HYGRAPH_ENDPOINT } from '$env/static/private'

export const load = async ({params: {slug}}) => {

	const query = `
    query Project {
      project(where: {slug: "${slug}"}){
        id
        title
        briefing {
          html
        }
        projectStatus
        productOwners {
          firstName
          prefix
          surname
        }
        accountManagers {
          firstName
          prefix
          surname
        }
        organizations {
          name
        }
        programmes {
          name
          course {
            abbreviation
          }
        }
        visual {
          url(transformation: { document: { output: { format: png } } })
          thumbnail: url(
            transformation: {
              image: { resize: { width: 100, fit: clip } }
              document: { output: { format: png } }
            }
          )
        }
      }
    }`

    const data = await client({ query: query, variables:{slug: slug}, fetch: fetch, endpoint: HYGRAPH_ENDPOINT });
    
    return {
        ...data
    }
}

