import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";

const Projects = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location}>
      <Project height={500}>
        <div>asspiss</div>
      </Project>
    </Layout>
  );
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
