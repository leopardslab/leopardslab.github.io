import React from "react"
import MainLayout from "../layouts/MainLayout"
import { usePageNotFoundData } from "../queries/404"
import {SEO} from '../components/SEO'

// WEBIU Components
import {PageNotFound} from '../../Webiu'

const NotFoundPage = () => {
  const frontmatter = usePageNotFoundData()
  
  return (
    <MainLayout>
      <SEO title="404: Not found" />
      <PageNotFound 
        image={frontmatter.image}
        mainText={frontmatter.mainText}
        subText={frontmatter.subText}
      />
    </MainLayout>
  )
}

export default NotFoundPage
