import React from "react"
import {useHomePageData} from "../queries/home"
import {useProjectsPageData} from "../queries/projects"
import {useContactInfoData} from "../queries/contactInfo"
import MainLayout from "../layouts/MainLayout"
import {SEO} from '../components/SEO'

// WEBIU Components
import {
  Header, 
  DescriptionContainer, 
  MediumFeed, 
  ProjectsList,
  GitterRoomsList, 
  MailingListFeed 
} from '../../Webiu'

const HomePage = () => {
  const homeData = useHomePageData()
  const projectsData = useProjectsPageData()
  const contactInfoData = useContactInfoData()

  const headerSection = homeData.headerSecton
  const aboutSection = homeData.aboutSection
  const projectsSection = homeData.projectsSection
  const projects = projectsData.map(edge => ({ id: edge.node.id, ...edge.node.frontmatter}))

  return (
    <MainLayout>
      <SEO title="Leopards Labs Home Page" />
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
        items={projects}
        limit={6}
        suffle
      />
      <br />
      <GitterRoomsList 
        title={contactInfoData.gitterRoomsListHeading}
        gitterOrganizationName={contactInfoData.gitterOrganizationName}
        gitterToken={contactInfoData.gitterToken}
      />
      <MailingListFeed 
        title={contactInfoData.mailingListHeading}
        feedUrl={contactInfoData.mailingListFeedUrl}
      />
      <br /><br /><br />
    </MainLayout>
  )
}

export default HomePage
