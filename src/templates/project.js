import React from 'react';
import MainLayout from '../layouts/MainLayout';

// WEBIU Components
import {
  SEO, 
  ProjectDetail,
} from '../../Webiu'

export default function ProjectTemplate({data}) {
  const { frontmatter: project } = data.markdownRemark;

  return (
    <MainLayout>
      <SEO title={`Score Labs ${project.title} Project`} />
      <ProjectDetail 
        project={project}
      />
    </MainLayout>
  )
}

export const postQuery = graphql`
  query ProjectPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug} }) {
      html
      frontmatter {
        slug
        title
        description
        image
        screenshots
        links {
          name
          url
        }
      }
    }
  }
`