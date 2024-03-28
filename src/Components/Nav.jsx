import { Header } from "./Header"
import { Theme } from "./Theme"
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Nav = ({theme ,handleThemeSwitch}) => {
  return (
    <>
        <nav className='nav'>
          <span>Where in the world</span>
          <Theme   theme={theme} handleThemeSwitch={handleThemeSwitch} faSun={faSun} faMoon={faMoon}  />
          <Header   faMagnifyingGlass={faMagnifyingGlass}  />
        </nav>
    </>
  )
}
export default Nav