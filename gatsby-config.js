module.exports = {
  siteMetadata: {
    title: 'Personal website',
    author: 'Nayed Saïd Ali',
    description: "Nayed Saïd Ali's personal website",
    siteUrl: 'https://nayed.io'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-54444877-3'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cabin Sketch', 'Neucha', 'Roboto']
        }
      }
    }
  ]
}
