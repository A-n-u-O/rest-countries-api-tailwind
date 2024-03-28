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
        <p className=' flex items-center justify-center text-xl text-blue-600 tracking-wider'>Made by <a className=' text-red-300 tracking-wider' href='https://www.linkedin.com/in/a-n-u-o/'> Anuoluwapo </a>&copy;2024.</p>
    </>
  )
}

export default App
