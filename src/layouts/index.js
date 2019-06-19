import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../globalStyles'
import './index.css'
import favicon from '../assets/favicon.ico'
import twitter from '../assets/twitter.png'

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Human readable names for the Web 3.0 powered by Waves Blockchain.',
        },
        {
          name: 'keywords',
          content: 'WNS, Waves, Waves Name Service, Names, Zero Cool Team',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: 'Waves Name Service',
        },
        {
          property: 'og:image',
          content: `https://wns.domains${twitter}`,
        },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
      ]}
    />
    {children()}
  </Fragment>
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
