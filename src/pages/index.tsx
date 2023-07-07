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
          Frontend Engineer / Design Technologist
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
            <li>Currently driving media experiences & core libraries @ <a href="https://jwplayer.com/"target="_blank" rel="noopener noreferrer">JW Player</a></li>
            <li>6+ years of experience building <a target="_blank" rel="noopener noreferrer" href="https://dashboard.jwplayer.com">enterprise products</a> and internal tools</li>
            <li>
              Specialist in React, Typescript, CSS, <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90">design systems</a> and <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe">UI component libraries</a>
            </li>
            <li>Detail-oriented advocate for purposeful and accessible design</li>
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
            <li>No CS degree here (the horror!) I have a BA in journalism and switched careers. Ask me about it!</li>
            <li>Roots in the Bay Area and San Diego (though NY has been home for 10 years)</li>
            <li>Big fan of sci-fi, traveling, music festivals, and my <a href="https://www.instagram.com/spicymargbk/" target="_blank" rel="noopener nooreferrer">red golden retriever</a></li>
          </ul>
        </div>
      </section>

      <div className="contact">
        <a href="https://linkedin.com/in/kimhart1" target="_blank" rel="noopener nooreferrer">get in touch <Plane/></a>
      </div>

      <section className="work">
        <h3>Some Pretty Stuff</h3>
        <div className="projects">
          <div className="project">
            <StaticImage 
              src="../images/product-shots/media.png" 
              alt="Product shots of JWP dashboard media page and tracks editing tool"
              />
            <h4>Media management & tracks editing tool</h4>
            <p>Manage metadata, thumbnails, publishing schedules, audio, captions and chapter tracks for uploaded content</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/trimming-tool.png" 
              alt="Product shots of JW Dashboard in which a user is trimming a skate video and a podcast audio"
              />
            <h4>Media trimming and clipping tool</h4>
            <p>Adjust the length of media down to the millisecond with a live playback preview</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/ui-components.png" 
              alt="Examples of components like inputs, buttons, draggable episode lists, and alerts"
              />
            <h4>Web component library & docs</h4>
            <p>Framework-agnostic building blocks for JW Player's custom design system, built with Stencil & React</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/player-customization.png" 
              alt="Product shots of JW Dashboard in which user is editing logos and colors used in JW Player"
              />
            <h4>Video player branding suite</h4>
            <p>Add logos, stylize captions, modify colors, customize controls & menus for individual players</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/analytics.png" 
              alt="Analytics Overview UI showcasing graphs and ranked lists for media content"
              />
            <h4>Media analytics & trends overview</h4>
            <p>Compare plays, completes, and ad impressions over time across top locations & devices</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/scout.png" 
              alt="Scout highlighting elements with test IDs in the browser"
              />
            <h4>Scout Chrome extension for fast QA</h4>
            <p>Quickly identify testable elements and their targetable IDs on any web page</p>
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/music.png" 
              alt="Custom music player UI showing 'currently playing' and playlist options"
              />
            <h4>Custom music app powered by Spotify</h4>
            <p>Mobile/tablet-friendly UI for controling music across shared office space</p>
          </div>
        </div>
      </section>
      <footer>
         <a href="https://linkedin.com/in/kimhart1" target="_blank" rel="noopener nooreferrer"><h2>Learn More / Say Hi</h2></a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kim Hart | Frontend Engineer</title>
