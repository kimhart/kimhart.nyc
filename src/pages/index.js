import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"
import Nav from "../components/nav"
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
            }
          }
        }
      }
    `}
    render={data =>
      data.allProjectsJson.edges.map((project, i) => (
        <div className="home__project" key={i}>
          <Image {...project.node} />
        </div>
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
    if (hero.getBoundingClientRect().bottom <= 50) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  };

  render() { 
    return (
      <Layout>
        <SEO title="Home" />
        <div className="page home">
          <Hero />
          <Nav {...this.state} />
          <div id="projects" className="home__projects">
            <div className="home__project tools">
              <h4>Tools I use regularly:</h4>
              <p>React (Javascript/Typescript), Less/Sass, Storybook, Webpack, Grunt, Docker, JIRA, Jenkins, Sketch, Zeplin, Prismic.io</p>
              <div className="home__underline" />
            </div>
            {renderProjects()}
          </div>
        </div>
      </Layout>
    )
  }
}

// export default IndexPage;
