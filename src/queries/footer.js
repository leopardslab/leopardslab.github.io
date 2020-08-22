import { useStaticQuery, graphql } from "gatsby"

export const useFooterData = () => {
  const { allMarkdownRemark } = useStaticQuery (
    graphql`
      query FooterData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "footer"}}}) {
          edges {
            node {
              id
              frontmatter {
                mainText
                socialLinks {
                  facebook
                  gitter
                  twitter
                  github
                  linkedin
                  medium
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