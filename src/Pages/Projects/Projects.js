import { useState } from "react";
import "./Projects.css";
import Dunno from "./DunnoScreenshot.png";
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
      name: "(Work in Progress): Dunno",
      image: Dunno,
      liveSite: "TBD",
      repository: "Currently Private",
      altText:
        "Screen shot of my app 'Dunno' Which is currently a work in progress.",
      description:
        "Dunno is an app for the indecisive eater. It will help you answer the age old question 'What do you want to eat?' with something other than 'I dunno...' Select your parameters, click submit and let the app do the rest. Still a work in progress, but will be live soon!",
    },
    {
      name: "Fair Fare",
      image: fairFare,
      liveSite: "https://fair-fare-app.herokuapp.com/",
      repository: "https://github.com/timberhead/the-foo-d-s",
      altText:
        "Home page image of the Fair Fare app, with an image of people enjoying a meal.",
      description:
        "Fair Fare is an application that allows a user to provide a review of their favorite meals at restaurants that may not have received high ratings for their overall menus. This application will act as a messageboard for promoting great meals at restaurants that users may have overlooked because of the lower overall restaurant rating. ",
    },
    {
      name: "The Registry",
      image: theRegistry,
      liveSite: "https://github.com/kaelinpsalazar/Project-3",
      repository: "https://github.com/kaelinpsalazar/Project-3",
      altText: "Home page for the Registry App.",
      description:
        "The Registry is a an app for users to create a registry database for various life events. Whether it be a wedding, new baby, or a graduation. ",
    },

    {
      name: "Random Movie Finder",
      image: movieFinder,
      repository: "https://github.com/kamarygillespie4/team-project-1",
      altText: "An image from the homepage of the Movie Finder app.",
      description:
        "This was our first project as a team in the bootcamp. We decided to utilize a movieDB API to generate random movies based on the selected category.",
    },
    {
      name: "Coding Quiz",
      image: codingQuiz,
      repository: "https://github.com/TommyBspeed/codingQuiz",
      altText: "The starting screen for my coding quiz app",
      description:
        "This is a small coding quiz that is used to test your knowledge of basic coding.",
    },
    {
      name: "Random Password Generator",
      image: passwordGenerator,
      repository: "https://github.com/TommyBspeed/PasswordRandomizer",
      altText: "The starting screen for my password randomizer app",
      description:
        "This app asks for a few parameters from the user to generate a randomized password.",
    },
    {
      name: "Work Day Scheduler",
      image: workDay,
      repository: "https://github.com/TommyBspeed/workDayScheduler",
      altText: "The home page of my workday scheduler app",
      description:
        "This is an app that will allow the user to keep track of their busy work week.",
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
      <h1 className="font2">
        Here are a few of my projects! Take a look at what I have been working
        on!
      </h1>
      <div id="cardProject" className="cardProject">
        <h2 className="blueText">{projects[index].name}</h2>
        <h2 className="projDescription font2">{projects[index].description}</h2>
        <h2 className="githubRepo blueText" href={projects[index].repository}>
          Link to repo: {projects[index].repository}
        </h2>
        <div className="imageSection">
          <div
            className="btnProjects smlScreen"
            onClick={(e) => {
              e.preventDefault();
              subtractFromIndex();
              flipLeft();
            }}
          >
            ◀️
          </div>
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
            ▶️
          </div>
        </div>
        <div className="cardFooter">
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
