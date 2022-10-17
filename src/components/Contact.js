import { useState, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="containerContact">
      <div className="emailBox">
        <p className="selfInfo">
          Phone: (719)313-6029 <br></br>Email:
          <a href="mailto: tommy.boileau@du.edu">tommy.boileau@du.edu</a>
        </p>
      </div>
    </div>
  );
}
