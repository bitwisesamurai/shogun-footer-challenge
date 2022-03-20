import React from "react";

import NavLink from "./NavLink";

const Section = ({ sections = [] }) => {
  console.log(sections);

  return sections.forEach((section) => {
    // return <div>Section</div>;
    return <NavLink />;
  });
};

export default Section;
