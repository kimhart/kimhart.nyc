import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const mainStyles = {
  fontFamily: 'var(--font-regular)',
  padding: 0,
  margin: 0
}

const heroStyles = {
  padding: 'var(--page-padding)',
  background: 'var(--color-beige)',
  // backgroundImage: 'var(--gradient-sky)',
  height: '100vh',
  // alignItems: 'center',
  // justifyContent: 'center',
}

const headerStyles = {
  color: 'var(--color-black)',
  // textShadow: '-4px 4px 0 var(--color-white)',
  letterSpacing: 2,
  // webkitTextStroke: '2px black',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <section id="hero" style={heroStyles}>
        <h1 style={headerStyles}>Kim<br/> Hart</h1>
        <h2>
          frontend engineer
          <span>&bull;</span> 
          design technologist
          <span>&bull;</span>
          brooklyn, ny
        </h2>
      </section>
      
      <section id="about">
        <div id="headshot">
          <StaticImage 
            src="../images/kim-headshot.png" 
            alt="Headshot of Kim"
            width={200}
          />
        </div>
        <ul>
          <li>
            Team lead with 6+ years of experience building <a target="_blank" rel="noopener noreferrer" href="https://dashboard.jwplayer.com">enterprise products</a> & internal tools
          </li>
          <li>
            Specialist in React & Typescript, <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90">design systems</a>, and <a target="_blank" rel="noopener noreferrer" href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe">web component libraries</a>
          </li>
          <li>
            Creative thinker with a journalism degree and a passion for art & design
          </li>
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
          <li>Probably cuddling my <a href="https://www.instagram.com/spicymargbk/" target="_blank" rel="noopener nooreferrer">red golden retriever</a> right now</li>
        </ul>
      </section>
      <section>
        <StaticImage 
          src="../images/product-shots/trimming-tool.png" 
          alt="Video trimming & clipping tool"
        />
        <StaticImage 
          src="../images/product-shots/ui-components.png" 
          alt="Custom web component library"
        />
        <StaticImage 
          src="../images/product-shots/player-customization.png" 
          alt="Video player customization suite"
        />
        <StaticImage 
          src="../images/product-shots/scout.png" 
          alt="Scout Chrome extension for fast & easy QA testing"
        />
         <StaticImage 
          src="../images/product-shots/jw-music.png" 
          alt="Custom music app powered by Spotify"
        />
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kim Hart | Frontend Engineer</title>
