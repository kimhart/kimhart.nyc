import React from "react"
import Img from "gatsby-image"

import useDarkMode from "use-dark-mode"

const Hero = (props) => {



  const renderName = () => {
    const arr = 'kim hart'.split('');
    return arr.map((letter) => {
      return <span key={letter} className="neon-letter">{letter}</span>
    }); 
  }

  return (
    <div className="hero">
      <div className="gradient"/>
      <div className="content">
        <div className="info">
          <h2>
            <span>
              front-end engineer
              <span className="bullet">&nbsp;&bull;&nbsp;</span>
              design technologist 
              <span className="bullet">&nbsp;&bull;&nbsp;</span>
              brooklyn, ny
            </span>
          </h2>
          <h1>{renderName()}</h1>
          <Img fluid={props.data.file.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "./kimhart.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`


export default Hero;