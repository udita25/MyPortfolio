module.exports = {
    siteMetadata: {
      title: 'My Portfolio',
      description: 'A showcase of my work and skills',
      author: 'Udita Sharma',
    },
    plugins: [
      'gatsby-plugin-postcss',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
    ],
  }