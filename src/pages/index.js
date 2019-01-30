import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Welcome from '../components/home/welcome'

export default () => (
  <>
    <Helmet
      title="Nayed Saïd Ali | Home"
      meta={[
        {name: 'author', content: 'Nayed Saïd Ali'},
        {name: 'description', content: "Nayed Saïd Ali's personal website"},
        {
          property: 'og:description',
          content: "Nayed Saïd Ali's personal website"
        },
        {property: 'og:url', content: 'https://nayed.io'},
        {property: 'og:title', content: 'Nayed Saïd Ali | Home'},
        {property: 'og:type', content: 'website'}
      ]}
    />
    <Layout>
      <Welcome />
    </Layout>
  </>
)
