import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";

const SingleCountry = () => {
    const [country, setCountry] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
                const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await resp.json();
                if (data.length > 0) {
                    setCountry(data[0]);
                } else {
                    // Handle case where no country with the given name is found
                    console.error("Country not found");
                }
            } catch (error) {
                console.error(error);
            }
        };
        getSingleCountry();
    }, [name]);

    return (
        <>
            <Nav/>
            <section className="text-gray-950 dark:text-white p-8 md:py-0 max-w-7xl mx-auto">
                <div key={country.population} className="grid grid-cols-1 gap- md:grid-cols-2 md:place-items-center md:h-screen">
                    <article>
                        <img src={country.flags && country.flags.svg} alt={country.name && country.name.common} />
                    </article>
                    <article>
                        <h1 className=" mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                            {country.name && country.name.official}
                        </h1>
    
                        <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                            <li>Capital: {country.capital && country.capital[0]}</li>
                            <li>Population: {country.population && country.population.toLocaleString()}</li>
                            <li>Region: {country.region}</li>
                            <li>Subregion: {country.subregion}</li>
                            {console.log("Currencies:", country.currencies)}
                            {country.currencies && (
                                <>
                                    <li>Currencies:</li>
                                    {typeof country.currencies === 'object' && Object.keys(country.currencies).map((currencyCode, index) => (
                                        <li key={index}>{country.currencies[currencyCode].name} ({currencyCode}) ({country.currencies[currencyCode].symbol})</li>
                                    ))}
                                </>
                            )}

                        </ul>
                        {country.borders && (
                            <>
                                <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-wrap">Borders:</h3>
                                <ul className="flex flex-wrap items-start gap-2">
                                    {country.borders.map((border, index) => {
                                        return <li key={index} className=" bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700">{border}</li>; // Add return statement here
                                    })}
                                </ul>
                            </>
                        )}

                        <Link to='/' className=" inline-block mt-8 bg-white py-2 px-6 text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 shadow-sm">&larr; Back</Link>
                        {/* Display border countries if you fetch them separately */}
                    </article>
                </div>
            </section>
        </>
    );
    
};

export default SingleCountry;
