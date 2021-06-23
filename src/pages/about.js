import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Github from "../components/svgs/github"
import Twitter from "../components/svgs/twitter"
import LinkedIn from "../components/svgs/linkedin"
import DevTo from "../components/svgs/dev"
import Img from "gatsby-image"
import useDarkMode from "use-dark-mode"
import { graphql } from 'gatsby'

const About = (props) => {
  const [isTransparent, setIsTransparent] = useState(true);
  const darkMode = useDarkMode().value;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () => {
    const main = document.querySelector(".page--about__main");
    main && (main.getBoundingClientRect().top <= 70) ?  setIsTransparent(false) : setIsTransparent(true);
  };

  return (
    <Layout>
      <SEO title="About" />
      <div className="page page--about">
        <div className="page--about__hero">
          <div className="page--about__intro">
            <div className="page--about__text">
              <h1>
                <span>Hey, I'm Kim.</span><br/>
                I'm a Brooklyn-based dev with roots in California.
              </h1>
              <div className="page--about__underline" />
              <h2>
                While I'm down to learn pretty much anything, I'm happiest
                working at the intersection of design and engineering, where I
                can focus on creative problem solving and elegant UI.
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
                I'm currently building solutions for complex workflows in the JW Dashboard and assisting in the development of our APIs & a custom web component library. 
              </p>
              <p>
                I earned my BA in journalism and worked in marketing before learning to code. Curiosity about tech
                & design lead me to General Assembly's{" "}
                <a href="https://dev.to/kim_hart/5-lessons-my-bootcamp-didnt-teach-me">
                  web development bootcamp
                </a>
                , where I learned enough to hustle my way into a career that I love.
              </p>
              <p>
                I think we should always be working toward making the scene around us a more diverse and inclusive space, and I've really enjoyed participating in mentorship programs and events through {" "}
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
                .
              </p>
              <p>
                When I'm not on a computer, you can probably find me at a
                concert or music festival, traveling, or hanging out somewhere in Brooklyn.
              </p>
            </div>
            <div className="page--about__panel">
              <h3>Blogs</h3>
              <div>
                <a href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-i-a805d81bd90" target="_blank" rel="noopener noreferrer">Translating Design Principles into Scalable Code</a>
              </div>
              <div>
                <a href="https://medium.com/jw-player-engineering/a-real-life-roadmap-for-building-a-design-system-pt-ii-c4c2490875fe" target="_blank" rel="noopener noreferrer">Creating a Custom Web Component Library</a>
              </div>
              <div>
                <a href="https://medium.com/jw-player-engineering/streamdivning-the-design-x-engineering-partnership-9d2328cfff4f" target="_blank" rel="noopener noreferrer">Streamlining the Design x Engineering Partnership</a>
              </div>
              <h3>Say Hello</h3>
              <div className={`page--about__social`}>
                <a href="https://github.com/kimhart" target="_blank">
                  <Github fill={darkMode ? "#fff" : "#000"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kimhart1/"
                  target="_blank"
                >
                  <LinkedIn fill={darkMode ? "#fff" : "#000"} />
                </a>
                <a href="https://twitter.com/kim_hart" target="_blank">
                  <Twitter fill={darkMode ? "#fff" : "#000"} />
                </a>
                <a href="https://dev.to/kim_hart" target="_blank">
                  <DevTo fill={darkMode ? "#fff" : "#000"} />
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
