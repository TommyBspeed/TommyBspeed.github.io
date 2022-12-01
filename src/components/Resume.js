import React from "react";
import "./Resume.css";
import resume from "./tommyboileauresume.pdf";
import resumephoto from "./TBOILEAU_Resume.png";

export default function Resume() {
  return (
    <div className="resumeDownload">
      <div className="resumeCard">
        <h3 className="resumeTitle">Resume</h3>
        <img className="resumeImg" src={resumephoto} alt="Tommy's resume"></img>

        <a
          title="Download Resume"
          href={resume}
          download
          className="btn downloadBtn"
        >
          Click to Download
        </a>
      </div>
    </div>
  );
}
