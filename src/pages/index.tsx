import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Plane } from "../components/svg/plane"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="hero">
        <h1>
          hey there, i'm
          <div>Kim Hart</div>
        </h1>
        <h2>
          Frontend Engineer + Design Technologist
        </h2>
      </section>

      <section className="about">
        <div className="headshot">
          <StaticImage 
            src="../images/misc/kim-headshot.png" 
            alt="Headshot of Kim"
            width={200}
          />
        </div>
        <div className="bio">
          <h3>The Basics</h3>
          <ul>
            <li>
              <strong>Frontend team lead</strong> with 6+ years of experience building <a target="_blank" rel="noopener noreferrer" href="https://dashboard.jwplayer.com">enterprise products</a>
            </li>
            <li>React and Typescript engineer</li>
            <li>
              Specialist in <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90">design systems</a> and <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe">web component libraries</a>
            </li>
            <li>
              Creative thinker with a journalism degree and a passion for art & design
            </li>
            <li>Former mentor & speaker for {" "}
              <a
                href="https://www.builtbygirls.com/about-wave"
                target="_blank"
              >
                BuiltByGirls
              </a>
              ,{" "}
              <a
                href="https://medium.com/jw-player-engineering/advice-for-getting-a-career-in-engineering-8bdb653b3837"
                target="_blank"
              >
                Uncubed
              </a>{" "}
              and{" "}
              <a href="https://codenation.org/" target="_blank">
                CodeNation
              </a>{" "}
            </li>
            <li>Probably hanging out with my <a href="https://www.instagram.com/spicymargbk/" target="_blank" rel="noopener nooreferrer">red golden retriever</a> right now</li>
          </ul>
        </div>
      </section>

      <div className="contact">
        <a href="https://linkedin.com/in/kimhart1" target="_blank" rel="noopener nooreferrer"><h4>get in touch <Plane/></h4></a>
      </div>

      <section className="work">
        <h3>Some Pretty Stuff</h3>
        <div className="projects">
          <div className="project">
            <StaticImage 
              src="../images/product-shots/trimming-tool.png" 
              alt="Product shots of JW Dashboard in which a user is trimming a skate video and a podcast audio"
              />
            <p>Media trimming and clipping tool</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/ui-components.png" 
              alt="Examples of components like inputs, buttons, draggable episode lists, and alerts"
              />
            <p>Custom web component library</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/player-customization.png" 
              alt="Product shots of JW Dashboard in which user is editing logos and colors used in JW Player"
              />
            <p>Video player branding & customization suite</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/scout.png" 
              alt="Scout highlighting elements with test IDs in the browser"
              />
            <p>Scout: Chrome extension for fast & easy QA testing</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/jw-music.png" 
              alt="Custom music app powered by Spotify"
              />
            <p>Custom music app powered by Spotify</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kim Hart | Frontend Engineer</title>
