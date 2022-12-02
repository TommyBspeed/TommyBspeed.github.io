import { useState } from "react";
import "./Projects.css";
import fairFare from "./FairFare.png";
import theRegistry from "./theRegistry.png";
import movieFinder from "./movieFinder.png";
import codingQuiz from "./codingQuiz.png";
import passwordGenerator from "./passwordGenerator.png";
import workDay from "./workDay.png";

export default function Projects() {
  let [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Fair Fare",
      image: fairFare,
      liveSite: "https://fair-fare-app.herokuapp.com/",
      repository: "https://github.com/timberhead/the-foo-d-s",
      altText:
        "Home page image of the Fair Fare app, with an image of people enjoying a meal.",
    },
    {
      name: "The Registry",
      image: theRegistry,
      liveSite: "https://github.com/kaelinpsalazar/Project-3",
      repository: "https://github.com/kaelinpsalazar/Project-3",
      altText: "Home page for the Registry App.",
    },

    {
      name: "Random Movie Finder",
      image: movieFinder,
      repository: "https://github.com/kamarygillespie4/team-project-1",
      altText: "An image from the homepage of the Movie Finder app.",
    },
    {
      name: "Coding Quiz",
      image: codingQuiz,
      repository: "https://github.com/TommyBspeed/codingQuiz",
      altText: "The starting screen for my coding quiz app",
    },
    {
      name: "Random Password Generator",
      image: passwordGenerator,
      repository: "https://github.com/TommyBspeed/PasswordRandomizer",
      altText: "The starting screen for my password randomizer app",
    },
    {
      name: "Work Day Scheduler",
      image: workDay,
      repository: "https://github.com/TommyBspeed/workDayScheduler",
      altText: "The home page of my workday scheduler app",
    },
  ];

  const addToIndex = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const subtractFromIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(projects.length - 1);
    }
  };

  const flipLeft = () => {
    const card = document.getElementById("cardProject");
    card.classList.add("flip-2-ver-left-2");
    card.classList.remove("flip-2-ver-left-2");
  };
  const flipRight = () => {
    const card = document.getElementById("cardProject");
    card.classList.add("flip-2-ver-right-2");
    card.classList.remove("flip-2-ver-right-2");
  };

  return (
    <div className="projectsContainer">
      <div id="cardProject" className="cardProject">
        <h2>{projects[index].name}</h2>
        <div className="imageSection">
          <img
            className="projectImage"
            src={projects[index].image}
            alt={projects[index].altText}
          ></img>
          <div
            className="btnProjects lrgScreen"
            onClick={(e) => {
              e.preventDefault();
              addToIndex();
              flipRight();
            }}
          >
            Next
          </div>
        </div>
        <div className="cardFooter">
          <div
            className="btnProjects smlScreen"
            onClick={(e) => {
              e.preventDefault();
              subtractFromIndex();
              flipLeft();
            }}
          >
            Prev
          </div>
          <div className="linkBox">
            <a
              className="projectLink"
              href={projects[index].repository}
              target="_blank"
              rel="noreferrer"
            ></a>
            {projects[index].liveSite ? (
              <a
                className="projectLink"
                href={projects[index].liveSite}
                target="_blank"
                rel="noreferrer"
              ></a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
