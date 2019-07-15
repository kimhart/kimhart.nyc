import React from "react"
import Image from "../components/image"

export default class Project extends React.Component {

  render() {
    const { title, description, link, gif, src, alt } = this.props;
    return (
      <div className={`project`}>
        <a href={link} target="_blank">
          {gif && <img src={`${src}`} alt={alt} className="gif"/>}
          {!gif && <Image {...this.props} />}
          <div className="project__info">
            <div className="project__title">{title}</div>
            <div className="project__description">{description}</div>
          </div>
        </a>
      </div>
    )
  }
}
