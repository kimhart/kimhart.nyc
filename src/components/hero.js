import React from "react"
import IconLocation from "../components/icons/location"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import Button from "../components/button"
import useDarkMode from "use-dark-mode"

const Hero = () => {

  const darkMode = useDarkMode(false);

  const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  const buildName = () => {
    const name = "Kim Hart";
    const split = name.split('');
    return split.map((letter, i) => <span className={letter === " " ? "space" : ""} key={i}>{letter}</span>);
  }

  return (
    <div className={`hero`}>
      <div className="hero__location">
        <h3>
          BK <div className="hero__location-divider" /> NYC <div className="hero__location-divider" />
          <div className="hero__pindrop">
            <IconLocation />
          </div>
        </h3>
      </div>
      <div className="hero__intro">
        <div className="hero__theme-toggles">
          <Sunrise onClick={handleTheme} size="l" />
          <Sunset onClick={handleTheme} size="l" />
        </div>
        <div className="hero__name-wrap">
          <h1 className="title-animate-in">{buildName()}</h1>
          <span className="hero__shadow title-animate-in">{buildName()}</span>
        </div>
        <h2 className="hero__headline">
          Front-end engineer building UIs & design system methodology @ JW
          Player
        </h2>
        <div className="hero__ctas">
          <Button type="secondary" text="About" link="about" />
          <Button type="primary" text="See My Work" link="#projects" />
          <Button type="secondary" text="Resume" link="resume" />
        </div>
      </div>
    </div>
  )
}

export default Hero;