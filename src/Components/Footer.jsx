import React from "react";
import ReactDOM from "react-dom";

function Footer() {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <footer>
      <p>CopyRight@ {years}</p>
    </footer>
  );
}

export default Footer;
