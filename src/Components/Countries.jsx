import { useEffect, useState } from "react"
import Article from "./Article";
import Nav from './Nav';

export default function Countries (){
    const [country, setCountry] = useState([]);
    const [searchText, setSearchText] = useState('')
    const regions = [
      {
        name: 'Europe',
      },
      {
        name: 'Asia',
      },
      {
        name: 'Africa',
      },
      {
        name: 'Oceania',
      },
      {
        name: 'Americas',
      },
      {
        name: 'Antarctic',
      }
    ]
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

    const searchCountry = async() => {
      try {
        const resp =  await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        const data = await resp.json()
        setCountry(data)
      } catch (error) {
        console.error(error)
      }
    }

  const filterByRegion = async(region) =>{
    try {
      const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await resp.json();
      setCountry(data);
    } catch (error) {
      console.error(error)
    }
  }

   const handleSearchCountry = (e) =>{ 
    e.preventDefault();
    searchCountry ();
   }

   const handleFilterByRegion = (e) => {
    e.preventDefault()
    filterByRegion();
   }

    return (
        <>
            {!country ? <h1 className="loading text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1> : 
            <section className=" container mx-auto p-8">
            <Nav/>
            {/* form */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
              <form onSubmit={handleSearchCountry} autoComplete="off" className=" max-w-4xl md:flex-1">
                <input 
                type="text" 
                id="search" 
                name="search" 
                placeholder="search for a country by it's name..." 
                required 
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}
                className=" py-3 px- text-gray-600 placeholder:text-gray-600 w-full shadow rounded outline-none dark:text-gray-400 dark:placeholder:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"/>
              </form>
              <form onSubmit={handleFilterByRegion}>
                <select 
                name="filter-by-region" 
                id="filter-by-region"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)} 
                className=" w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700">
                  {regions.map((region, index)=>{
                    return <option key={index} value={region.name}>
                      {region.name}
                    </option>
                  })}
                </select>
              </form>
              </div>
            <div className="country grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {country.map((item)=>(
                        <Article key={item.name.common} {...item}/>
                    ))}
            </div>
                
            </section>}
        </>
    )
}