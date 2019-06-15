import { Link } from "gatsby"
import React from "react"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import useDarkMode from "use-dark-mode"

const Nav = (props) => {

  const darkMode = useDarkMode(false);
  
  const handleTheme = theme => theme === "light" ? darkMode.enable() : darkMode.disable();

  const getClasses = () =>
    [
      'nav',
      props.isHidden && `-is-hidden`,
      props.isTransparent && `-is-transparent`
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <header className={getClasses()}>
      <div className="nav__content">
        <div className="nav__initials">
          <Link to="/">KH</Link>
        </div>
        <div className="nav__links">
          <Link to="/about">About</Link>
          <a href="/#projects">Work</a>
          <Link to="/resume">Resume</Link>
          <div className="nav__themes">
            {!darkMode.value && <Sunrise size="s" onClick={handleTheme} />}
            {darkMode.value && <Sunset size="s" onClick={handleTheme} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
