module.exports = {
  siteMetadata: {
    title: 'Personal website',
    author: 'Nayed Saïd Ali',
    description: "Nayed Saïd Ali's personal website",
    siteUrl: 'https://nayed.io'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-54444877-3'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nayed',
        short_name: 'Nayed',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#00CCCC',
        display: 'minimal-ui',
        icon: 'src/images/n.svg'
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
