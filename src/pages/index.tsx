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
              <strong>Frontend team lead based in Brooklyn, NY</strong>
            </li>
            <li>6+ years of experience building <a target="_blank" rel="noopener noreferrer" href="https://dashboard.jwplayer.com">enterprise products</a> and internal tools</li>
            <li>
              Specialist in React, Typescript, CSS, <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90">design systems</a> and <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe">web component libraries</a>
            </li>
            <li>Advocate for purposeful and enjoyable user experiences</li>
            <li>
              Creative thinker with a journalism degree and love of art & design
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
            <li>Roots in the Bay Area and San Diego (though NY has been home for 10 years)</li>
            <li>Big fan of sci-fi, traveling, music festivals, and my <a href="https://www.instagram.com/spicymargbk/" target="_blank" rel="noopener nooreferrer">red golden retriever</a></li>
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
            <h5>Media trimming and clipping tool — JW Player dashboard</h5>
            <p>Adjust the length of media down to the millisecond with a live playback preview</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/ui-components.png" 
              alt="Examples of components like inputs, buttons, draggable episode lists, and alerts"
              />
            <h5>Web component library built with Stencil & React</h5>
            <p>Framework-agnostic building blocks for JW Player's custom design system</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/player-customization.png" 
              alt="Product shots of JW Dashboard in which user is editing logos and colors used in JW Player"
              />
            <h5>Video player branding suite — JW Player dashboard</h5>
            <p>Add logos, stylize captions, modify colors, customize controls & menus for individual players</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/scout.png" 
              alt="Scout highlighting elements with test IDs in the browser"
              />
            <h5>Scout Chrome extension for fast QA</h5>
            <p>Quickly identify testable elements and their targetable IDs on any web page</p>
          </div>
        </div>
      </section>
      <footer>
         <a href="https://linkedin.com/in/kimhart1" target="_blank" rel="noopener nooreferrer"><h2>see more / say hi</h2></a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kim Hart | Frontend Engineer</title>
