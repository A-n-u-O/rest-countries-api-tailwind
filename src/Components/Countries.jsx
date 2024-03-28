import { useEffect, useState } from "react"
import Article from "./Article";

export default function Countries (){
    const [country, setCountry] = useState([])
    const url = 'https://restcountries.com/v3.1/all';
    useEffect(()=>{
        const getCountry = async()=>{
            try {
                const resp = await fetch(url);
                const data = await resp.json()
                setCountry(data)
                console.log(data.slice(0, 10));
            } catch (error) {
                console.error(error)
            }
        }

        getCountry()
    }, [])

    return (
        <>
        <nav className='nav'>
          <span>Where in the world</span>
          <div className='  flex justify-end'>
            <button className='color-theme' data-theme = {theme === 'dark' ? 'light' : 'dark'} onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon = {theme === 'dark' ? faSun : faMoon}/>
              <span>{(theme === 'dark') ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </nav>
      <div className='container'>
        <header>
          <label htmlFor='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </label>
          <input type='text' name='search' placeholder='search country...'/>
            <select>
              
            </select>
        </header>
      </div>        
            {!country ? <h1 className="loading text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1> : 
            <section className=" container mx-auto p-8">
            {/* form */}
            <div className="country grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {country.map((item)=>(
                        <Article key={item.name.common} {...item}/>
                    ))}
            </div>
                
            </section>}
        </>
    )
}