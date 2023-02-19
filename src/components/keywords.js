import React from "react"

export const KeywordsCircle = () => {
    return (
    // <div id="rotating-circle">
        <svg id="rotating-circle" x="0px" y="0px" height="800px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
            <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <circle cx="150" cy="100" r="75" fill="none"/>
            <g>
                <use xlinkHref="#circlePath" fill="none"/>
                <text fill="#202C39">
                    <textPath xlinkHref="#circlePath">react . typescript . design systems . a11y . web components</textPath>
                </text>
            </g>
        </svg>
    // </div>
    )
}