import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Github from "../components/svgs/github"
import LinkedIn from "../components/svgs/linkedin"
import Twitter from "../components/svgs/twitter"

const IndexPage = () => {

  const renderNeonName = () => {
    const name = 'kim hart';
    const arr = name.split('');
    return arr.map((letter) => {
      return (
        <span key={letter} className="neon-letter">
          {letter}
        </span>
      )
    })
  }

  return (
    <Layout>
      <SEO title="Kim Hart | Frontend Engineer + Design Technologist" />
      <div className="home">
        <div className="hero">
          <h1>{renderNeonName()}</h1>
          <h2>
            frontend engineer
            <span>&bull;</span> 
            design technologist
            <span>&bull;</span>
            brooklyn, ny
          </h2>
        </div>

        <div className="about">
          <h3>the deets</h3>
          <div className="neon-line"/>
          <div className="headshot">
            <Image src="kim-headshot.png" alt="Headshot of Kim" />
          </div>
          <ul>
            <li>
              Frontend engineer with 6+ years of experience building teams, enterprise products, and internal tools
            </li>
            <li>
              Specialist in <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90">design systems</a>, <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe">web component libraries</a> and accessible UI
            </li>
            <li>Team lead with a knack for organizing cross-functional projects</li>
            <li>Creative thinker with a passion for art and design</li>
            <li>Former mentor & speaker for {" "}
              <a
                href="https://www.builtbygirls.com/about-wave"
                target="_blank"
              >
                #BuiltByGirls
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
            <li>
              Californian-turned-New Yorker (for 10 years, it's legit!)
            </li>
            <li>Probably cuddling my <a href="https://www.instagram.com/spicymargbk/" target="_blank" rel="noopener nooreferrer">red golden retriever</a> right now</li>
          </ul>
        </div>

        <div className="projects">
          <h3>some pretty stuff</h3>
          <h2>
            <span>[</span>
            react
            <span>&bull;</span> 
            typescript
            <span>&bull;</span>
            scss
            <span>&bull;</span>
            stencil
            <span>&bull;</span>
            vite
            <span>]</span>
          </h2>
          <div className="neon-line"/>
          <div className="product-shots">
            <div>
              <Image src="product-shots/player-customization.png" alt="2 product shots of a video player customization suite that allows users to adjust colors, caption styles, menus and logos in the JW Player" />
              <p>JWP video player customization suite</p>
            </div>

            <div>
              <Image src="product-shots/trimming-tool.png" alt="3 product shots of a media trimming tool featuring a video of a skateboarder in Venice Beach, an audio file of a podcast" />
              <p>Media trimming & clipping tool</p>
            </div>

            <div>
              <Image src="product-shots/ui-components.png" alt="Collage of screenshots of web components (form inputs, draggable lists, thumbnails, buttons, alerts, etc)" />
              <p>Design system + web components</p>
            </div>

            <div>
              <Image src="product-shots/scout.png" alt="Collage of screenshots of chrome extension" />
              <p>Chrome extension for QA testing UI elements</p>
            </div>

            <div>
              <Image src="product-shots/jw-music.png" alt="Collage of screenshots of custom music player" />
              <p>Custom music app powered by Spotify</p>
            </div>
          </div>
        </div>

        <div className="contact">
          <h3>
            see more <span>/</span> get in touch
          </h3>
          <div className="neon-line"/>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/kimhart1/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedIn  />
              LinkedIn
            </a>
            <a
              href="https://github.com/kimhart" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github />
              GitHub
            </a>
            <a 
              href="https://twitter.com/kim_hart" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter  />
              Twitter
            </a>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default IndexPage;
