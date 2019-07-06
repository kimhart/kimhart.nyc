import { Link } from "gatsby"
import React, { useState } from "react"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import MenuIcon from "../components/icons/menu"
import CloseIcon from "../components/icons/close"
import useDarkMode from "use-dark-mode"

const Nav = (props) => {
  
  const darkMode = useDarkMode(false);
  const [menuOpen, toggleMenu] = useState();
  const { style } = document.body;
  const about = document.body.querySelector(".page--about__main");

  const handleTheme = theme => theme === "light" ? darkMode.enable() : darkMode.disable();

  const openMenu = () => {
    toggleMenu(true);
    style.maxHeight = '100vh';
    style.overflow = 'hidden';
    about ? about.style.position = 'static' : null;
  }

  const closeMenu = () => {
    toggleMenu(false);
    style.maxHeight = 'none';
    style.overflow = 'normal';
    about ? about.style.position = 'absolute' : null;
  }

  const getClasses = () =>
    [
      'nav',
      props.isHidden && `-is-hidden`,
      props.isTransparent && `-is-transparent`,
      menuOpen && '-menu-open'
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
          <Link to="/#projects">Work</Link>
          <Link to="/resume">Resume</Link>
          <div className="nav__themes">
            {!darkMode.value && <Sunrise size="s" onClick={handleTheme} />}
            {darkMode.value && <Sunset size="s" onClick={handleTheme} />}
          </div>
        </div>
        {!menuOpen && (
          <div className="nav__menu" onClick={() => openMenu()}>
            <MenuIcon />
          </div>
        )}
        {menuOpen && (
          <div className="nav__menu" onClick={() => closeMenu()}>
            <CloseIcon />
          </div>
        )}
      </div>
      <div className="nav__menu-pane">
        <div>
          <div className="nav__themes">
            {!darkMode.value && <Sunrise size="l" onClick={handleTheme} />}
            {darkMode.value && <Sunset size="l" onClick={handleTheme} />}
          </div>
          <Link to="/about" onClick={() => closeMenu()}>
            About
          </Link>
          <Link to="/#projects" onClick={() => closeMenu()}>
            Work
          </Link>
          <Link to="/resume" onClick={() => closeMenu()}>Resume</Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
