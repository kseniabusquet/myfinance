import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function ThemeSwitcher (props) {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  
  function toggleMode() {
    setIsDarkMode(!isDarkMode);
    props.changeTheme();
  }

  return (
    <DarkModeToggle
      onChange={() => toggleMode()}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default ThemeSwitcher