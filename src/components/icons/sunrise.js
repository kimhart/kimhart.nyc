import React from "react"
import useDarkMode from "use-dark-mode"

const Sunrise = (props) => {
  const { size } = props;
  const darkMode = useDarkMode(false);
  let color, color2, opacity;

  const handleClick = () => props.onClick && props.onClick('light');

  if (darkMode.value) {
    color = "#212229";
    color2 = "#212229";
    opacity = 0.3;
  } else {
    color = "#FFFD9A";
    color2 = "#FFFFFF";
    opacity = 1;
  }

  return (
    <div className={`theme-toggle -sunrise -size-${size}`} onClick={handleClick}>
      <svg 
        className="icon" 
        width="100%" 
        viewBox="0 0 72 48">
        <g
          id="D2:-Sun-Up-Sun-Down"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        >
          <g
            id="Sun-Up"
            transform="translate(-632.000000, -168.000000)"
            strokeWidth="2"
          >
            <g id="Group-4" transform="translate(633.000000, 169.000000)">
              <g id="Group-15">
                <g id="Group-7" stroke={color}>
                  <path
                    d="M34.9949533,0.185916667 L34.9949533,10.3319167"
                    id="Stroke-1"
                  />
                  <path
                    d="M69.9895911,35.30615 L59.8807689,35.30615"
                    id="Stroke-3"
                  />
                  <path d="M10.1088222,35.30615 L0,35.30615" id="Stroke-5" />
                </g>
                <path d="M10,11 L17,18" id="Stroke-8" stroke={color} />
                <path d="M60,11 L53,18" id="Stroke-9" stroke={color} />
                <g id="Group-14" transform="translate(9.000000, 17.000000)">
                  <path
                    d="M44.1925697,18.8371579 C44.1925697,8.80768421 36.0805697,0.677684211 26.0697818,0.677684211 C16.0605697,0.677684211 7.94699394,8.80768421 7.94699394,18.8371579"
                    id="Stroke-10"
                    stroke={color}
                  />
                  <path
                    d="M0.31449697,28.4210526 L49.7412848,28.4210526"
                    id="Stroke-12"
                    stroke={color2}
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

export default Sunrise;
