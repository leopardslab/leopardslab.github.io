import React from "react"
import MainLayout from "../layouts/MainLayout"
import {useTeamData} from '../queries/team'
import { faUsers } from "@fortawesome/free-solid-svg-icons"

// WEBIU Components
import {
  SEO,
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
        researchers={team.researchers}
        alumni={team.alumni}
      />
      <br /><br />
    </MainLayout>
  )
}

export default TeamPage