
import React from "react";
import { useState } from "react";
import raw from './uwt.txt';

function Footer() {
  //let uwt = "uwt";
  const [uwt, setUwt] = useState("UWT");
  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setUwt(text)
  });

  return (
    <div className="footer">
      <footer className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Refresh the page to trigger the pixel firing:
          </p>
          <p>{uwt}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;