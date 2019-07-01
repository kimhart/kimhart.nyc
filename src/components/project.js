import React from "react"
import Image from "../components/image"

export default class Project extends React.Component {

  state = { hover: false }

  hoverOn = () => this.setState({ hover: true });

  hoverOff = () => this.setState({ hover: false });

  render() {
    const { hover } = this.state;
    const { title, description } = this.props;
    console.log(description)

    return (
      <div className={`project${hover ? ' -hover' : ''}`} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <Image {...this.props} />
        { hover && 
          <div className="project__info">
            <div className="project__title">{title}</div>
            <div className="project__description">{description}</div>
          </div>
        }
      </div>
    )
  }
}
