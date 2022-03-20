import React from "react";

const Logo = ({ img, link }) => {
  // In lieu of dangerouslySetInnerHTML...
  const src = img;

  return (
    <>
      <a href={link}>
        <img src={`data:image/svg+xml;utf8,${src}`} />
      </a>
    </>
  );
};

export default Logo;
