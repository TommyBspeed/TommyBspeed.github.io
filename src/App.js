import "./App.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutME/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import { Background } from "./Components/Background/Background";
import React, { useState, useCallback } from "react";

function App() {
  console.log("#   #  #####  #      #      #####   ##");
  console.log("#   #  #      #      #      #   #   ##");
  console.log("#####  #####  #      #      #   #   ##");
  console.log("#   #  #      #      #      #   #   ");
  console.log("#   #  #####  #####  #####  #####   ##");
  console.log("This site has been built by Tommy Boileau");

  const [toggleActive, settoggleActive] = useState(true);
  const toggledBackground = useCallback(() => {
    settoggleActive(!toggleActive);
  });

  return (
    <Router>
      <div className="App">
        <div>
          <button></button>
        </div>
        <div>
          <Background toggleActive={toggleActive} />
        </div>
        <Routes>
          <Route
            path="/"
            element={<AboutMe toggledBackground={toggledBackground} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
