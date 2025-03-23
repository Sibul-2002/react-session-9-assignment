import React, { useEffect, useState } from "react";
import "./style.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);


  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        {theme === "light" ? "🌞 Switch to Dark Mode" : "🌙 Switch to Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
