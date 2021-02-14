import { useStaticQuery, graphql } from "gatsby"

export const useGsocData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query GsocData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "gsoc"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                mainImage
                description
                links {
                  name
                  url 
                }
                
                guidelinesHeading
                guidelinesDescription
                guidelines

                projectListHeading
                projectListButtonText
                projectListUrl

                ideaListHeading
                ideaListDescription
                ideaList {
                  title
                  description
                  expectedresults
                  githuburl
                  requiredknowledge
                  possiblementors
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.length > 0 ? allMarkdownRemark.edges[0].node.frontmatter : null
}