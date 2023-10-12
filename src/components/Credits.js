import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function DevCredits() {
  return (
    <div className="dev-credits">
      <FontAwesomeIcon icon={faCode} /> Designed & Coded by{" "}
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="social-link"
      >
        Abhishek Ranjan
      </a>
      <br />
    </div>
  );
}

export default DevCredits;
