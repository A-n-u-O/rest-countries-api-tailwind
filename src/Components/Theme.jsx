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
  return <div>
            <button className='color-theme bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-sm p-3 shadow-sm flex items-center justify-between' data-theme={theme === 'dark' ? 'light' : 'dark'} onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
              <span className=" px-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>;
}
  