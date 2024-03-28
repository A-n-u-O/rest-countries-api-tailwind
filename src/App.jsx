import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'

import { faMagnifyingGlass, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Countries from './Components/Countries';
import { Error } from './Components/Error';
import { useEffect, useState } from 'react';


function App() {
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

  

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Countries/>} ></Route>
            <Route path='*' element = {<Error/>}></Route>
          </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
