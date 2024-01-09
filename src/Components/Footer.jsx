// Footer.js
import React from "react";

const Footer = ({ copy, isAboutPage }) => {
  const footerStyle = {
    backgroundColor: isAboutPage ? 'blue' : 'red',
  };

  return (
    <footer style={footerStyle}>
      <div>
        {copy}
      </div>
    </footer>
  );
};

export default Footer;
