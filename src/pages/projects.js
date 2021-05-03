import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";
import SimpleReactLightbox from "simple-react-lightbox";
import RoughImage from "../components/rough-image";
import { StaticImage } from "gatsby-plugin-image";

const Projects = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location}>
      <span style={{ fontSize: 30 }}>
        <a href="https://clueminate.com" target="_blank">
          clueminate.com
        </a>
      </span>

      <div>
        <p>
          Clueminate is a fullstack javascript app using VueJS, Vuex, Express,
          and MongoDB. This is a personal project I made after wanting to be a
          crossword puzzle one year for Halloween.
        </p>
        <ImageWrap>
          <StaticImage src="../images/clueminate3.PNG" alt="" />
        </ImageWrap>

        <p>
          The app includes a solve screen, a front page where users can publish
          their puzzles, and an editor that allows the user to create crosswords
          of multiple sizes and grid symmetries. In the editor, clicking on a
          cell will open a word suggestion bank powered by the datamuse.com api.
        </p>
        <p>
          This app uses Google OAuth to handle logins and allow users to save
          and access their crosswords. Puzzles are also socketed so you can see
          who is solving alongside you.
        </p>
      </div>

      <span style={{ fontSize: 30 }}>Thunder EHR</span>

      <div>
        <p>
          Thunder is a fullstack javascript app using VueJS, NuxtJS, Express,
          MongoDB, and FeathersJS. Thunder is an Electronic Health Record that
          serves patients in corrections in the New England area.
        </p>
        <ImageWrap>
          <StaticImage src="../images/thunder1.PNG" alt="" />
        </ImageWrap>
        <p>
          Using the Vuetify library of components, Thunder adheres to Google's
          Material Design principles. Thunder also uses FeathersJS to offer up
          data in real-time.
        </p>
      </div>
    </Layout>
  );
};

export default Projects;

const ImageWrap = ({ children }) => {
  const percent = 75;
  return (
    <div
      style={{ width: `${percent}%`, marginLeft: `${(100 - percent) / 2}%` }}
    >
      {children}
    </div>
  );
};
