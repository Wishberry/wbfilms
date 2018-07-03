import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import './slick/slick.css'
import './slick/slick-theme.css'
import './bootstrap_white.css'
import './common.css'
import './pages.css'
import './film.css'
import './components.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Wishberry Films"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div>
      {children()}
    </div>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
