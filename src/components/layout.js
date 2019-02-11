import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="site-content">{children}</div>
          <Footer className="footer" />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
