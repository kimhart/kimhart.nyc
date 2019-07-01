import React from "react"
import Image from "../components/image"

export default class Project extends React.Component {

  render() {
    const { title, description } = this.props;

    return (
      <div className={`project`}>
        <Image {...this.props} />
        <div className="project__info">
          <div className="project__title">{title}</div>
          <div className="project__description">{description}</div>
        </div>
      </div>
    )
  }
}
