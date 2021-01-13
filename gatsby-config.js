module.exports = {
  siteMetadata: {
    title: '1UPVC - The extra life for brands and ideas',
    author: '1UPVC LLC',
    description: 'The extra life for brands and ideas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/superpower-logo-x200.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
