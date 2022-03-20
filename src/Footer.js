import React from "react";

import Logo from "./Logo";

import "./styles.scss";

const Footer = ({ brandLogo, brandLink }) => {
  // console.log(props);

  return (
    <footer>
      Footer
      <Logo img={brandLogo} link={brandLink} />
    </footer>
  );
};

export default Footer;
