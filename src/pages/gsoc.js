import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { navigate } from "gatsby"
import { faSun } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../layouts/MainLayout"
import { useGsocData } from '../queries/gsoc'
import { useContactInfoData } from "../queries/contactInfo";
import {SEO} from '../components/SEO'

// WEBIU Components
import {
  Header, 
  DescriptionContainer, 
  LinksList, 
  MailingListFeed, 
  GuideLines, 
  ButtonWithHeading, 
  GitterRoomsList,
  GsocIdeaList
} from '../../Webiu'

const GsocPage = () => {
  const gsoc = useGsocData()
  const contactInfoData = useContactInfoData()
  
  return (
    <MainLayout>
      <SEO title="Leopards LabsGSOC Page" />
      <Header 
        mainText={gsoc.title}
        icon={faSun}
        small
      />
      <DescriptionContainer
        image={gsoc.mainImage}
        mainText={gsoc.description}
      />
      <Container>
        <Row>
          <Col>
            <LinksList 
              links={gsoc.links}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <GsocIdeaList 
        heading={gsoc.ideaListHeading}
        description={gsoc.ideaListDescription}
        listItems={gsoc.ideaList}
      />
      <br />
      <GuideLines 
        heading={gsoc.guidelinesHeading}
        description={gsoc.guidelinesDescription}
        guidelines={gsoc.guidelines}
      />
      <br />
      <MailingListFeed 
        title={contactInfoData.mailingListHeading}
        feedUrl={contactInfoData.mailingListFeedUrl}
      />
      <br />
      <GitterRoomsList 
        title={contactInfoData.gitterRoomsListHeading}
        gitterOrganizationName={contactInfoData.gitterOrganizationName}
        gitterToken={contactInfoData.gitterToken}
      />
      <br />
      <ButtonWithHeading 
        heading={gsoc.projectListHeading}
        buttonText={gsoc.projectListButtonText}
        onClick={() => navigate(gsoc.projectListUrl)}
      />
      <br />
    </MainLayout>
  )
}

export default GsocPage