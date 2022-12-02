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

        <button class="pushable" href={resume} download>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front">Click to Download</span>
        </button>
      </div>
    </div>
  );
}
