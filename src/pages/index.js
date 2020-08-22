import React from "react"
import {useHomePageData} from "../queries/home"
import MainLayout from "../layouts/MainLayout"

// WEBIU Components
import {
  SEO,
  Header, 
  DescriptionContainer, 
  MediumFeed, 
  ProjectsList, 
  PublicationsList, 
  Contact, 
} from '../../Webiu'


const HomePage = () => {
  const frontmatter = useHomePageData()
  const headerSection = frontmatter.headerSecton
  const aboutSection = frontmatter.aboutSection
  const projectsSection = frontmatter.projectsSection
  const publicationsSection = frontmatter.publicationsSection
  const contactSection = frontmatter.contactSection

  return (
    <MainLayout>
      <SEO title="Score Labs Home Page" />
      <Header 
        mainText={headerSection.mainText}
        subText={headerSection.subText}
        buttonText={headerSection.buttonText}
        buttonLink={headerSection.buttonLink}
        image={headerSection.image}
      />
      <DescriptionContainer
        title={aboutSection.title}
        mainText={aboutSection.mainText}
        sideComponent={(
          <MediumFeed 
            title="Recent Articles"
            mediumUrl={aboutSection.mediumUrl}
            small={true}
            limit={3}
          />
        )}
      />
      <ProjectsList 
        title={projectsSection.title}
        items={projectsSection.projects}
        limit={6}
      />
      <PublicationsList 
        title={publicationsSection.title}
        items={publicationsSection.publications}
        limit={4}
      />
      <Contact 
        contactMessage={contactSection.contactMessage}
        subscribeMessage={contactSection.subscribeMessage}
      />
    </MainLayout>
  )
}

export default HomePage
