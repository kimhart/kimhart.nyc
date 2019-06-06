import { Link } from "gatsby"
import React from "react"

const Button = (props) => {
  const { text, type, link } = props;

  return (
    <Link to={`/${link}`}>
      <button className={`button button--${type}`}>
        {text}
      </button>
    </Link>
  )
}

export default Button
