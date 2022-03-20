import React from "react";

const NavLink = ({ tag, displayText, url, icon, id }) => {
  console.log(tag, displayText, url, icon, id);

  return (
    <div>
      <div>tag: {tag}</div>
      <div>displayText: {displayText}</div>
      <div>url: {url}</div>
      <div>icon: {icon}</div>
      <div>id: {id}</div>
    </div>
  );
};

export default NavLink;
