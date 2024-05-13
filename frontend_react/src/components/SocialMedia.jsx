import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://github.com/ibrian91"
        target="_blank"
        aria-label="Link a Git Hub"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/ibrian-giorgio/"
        target="_blank"
        aria-label="Link a Linkedin"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
