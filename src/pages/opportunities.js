import React from "react"
import MainLayout from "../layouts/MainLayout"
import { Row, Container, Col } from "react-bootstrap"
import {useOpportunitiesData} from '../queries/opportunities'
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons"

// WEBIU Components
import {
  SEO,
  Header, 
  DescriptionContainer,
  JobOpenings
} from '../../Webiu'

const OpportunitiesPage = () => {
  const opportunities = useOpportunitiesData()

  return (
    <MainLayout>
      <SEO title="Leopards LabsOpportunities Page" />
      <Header 
        mainText={opportunities.title}
        icon={faPeopleArrows}
        small
      />
      <Container>
        <Row>
          <Col lg={7}>
            <DescriptionContainer
              title={opportunities.section1.heading}
              mainText={opportunities.section1.description}
            />
          </Col>
          <Col lg={5}>
            <img src={opportunities.section1.image} style={{width: '95%', paddingTop: 40 }}/>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <Row>
          <Col lg={6}>
            <DescriptionContainer
            title={opportunities.section2.left.heading}
            subTitle={opportunities.section2.left.subHeading}
              mainText={opportunities.section2.left.description}
            />
          </Col>
          <Col lg={6}>
            <DescriptionContainer
              title={opportunities.section2.right.heading}
              subTitle={opportunities.section2.right.subHeading}
              mainText={opportunities.section2.right.description}
            />
          </Col>
        </Row>
        <br /><hr /><br />
        <Row>
          <Col>
            <JobOpenings
              title={opportunities.section3.heading}
              openings={opportunities.section3.openings}
            />
          </Col>
        </Row>
      </Container>
      <br /><br />
    </MainLayout>
  )
}

export default OpportunitiesPage