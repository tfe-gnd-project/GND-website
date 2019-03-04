module.exports = {
  siteMetadata: {
    title: `GND`,
      menuLinks: [
        {
           name:'Home',
           link:'/'
        },
        {
          name:'New Here',
          link:'/newhere'
        },
        {
          name:'Event',
          link:'/event'
        },
        {
          name:'Start Serving',
          link:'/startserving'
       },
        {
           name:'Contact',
           link:'/contact'
        },
        {
          name:'Donate',
          link:'/donate'
       },
      ],
    description: `GND website.`,
    author: `misun-janice`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'gnd-website'
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gnd-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
