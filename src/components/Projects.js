import { useState } from "react";
import "./Projects.css";
import fairFare from "./FairFare.png";

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
      name: "",
      image: "",
      liveSite: "",
      repository: "",
      altText: "",
    },

    {
      name: "",
      image: "",
      repository: "",
      altText: "",
    },
    {
      name: "",
      image: "",
      repository: "",
      altText: "",
    },
    {
      name: "",
      image: "",
      repository: "",
      altText: "",
    },
    {
      name: "",
      image: "",
      repository: "",
      altText: "",
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
            >
              Code
            </a>
            {projects[index].liveSite ? (
              <a
                className="projectLink"
                href={projects[index].liveSite}
                target="_blank"
                rel="noreferrer"
              >
                Application
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
