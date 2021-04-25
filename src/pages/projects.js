import * as React from "react";
import Layout from "../components/layout";

const Projects = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`;

  return <Layout location={location}>these are my projects</Layout>;
};

export default Projects;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `;
