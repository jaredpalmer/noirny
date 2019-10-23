const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Noir',
  },
  plugins: [
    'gatsby-plugin-ueno',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://noirny.com`,
        noTrailingSlash: true,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'noir',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
};
