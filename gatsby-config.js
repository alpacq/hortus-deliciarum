module.exports = {
  siteMetadata: {
    title: `Hortus Deliciarum`,
    siteUrl: `https://hortusdeliciarum.pl`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: 'Cormorant Garamond'
        },
        {
          family: 'Montserrat'
        }
      ]
    }
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },]
};