import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
export const Theme=()=>{
  const [theme, setTheme] = useState('light');
  
  useEffect(()=>{
      (theme === 'dark')
      ? 
      document.documentElement.classList.add('dark')
      :
      document.documentElement.classList.remove('dark'); 
  },[theme]);

  const handleThemeSwitch = () =>{
      setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <div className='  flex justify-end'>
            <button className='color-theme' data-theme={theme === 'dark' ? 'light' : 'dark'} onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
              <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>;
}
  