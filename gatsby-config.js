module.exports = {
  siteMetadata: {
    title: `Hortus Deliciarum`,
    description: `Butikowa kwiaciarnia w Warszawie - miejsce tworzone rodzinną pasją umiłowania piękna`,
    siteUrl: `https://hortusdeliciarum.pl`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-smoothscroll", {
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
          family: 'Cormorant Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700',
        },
        {
          family: 'Montserrat'
        }
      ]
    }
  }, {
    resolve: `gatsby-plugin-scroll-indicator`,
    options: {
      // Configure color of the scroll indicator
      color: "#DFDCD9",
      // Height of the scroll indicator
      height: "5px",
      // Configure paths where the scroll indicator will appear
      paths: ["/"],
      // Configure the z-index of the indicator element
      zIndex: `9999`,
    },
  },
  {
    resolve: `gatsby-plugin-fixhash`,
    options: {
      offsetY: 0, // number, optional offset
      scrollToOptions : {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
        behavior: `smooth`
      }
    }
  }]
};