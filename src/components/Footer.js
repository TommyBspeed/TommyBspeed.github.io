import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="containerFooter">
      <h3>My links:</h3>
      <a
        href="https://github.com/TommyBspeed"
        target="_blank"
        className="linkFooter"
        rel="noreferrer"
      >
        <AiFillGithub className="iconFooter" />
      </a>
      <a
        href="https://www.linkedin.com/in/tommy-boileau-51668a244/"
        target="_blank"
        className="linkFooter"
        rel="noreferrer"
      >
        <AiFillLinkedin className="iconFooter" />
      </a>
    </div>
  );
}
