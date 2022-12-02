import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutME/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import "./Components/DarkMode/DarkMode.css";
import React, { useState, useEffect } from "react";

function App() {
  console.log("#   #  #####  #      #      #####");
  console.log("#   #  #      #      #      #   #");
  console.log("#####  #####  #      #      #   #");
  console.log("#   #  #      #      #      #   #");
  console.log("#   #  #####  #####  #####  #####");
  console.log("This site has been built by Tommy Boileau");
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
      <button onClick={setTheme}></button>
    </Router>
  );
}

export default App;
