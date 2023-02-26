import React from "react"
import useDarkMode from "use-dark-mode"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import mirrorball from '../images/mirrorball.gif'

const IndexPage = () => {
  
  const darkMode = useDarkMode();

  const renderName = () => {
    const arr = 'kim hart'.split('');
    return arr.map((letter) => {
      return <span key={letter} className="neon-letter">{letter}</span>
    }); 
  }

  console.log(darkMode.value)
  return (
    <Layout>
      <SEO title="Kim Hart | Frontend Engineer" />
      <div className="page page--home">
        <div className="hero">
          {/* <div className="gradient"/> */}

          <div className="toggle-switch">
            <label>
              <input type="checkbox" onChange={() => darkMode.toggle()} checked={!!darkMode.value} />
              <span className="slider" />
            </label>
          </div>

          <div className="content">
            <div className="title">
              <h1>{renderName()}</h1>
              <h3> 
                <span>
                  front-end engineer
                  <span className="bullet">&nbsp;&bull;&nbsp;</span>
                  design technologist
                  <span className="bullet">&nbsp;&bull;&nbsp;</span>
                  based in brooklyn
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div style={{maxWidth: '400px'}}>
          <Image src="kim.jpeg" alt="Headshot of Kim" />
        </div>
        
        <div className="product-shots">
          <Image src="product-shots/trimming-tool.png" alt="3 product shots of a media trimming tool featuring a video of a skateboarder in Venice Beach, an audio file of a podcast." />

          <Image src="product-shots/player-customization.png" alt="2 product shots of a video player customization suite that allows users to adjust colors, caption styles, menus and logos in the JW Player" />
         
          <Image src="product-shots/ui-components.png" alt="Collage of screenshots of web components (form inputs, draggable lists, thumbnails, buttons, alerts, etc)" />

          <Image src="product-shots/scout.png" alt="Collage of screenshots of chrome extension that finds specific data-test attributes on a web page and highlights them" />

          <Image src="product-shots/jw-music.png" alt="Collage of screenshots of custom music player that used company spotify account and APIs to render saved playlists and play music in the office" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
