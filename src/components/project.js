import React from "react"
import Image from "../components/image"
import Arrow from "../components/svgs/arrow"

const Project = (props) => {
  const { title, description, link, gif, src, alt } = props;
  return (
    <div className={`project ${link ? "-has-link" : ""}`}>
      <a href={link} target="_blank">
        {gif && <img src={src} alt={alt} className="gif" />}
        {!gif && <Image {...props} />}
        <div className="project__info">
          <div className="project__title-wrap">
            <div className="project__title">{title}</div>
            <div className="project__shadow">{title}</div>
          </div>
          <div className="project__description">{description}</div>
          {link &&
          <>
            <svg
              className="project__corner"
              viewBox="0 0 540 270"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="triangle" transform="translate(-170.000000, -1404.000000)">
                <g transform="translate(170.000000, 1134.000000)">
                  <polygon points="540 270 0 540 540 540" />
                </g>
              </g>
            </svg>
            <Arrow />
            </>
          }
        </div>
      </a>
    </div>
  )
}

export default Project;

