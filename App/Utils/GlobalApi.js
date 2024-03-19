import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/cltcp38n53da907uzoa81uhmd/master"
const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
  `
 const result = await request(MASTER_URL, query);
 return result
}

export default {getSlider}