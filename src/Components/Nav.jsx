import { Theme } from "./Theme"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Nav = ({theme ,handleThemeSwitch}) => {
  return (
    <>
        <nav className="flex flex-row gap-4  items-center justify-between mb-8">
          <h1 className=" font-bold text-2xl">Where in the world ?</h1>
          <Theme   theme={theme} handleThemeSwitch={handleThemeSwitch} faSun={faSun} faMoon={faMoon}  />
        </nav>
    </>
  )
}
export default Nav