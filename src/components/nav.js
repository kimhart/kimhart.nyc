import { Link } from "gatsby"
import React, { useState } from "react"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import MenuIcon from "../components/icons/menu"
import CloseIcon from "../components/icons/close"
import useDarkMode from "use-dark-mode"

const Nav = (props) => {
  
  const darkMode = useDarkMode();
  const [menuOpen, toggleMenu] = useState();

  const handleTheme = theme => theme === "light" ? darkMode.enable() : darkMode.disable();

  const renderThemeToggle = (size) => {
    return (
      <div className="nav__themes">
        {!darkMode.value && <Sunrise isActive={!darkMode.value} size={size} onClick={handleTheme} />}
        {darkMode.value && <Sunset isActive={darkMode.value} size={size} onClick={handleTheme} />}
      </div>
    )
  }

  const renderNavLinks = (mobile) => {
    const menuAction = mobile ? () => toggleMenu(false) : null;
    return (
      <>
      <Link to="/about" onClick={menuAction}>About</Link>
      <Link to="/#projects" onClick={menuAction}>Work</Link>
      <Link to="/resume" onClick={menuAction}>Resume</Link>
      </>
    )
  }

  const renderNavIcon = () => {
    const menuAction = menuOpen
      ? () => toggleMenu(false)
      : () => toggleMenu(true);

    return (
      <div className="nav__icon" onClick={menuAction}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    )
  }

  const getClasses = () =>
    [
      'nav',
      props.isHidden && `-is-hidden`,
      props.isTransparent && `-is-transparent`,
      menuOpen && '-menu-open'
    ].filter(Boolean).join(' ');

  return (
    <header className={getClasses()}>
      <div className="nav__content">
        <Link className="nav__initials" to="/">KH</Link>
        <div className="nav__links">
          {renderNavLinks(false)}
          {renderThemeToggle("s")}
        </div>
        {renderNavIcon()}
      </div>
      <div className="nav__menu-pane">
        {renderThemeToggle("l")}
        {renderNavLinks(true)}
      </div>
    </header>
  )
}

export default Nav
