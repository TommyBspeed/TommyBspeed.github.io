import "./DarkMode.css";
import React, { useState, useEffect } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <input type="checkbox" id="darkmode-toggle" onChange={toggleTheme} />
      <label for="darkmode-toggle" />
    </div>
  );
};
