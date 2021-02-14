import React from "react"
import MainLayout from "../layouts/MainLayout"
import {useTeamData} from '../queries/team'
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import {SEO} from '../components/SEO'

// WEBIU Components
import {
  Header, 
  Team,
} from '../../Webiu'

const TeamPage = () => {
  const team = useTeamData()

  return (
    <MainLayout>
      <SEO title="Leopards Labs Team Page" />
      <Header 
        mainText={team.title}
        icon={faUsers}
        small
      />
      <Team 
        contributors={team.contributors}
      />
      <br /><br />
    </MainLayout>
  )
}

export default TeamPage