import React from "react"

export const KeywordsCircle = () => {
    return (
    // <div id="rotating-circle">
        <svg id="rotating-circle" height="1100px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
            <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <circle cx="150" cy="100" r="75" fill="none"/>
            <g>
                <use xlinkHref="#circlePath" fill="none"/>
                <text fill="#202C39">
                    <textPath xlinkHref="#circlePath">react &bull; typescript &bull; css &bull; design systems &bull; a11y &bull; web components &bull; figma &bull; ux/ui &bull;</textPath>
                </text>
            </g>
        </svg>
    // </div>
    )
}