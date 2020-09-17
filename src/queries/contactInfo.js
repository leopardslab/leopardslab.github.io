import { useStaticQuery, graphql } from "gatsby"

export const useContactInfoData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query ContactInfoData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "contactInfo"}}}) {
          edges {
            node {
              id
              frontmatter {
                socialLinks {
                  facebook
                  gitter
                  twitter
                  github
                  linkedin
                  medium
                }
                mailingListHeading
                mailingListFeedUrl

                gitterRoomsListHeading
                gitterOrganizationName
                gitterToken
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.length > 0 ? allMarkdownRemark.edges[0].node.frontmatter : null
}