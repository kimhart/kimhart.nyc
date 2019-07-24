import React from "react"

const Sunset = (props) => {
  const { size } = props;

  const handleClick = () => props.onClick && props.onClick('dark');
  
  return (
    <div className={`theme-toggle theme-toggle--sunset -size-${size}`} onClick={handleClick}>
      <svg
        className="icon icon--sunset"
        width="100%"
        viewBox="0 0 52 43"
      >
        <g
          id="D2:-Sun-Up-Sun-Down"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="Sun-Up"
            className="yellow"
            transform="translate(-756.000000, -174.000000)"
            strokeWidth="2"
          >
            <g id="Group-4" transform="translate(633.000000, 169.000000)">
              <g id="Group-15" transform="translate(124.000000, 6.000000)">
                <g id="Group-14">
                  <path
                    d="M44.1925697,18.8371579 C44.1925697,8.80768421 36.0805697,0.677684211 26.0697818,0.677684211 C16.0605697,0.677684211 7.94699394,8.80768421 7.94699394,18.8371579"
                    id="Stroke-10"
                  />
                  <path
                    d="M0.31449697,28.4210526 L49.7412848,28.4210526"
                    id="Stroke-12"
                    className="white"
                  />
                  <path
                    d="M7.314497,34.4210526 L44.741285,34.4210526"
                    id="Stroke-12"
                    className="yellow"
                  />
                  <path
                    d="M13.314497,40.4210526 L37.741285,40.4210526"
                    id="Stroke-12"
                    className="yellow"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Sunset;
