import React from "react"
import MainLayout from "../layouts/MainLayout"
import { faBlog } from "@fortawesome/free-solid-svg-icons"

// WEBIU Components
import {SEO, Header, MediumFeed} from '../../Webiu'

const BlogPage = () => {
  return (
    <MainLayout>
      <SEO title="Score Labs Blog Page" />
      <Header 
        mainText="Blog"
        backgroundColor={'#edffe2'}
        icon={faBlog}
        small
      />
      <br />
      <MediumFeed 
        mediumUrl={"https://medium.com/feed/scorelab"}
      />
    </MainLayout>
  )
}

export default BlogPage