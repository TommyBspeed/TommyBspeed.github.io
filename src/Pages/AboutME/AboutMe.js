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
import Footer from "../../Components/Footer/Footer";
import React, { useState, useCallback } from "react";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import { DarkMode } from "../../Components/DarkMode/DarkMode";

export default function AboutMe({ toggledBackground }) {
  const [show, setShow] = useState(false);
  const [btnShow, setbtnShow] = useState(true);
  const [btn2Show, setbtn2Show] = useState(false);

  return (
    <div className="container">
      <DarkMode toggledBackground={toggledBackground} />
      <h1 className="blueText" id="nameHeader">
        Tommy Boileau
      </h1>

      {/*
      Future development, slider image of me in/out of helmet. Need to take pics.
      <div>
        <div class="img background-img"></div>
        <div class="img foreground-img"></div>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          name="slider"
          id="slider"
        ></input>
      </div> */}
      <img className="profile" src={headshot} alt="Tommy Boileau"></img>
      <h2 className="font2">
        Hi everyone! And welcome to my portfolio page! My name is Tommy Boileau,
        I am a former professional racecar driver turned Full-Stack web
        developer. I have always loved gaming and solving puzzles and found a
        true love for problem solving by thinking outside of the box. I decided
        to make a leap into this new career path after the pandemic took away
        lots of sponsor dollars in motorsport. Outside of racing and coding, I
        am a big hockey fan (GO AVS!) and play mens league hockey twice a week,
        I am a golf fanatic, I love video games, and I have a wonderful dog
        named Ricky Bobby with my beautiful wife Abbey. Follow me on my journey
        as I make my way into the professional workplace and grow as a
        developer!
      </h2>

      <div className="allIcons">
        <h3 className="blueText">Technologies:</h3>
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
        <div className="buttonBox">
          {btnShow ? (
            <button
              id="pageBtn"
              class="pushable"
              onClick={() => [
                setShow(true),
                setbtnShow(false),
                setbtn2Show(true),
              ]}
            >
              <span id="pageBtn" class="shadow"></span>
              <span id="pageBtn" class="edge"></span>
              <span id="pageBtn" class="front">
                See More
              </span>
            </button>
          ) : null}
          <div>
            {show ? [<hr></hr>, <Projects />] : null}

            {show ? [<hr></hr>, <Resume />] : null}
            {show ? [<hr></hr>, <Contact />, <hr></hr>] : null}

            {btn2Show ? (
              <button
                id="pageBtn"
                class="pushable"
                onClick={() => [
                  setShow(false),
                  setbtnShow(true),
                  setbtn2Show(false),
                ]}
              >
                <span id="pageBtn" class="shadow"></span>
                <span id="pageBtn" class="edge"></span>
                <span id="pageBtn" class="front">
                  See Less
                </span>
              </button>
            ) : null}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
