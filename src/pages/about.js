import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Img from "gatsby-image"

const AboutPage = ({data}) => {

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () => {
    
  };

  return (
    <Layout>
      <SEO title="Bio" />
      <div className="page page--about">
        <div className="page--about__hero">
          <div className="page--about__intro">
            <div className="page--about__text">
              <h1>
                <span>Hi.</span>
                I'm a Brooklyn-based developer with roots in California.
              </h1>
              <h2>
                While I'm down to learn pretty much anything, I'm happiest
                working at the intersection of design and engineering, where I
                can focus on creative architecture and elegant UI.
              </h2>
            </div>
            <div className="page--about__photo">
              <Img fluid={data.file.childImageSharp.fluid} />
              <div className="page--about__forecast">
                <p>
                  Brooklyn: <span>65&deg; F</span>
                </p>
                <p>
                  San Francisco: <span>65&deg; F</span>
                </p>
                <p>
                  San Diego: <span>65&deg; F</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Nav isTransparent={true} />
        <div className="page--about__main">
          <div className="page--about__panel">
            <h3>Industry Affiliations</h3>
            <h4>#BuiltByGirls</h4> <strong>|</strong> <span>Mentor</span>
            <br/>
            <h4>Flatiron School</h4> <strong>|</strong> <span>Panelist, Apprenticeship Mentor</span>
            <br />
            <h4>CodeNation</h4> <strong>|</strong> <span>Tutor</span>
            <br />
            <h4>Uncubed NY</h4> <strong>|</strong> <span>Panelist</span>
            <br />
            <h4>DEV.to</h4> <strong>|</strong> <span>Contributor</span>
            <br />
            <h4>General Assembly</h4> <strong>|</strong> <span>WDI Alumni</span>
          </div>
          <div className="page--about__overlay" />
          <div className="page--about__bio">
            <p>
              I'm currently tackling design system architecture and refactoring a legacy Angular codebase into a React component library at JW Player.
            </p>

            <p>
              I earned my BA in journalism and worked in the digital marketing space before learning to code. I'm a firm believer that some of the most creative engineers come from non-traditional backgrounds, and I'm always looking for ways to bring more diverse minds into tech through D&I initiatives.
            </p>

            <p>
              When I'm not on a computer, you can probably find me at a music festival, traveling, or seeking out new craft breweries to try.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "kim.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default AboutPage;
