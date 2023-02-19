import React from "react"
import IconLocation from "../components/icons/location"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import Button from "../components/button"
import useDarkMode from "use-dark-mode"
import { KeywordsCircle } from "./keywords"

const Hero = () => {

  const darkMode = useDarkMode();
  const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  return (
    <div className="hero">
      <div className="gradient">
        <div className="info">
          <h1>KIM HART</h1>
          <h2>senior frontend engineer / design technologist</h2>
        </div>
        <div className="sun">
          <KeywordsCircle />
        </div>
      </div>
      {/* <div className="hero__theme-toggles">
        <Sunrise
          onClick={handleTheme}
          size="l"
        />
        <Sunset
          onClick={handleTheme}
          size="l"
        />
      </div> */}
      {/* <div className="hero__intro">
        <div className="hero__name-wrap">
          <h1>Kim Hart</h1>
          <span className="hero__shadow">Kim Hart</span>
        </div>
        <h2 className="hero__headline">
          Front-end engineer hacking on all things UX/UI and internal tools @ JW Player
        </h2>
        <div className="hero__ctas">
          <Button type="secondary" text="About" link="about" />
          <Button type="primary" text="See My Work" link="#projects" />
          <Button type="secondary" text="Resume" link="resume" />
        </div>
      </div> */}
    </div>
  )
}

export default Hero;