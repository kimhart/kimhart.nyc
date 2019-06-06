import React from "react"
import IconLocation from "../components/icons/location"
import Sunrise from "../components/icons/sunrise"
import Sunset from "../components/icons/sunset"
import Button from "../components/button"

const Hero = () => (
  <div className="home__hero">
    <div className="home__location">
      <h2>
        BK <div /> NYC <div />
        <IconLocation />
      </h2>
    </div>
    <div className="home__intro">
      <div className="home__theme-toggles">
        <Sunrise />
        <Sunset />
      </div>
      <div className="home__name-wrap">
        <h1>Kim Hart</h1>
        <span className="home__shadow">Kim Hart</span>
      </div>
      <div className="home__code">
        {`<FrontEndEngineer location="Brooklyn" productDesign={true}`} />
      </div>
      <div className="home__ctas">
        <Button type="secondary" text="About" link="about" />
        <Button type="primary" text="See My Work" link="portfolio" />
        <Button type="secondary" text="Resume" link="resume" />
      </div>
      <div className="home__one-liner">
        Currently building scalable, beautiful UIs @ JW Player
      </div>
    </div>
  </div>
)

export default Hero
