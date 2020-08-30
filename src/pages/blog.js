import React from "react"
import MainLayout from "../layouts/MainLayout"
import { faBlog } from "@fortawesome/free-solid-svg-icons"

// WEBIU Components
import {SEO, Header, MediumFeed} from '../../Webiu'

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