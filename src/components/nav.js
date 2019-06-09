import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"

const Nav = ({ currentPage, theme }) => (
  <header className="nav">
    <div className="nav__content">
      <div className="nav__initials">
        <Link to="/">KH</Link>
      </div>
      <div className="nav__links">
        <Link className={currentPage === "about" && "-is-active"} to="/about">
          About
        </Link>
        <a className={currentPage === "work" && "-is-active"} href="/#work">
          Work
        </a>
        <Link className={currentPage === "resume" && "-is-active"} to="/resume">
          Resume
        </Link>
        <div className="nav__theme-toggle">
					{theme === "sunrise" && <Sunrise />}
					{theme === "sunset" && <Sunset />}
        </div>
      </div>
    </div>
  </header>
)

Nav.propTypes = {
  currentPage: PropTypes.string,
}

Nav.defaultProps = {
  currentPage: ``,
}

export default Nav
