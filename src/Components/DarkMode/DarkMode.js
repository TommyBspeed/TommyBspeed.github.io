import "./DarkMode.css";
import React, { useState, useEffect } from "react";

export const DarkMode = ({ toggledBackground }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggledBackground}
      />
      <label for="darkmode-toggle" />
    </div>
  );
};
