import React, { useState } from "react"
import useDarkMode from "use-dark-mode"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import mirrorball from '../images/mirrorball.gif'

const IndexPage = () => {
  
  const darkMode = useDarkMode();
  const [headerHoverColor, setHeaderHoverColor ] = useState('blue');

  const skills = 'typescript . css . design systems . web components . javascript . react . core libraries . ux/ui . stencil . storybook . figma . jira . scss . less . ';

  const renderNeon = () => {
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
      <SEO title="Kim Hart | Frontend Engineer" />
      <div className="page page--home">
        <div className="hero">
          <div className="theme-toggle">
            <label>
              <input type="checkbox" onChange={() => darkMode.toggle()} checked={!darkMode.value} />
              <span className="slider">
                {darkMode.value ? 'p.m.' : 'a.m.'}
              </span>
            </label>
          </div>
            <div className="title">
              {darkMode.value ? (
                <div className="dark-hero">
                  <h1>{renderNeon()}</h1>
                  <div className="signs">
                    <h2> 
                      <div>
                        front-end engineer
                      </div>
                      <div>
                        design technologist
                      </div>
                    </h2>
                    <div className="plus">+</div>
                    <h2> 
                      <div>
                        california roots
                      </div>
                      <div>
                        based in brooklyn 
                      </div>
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="light-hero">
                  <h1 className={headerHoverColor}>kim hart</h1>
                  <div className="perspective-text">
                    <div 
                      className="perspective-line"
                      onMouseEnter={() => setHeaderHoverColor('green')}
                      onMouseLeave={() => setHeaderHoverColor(undefined)}
                      >
                      <p></p>
                      <p>frontend engineer</p>
                    </div>
                    <div 
                      className="perspective-line"
                      onMouseEnter={() => setHeaderHoverColor('blue')}
                      onMouseLeave={() => setHeaderHoverColor(undefined)}>
                      <p>frontend engineer</p>
                      <p>design technologist</p>
                    </div>
                    <div
                      className="perspective-line"
                      onMouseEnter={() => setHeaderHoverColor('pink')}
                      onMouseLeave={() => setHeaderHoverColor(undefined)}>
                      <p>design technologist</p>
                      <p>california roots</p>
                    </div>
                    <div 
                      className="perspective-line"
                      onMouseEnter={() => setHeaderHoverColor('red')}
                      onMouseLeave={() => setHeaderHoverColor(undefined)}>
                      <p>California roots</p>
                      <p>based in brooklyn</p>
                    </div>
                    <div 
                      className="perspective-line"
                      onMouseEnter={() => setHeaderHoverColor('blue')}
                      onMouseLeave={() => setHeaderHoverColor(undefined)}
                      >
                      <p>based in brooklyn</p>
                      <p>glad you're here</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="about">

            </div>
            {/* <div className="headshot">
              <Image src="kim-white.png" alt="Headshot of Kim" />
            </div> */}
        </div>
  
        <div className="about">
      
          
          <div className="product-shots">
            <Image src="product-shots/trimming-tool.png" alt="3 product shots of a media trimming tool featuring a video of a skateboarder in Venice Beach, an audio file of a podcast." />

            <Image src="product-shots/player-customization.png" alt="2 product shots of a video player customization suite that allows users to adjust colors, caption styles, menus and logos in the JW Player" />
          
            <Image src="product-shots/ui-components.png" alt="Collage of screenshots of web components (form inputs, draggable lists, thumbnails, buttons, alerts, etc)" />

            <Image src="product-shots/scout.png" alt="Collage of screenshots of chrome extension that finds specific data-test attributes on a web page and highlights them" />

            <Image src="product-shots/jw-music.png" alt="Collage of screenshots of custom music player that used company spotify account and APIs to render saved playlists and play music in the office" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
