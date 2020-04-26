import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Github from "../components/svgs/github"
import Twitter from "../components/svgs/twitter"
import LinkedIn from "../components/svgs/linkedin"
import Img from "gatsby-image"

const About = (props) => {
  const [isTransparent, setIsTransparent] = useState(true);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () => {
    const main = document.querySelector(".page--about__main");
    main&& (main.getBoundingClientRect().top <= 70) ?  setIsTransparent(false) : setIsTransparent(true);
  };

  return (
    <Layout>
      <SEO title="About" />
      <div className="page page--about">
        <div className="page--about__hero">
          <div className="page--about__intro">
            <div className="page--about__text">
              <h1>
                <span>Hey there.</span>
                I'm a Brooklyn-based dev with roots in California.
              </h1>
              <div className="page--about__underline" />
              <h2>
                While I'm down to learn pretty much anything, I'm happiest
                working at the intersection of design and engineering, where I
                can focus on creative problem-solving and elegant UI.
              </h2>
            </div>
            <div className="page--about__photo">
              <Img fluid={props.data.file.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <Nav isTransparent={isTransparent} />
        <div className="page--about__main">
          <div className="page--about__wrap">
            <div className="page--about__bio">
              <h1>About Me</h1>
              <p>
                I'm currently tackling design system architecture and
                refactoring a legacy codebase into a React component library.
                I've also built a variety of experimental POCs, prototyping
                tools, and the JW Player support site.
              </p>
              <p>
                I earned my BA in journalism and worked in the digital
                marketing space before learning to code. Curiosity about tech
                & design lead me to General Assembly's{" "}
                <a href="https://dev.to/kim_hart/5-lessons-my-bootcamp-didnt-teach-me">
                  web development bootcamp
                </a>
                , where I learned enough to hustle my way into a career that I
                love.
              </p>
              <p>
                I have a strong personal interest in D&I and have participated
                in mentorship roles, panel discussions & tutoring sessions for
                underrepresented groups through{" "}
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
                . I'm a big fan of bringing new faces, skillsets, and
                backgrounds into the industry.
              </p>
              <p>
                My most-loved side project is{" "}
                <a href="https://tally.us.com" target="_blank">
                  Tally
                </a>
                , a React web app that helps you keep track of your senators
                and house reps.
              </p>
              <p>
                When I'm not on a computer, you can probably find me at a
                concert or music festival, traveling, or hanging out somewhere in Brooklyn.
              </p>
            </div>
            <div className="page--about__panel">
              <h3>Industry Affiliations</h3>
              <div>
                <h4>#BuiltByGirls</h4>
                <span>Mentor</span>
              </div>
              <div>
                <h4>Flatiron School</h4>
                <span>Panelist</span>
                <span>Apprenticeship Mentor</span>
              </div>
              <div>
                <h4>CodeNation</h4>
                <span>Tutor</span>
              </div>
              <div>
                <h4>Uncubed NY</h4>
                <span>Panelist</span>
              </div>
              <div>
                <h4>DEV.to</h4>
                <span>Contributor</span>
              </div>
              <div>
                <h4>General Assembly</h4>
                <span>WDI Alumni</span>
              </div>
              <h3>Say Hello</h3>
              <div className="page--about__social">
                <a href="https://github.com/kimhart" target="_blank">
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/kimhart1/"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
                <a href="https://twitter.com/kim_hart" target="_blank">
                  <Twitter />
                </a>
                <a href="https://dev.to/kim_hart" target="_blank">
                  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Kim Hart's DEV Profile" height="27" width="27" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "kimhart.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default About;
