import React from "react"
import PropTypes from "prop-types"
import { useFooterData } from '../../queries/footer'
import { useNavigationBarData } from '../../queries/navigationBar'
import { useContactInfoData } from "../../queries/contactInfo"
import './style.sass'

// WEBIU Components
import {NavBar, Footer} from '../../../Webiu'


const MainLayout = ({ children }) => {
  const footerData = useFooterData()
  const navigationBarData = useNavigationBarData()
  const contactInfoData = useContactInfoData()
    
  return (
      <div className="main-layout-component">
        <NavBar 
          logo={navigationBarData.logo}
          links={navigationBarData.pages}
          logoStyle={{ width: 150 }}
        />
        <div className="content-area">
          {children}
        </div>
        <Footer 
          mainText={footerData.mainText}
          socialLinks={contactInfoData.socialLinks}
        />
      </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
