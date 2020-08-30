import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { navigate } from "gatsby"
import { faSun } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../layouts/MainLayout"
import { useGsocData } from '../queries/gsoc'

// WEBIU Components
import {
  SEO,
  Header, 
  DescriptionContainer, 
  LinksList, 
  MailingListFeed, 
  GuideLines, 
  ButtonWithHeading, 
  GitterRoomsList
} from '../../Webiu'

const GsocPage = () => {
  const gsoc = useGsocData()
  
  return (
    <MainLayout>
      <SEO title="Score Labs GSOC Page" />
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
      <GuideLines 
        heading={gsoc.guidelinesHeading}
        description={gsoc.guidelinesDescription}
        guidelines={gsoc.guidelines}
      />
      <br />
      <MailingListFeed 
        title={gsoc.mailingListHeading}
        feedUrl={gsoc.mailingListFeedUrl}
      />
      <br />
      <GitterRoomsList 
        title={gsoc.gitterRoomsListHeading}
        gitterOrganizationName={gsoc.gitterOrganizationName}
        gitterToken={gsoc.gitterToken}
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