import React from "react";
import "./Resume.css";
import resume from "./tommyboileauresume.pdf";
import resumephoto from "./TBOILEAU_Resume.png";

function Resume() {
  return (
    <div className="resumeDownload">
      <div className="resumeCard">
        <h3 className="resumeTitle">Resume</h3>
        <img src={resumephoto} alt="Tommy's resume" className="resumeImg"></img>
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

export default Resume;
