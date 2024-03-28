import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Countries from './Components/Countries';
import SingleCountry from './Components/SingleCountry';


function App() {
  

  

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Countries/>} ></Route>
            <Route path='/:name' element = {<SingleCountry/>} ></Route>
          </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App
