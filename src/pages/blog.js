import React from "react"
import MainLayout from "../layouts/MainLayout"
import { faBlog } from "@fortawesome/free-solid-svg-icons"
import {SEO} from '../components/SEO'

// WEBIU Components
import {Header, MediumFeed} from '../../Webiu'

const BlogPage = () => {
  return (
    <MainLayout>
      <SEO title="Leopards Labs Blog Page" />
      <Header 
        mainText="Blog"
        icon={faBlog}
        small
      />
      <br />
      <MediumFeed 
        mediumUrl={"https://medium.com/feed/leopards-lab"}
      />
    </MainLayout>
  )
}

export default BlogPage