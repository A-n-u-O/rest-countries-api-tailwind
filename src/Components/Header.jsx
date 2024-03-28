import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Header = () => {
  
  return <header>
          <label htmlFor='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
          <input type='text' name='search' placeholder='search country...' />
            <select>
              
            </select>
        </header>;
}
  