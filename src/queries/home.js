import { useStaticQuery, graphql } from "gatsby"

export const useHomePageData = () => {
  const {allMarkdownRemark} = useStaticQuery (
    graphql`
      query HomePageData {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "home"}}}) {
          edges {
            node {
              id
              frontmatter {
                headerSecton {
                  mainText
                  subText
                  buttonText
                  buttonLink
                  image
                }
                aboutSection {
                  title
                  mainText
                  mediumUrl
                }
                projectsSection {
                  title
                }
                contactSection {
                  contactMessage
                  subscribeMessage
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