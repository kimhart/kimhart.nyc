import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Plane } from "../components/svg/plane"
import { SEO } from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="hero">
        <h1>
          hey there, i'm
          <div>Kim Hart</div>
        </h1>
        <a href="https://linkedin.com/in/kimhart1" target="_blank" rel="noopener nooreferrer">
          <h2>
            Frontend Engineer | Brooklyn, NY
          </h2>
        </a>
      </section>

      <section className="about">
        <h3>The Basics</h3>
        <div className="bio">
          <ul>
            <li><strong>Team lead</strong> with 7+ years of experience building <a target="_blank" rel="noopener noreferrer" href="https://dashboard.jwplayer.com">enterprise products</a> and design systems</li>
            <li>Currently owning media and live-streaming workflows @ <a href="https://jwplayer.com/"target="_blank" rel="noopener noreferrer">JW Player</a></li>
            <li>Former mentor & speaker for BuiltByGirls, Uncubed, and CodeNation</li>
          </ul>
        </div>
      </section>
      <section className="skills">
        <span>React</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>HTML5</span>
        <span>a11y</span>
        <span>Stencil.js</span>
        <span>Storybook</span>
        <span>Git</span>
        <span>Jest</span>
        <span>Vite</span>
        <span>Figma</span>
        <span>Docker</span>
        <span>Jira</span>
        <span>Buildkite</span>
        <span>Jenkins</span>
      </section>

      <section className="work">
        <h3>Recent Work</h3>
        <div className="projects">
          <div className="project">
            <h4>Advanced Media Management & Editing Tools</h4>
            <p>Enable customers to monetize content and grow audiences with highly customizable video delivery</p>
            <StaticImage 
              src="../images/product-shots/media.png" 
              alt="Product shots of JWP dashboard media page and tracks editing tool"
            />
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/trimming-tool.png" 
              alt="Product shots of JW Dashboard in which a user is trimming a skate video and a podcast audio"
            />
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/player-customization.png" 
              alt="Product shots of JW Dashboard in which user is editing logos and colors used in JW Player"
              />
          </div>
          <div className="project">
            <StaticImage 
              src="../images/product-shots/analytics.png" 
              alt="Analytics Overview UI showcasing graphs and ranked lists for media content"
              />
          </div>
          <div className="project">
            <h4>JWP Design System</h4>
            <p>Web component library with over 70 unique components, supporting lean UI development for frontend teams</p>
            <StaticImage 
              src="../images/product-shots/ui-components.png" 
              alt="Examples of components like inputs, buttons, draggable episode lists, and alerts"
              />
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

export const Head: HeadFC = () => <SEO />
