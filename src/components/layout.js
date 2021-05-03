import * as React from "react";
// import { Link } from "gatsby";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
