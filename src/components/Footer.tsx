import * as React from "react";
const githubSVG = require("../images/github.svg");

function Footer() {
  return (
    <footer className="flex justify-center items-center">
      <p className="text-black text-xl my-4">Made by Cole Burch</p>
      <a href="https://github.com/ColeBurch">
        <img src={githubSVG} alt="GitHub" className="w-5 h-5 mx-2" />
      </a>
    </footer>
  );
}

export default Footer;
