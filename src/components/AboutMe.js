import "./AboutMe.css";
import {
  DiNodejsSmall,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiMysql,
  DiMongodb,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiHandlebarsdotjs, SiExpress } from "react-icons/si";
import headshot from "./headshot.jpeg";

const showLinks = (e) => {
  e.preventDefault();
  const link = document.getElementById("linksNav");
  if (link.style.display === "flex") {
    link.style.display = "none";
  } else {
    link.style.display = "flex";
  }
};

export default function AboutMe() {
  return (
    <div className="containerAbout">
      <img
        className="profile"
        src={headshot}
        alt="Picture of Tommy Boileau"
        onClick={showLinks}
      ></img>
      <p>
        Hi everyone! And welcome to my portfolio page! My name is Tommy Boileau,
        I am a former professional racecar driver turned Full-Stack we
        developer. Outside of racing and coding, I am a big hockey fan (GO AVS!)
        and play mens league hockey twice a week, I am a golf fanatic, I love
        video games, and I have a wonderful dog named Ricky Bobby with my
        beautiful wife Abbey.Follow me on my journey as I make my way into the
        professional workplace and grow as a developer!
      </p>
      <h3>Technologies:</h3>
      <div className="allIcons">
        <div className="iconBox">
          <DiJavascript1 className="icons" />
          JavaScript
        </div>
        <div className="iconBox">
          <DiHtml5 className="icons" />
          HTML5
        </div>
        <div className="iconBox">
          <DiCss3 className="icons" />
          CSS3
        </div>
        <div className="iconBox">
          <DiNodejsSmall className="icons" />
          NodeJS
        </div>
        <div className="iconBox">
          <SiExpress className="icons" />
          Express.js
        </div>
        <div className="iconBox">
          <SiHandlebarsdotjs className="icons" />
          Handlebars
        </div>
        <div className="iconBox">
          <DiReact className="icons" />
          React
        </div>
        <div className="iconBox">
          <DiBootstrap className="icons" />
          Bootstrap
        </div>
        <div className="iconBox">
          <DiMysql className="icons" />
          MySQL
        </div>
        <div className="iconBox">
          <DiMongodb className="icons" />
          MongoDB
        </div>
      </div>
    </div>
  );
}
