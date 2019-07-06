import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Nav from "../components/nav"
import Project from "../components/project"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const renderProjects = props => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              src
              alt
              title
              gif
              description
              link
            }
          }
        }
      }
    `}
    render={data =>
      data.allProjectsJson.edges.map((project, i) => (
        <Project key={i} {...project.node} />
      ))
    }
  />
);

export default class IndexPage extends React.Component {

  state = { isHidden: true };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const hero = document.querySelector('.hero');
    if (hero.getBoundingClientRect().bottom <= 20) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  };

  render() { 
    return (
      <Layout>
        <SEO title="Welcome" />
        <div className={`page home`}>
          <Hero />
          <Nav {...this.state} />
          <div id="projects" className="home__projects">
            <div className="home__project tools">
              <h4>Tools & tech I use regularly:</h4>
              <p>React (JS/Typescript), Less/Sass, Storybook, Webpack, Node/Express, Grunt, Docker, JIRA, Jenkins, Sketch, Zeplin</p>
              <div className="home__underline" />
            </div>
            {renderProjects()}
          </div>
        </div>
      </Layout>
    )
  }
}
