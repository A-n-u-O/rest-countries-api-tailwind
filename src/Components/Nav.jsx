import { Header } from "./Header"
import { Theme } from "./Theme"
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Nav = ({theme ,handleThemeSwitch}) => {
  return (
    <>
        <nav className="flex flex-row gap-4  items-center justify-between mb-8">
          <span>Where in the world</span>
          <Theme   theme={theme} handleThemeSwitch={handleThemeSwitch} faSun={faSun} faMoon={faMoon}  />
        </nav>
    </>
  )
}
export default Nav