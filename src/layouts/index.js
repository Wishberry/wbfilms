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
      title="Wishberry Films, India’s first crowd-financing studio for new age cinema"
      meta={[
        { name: 'description', content: 'We finance, produce, market and distribute ”smart budget” films' },
        { name: 'keywords', content: 'wishberry, film, invest, crowd, finance, wishberry film finance, wishberry series A, reliance invests in wishberry, wishberry films, wishberry film' },
        { property: 'og:image', content: 'We finance, produce, market and distribute ”smart budget” films' },
      ]}
    />
    {/* <Header /> */}
    <div>
      {children()}
    </div>
    <Footer />
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
