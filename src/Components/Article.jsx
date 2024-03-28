import { Link } from "react-router-dom"

const Article = ({flags, name, population, region, subregion}) => {
  return <>
    <Link to = {`/${name.common}`}>
      <article className="country-group bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
          <img src={flags.svg} alt="country flag" className="flag md:h-72 w-full object-cover"/>
          <div className="country-details p-4">
              <h2 className="country-name font-bold text-lg text-gray-900 dark:text-white mb-2">{name.common}</h2>
              <ul className="country-props flex flex-col items-start justify-start gap-2 dark:text-gray-200">
                  <li>Population: {population.toLocaleString()}</li>
                  <li>Region: {region}</li>
                  <li>Subregion: {subregion}</li>
              </ul>
          </div>
      </article>
    </Link>
  </>
}
export default Article