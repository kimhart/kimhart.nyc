import React from "react"

const IconLocation = (props) => {
  const fill = props.fill || "#FFFFFF";

  return (
    <svg className="icon icon--location" width="21px" height="28px" viewBox="0 0 21 28">
      <g id="D2:-Sun-Up-Sun-Down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Sun-Down" transform="translate(-62.000000, -53.000000)" fill={fill}>
          <g id="Group" transform="translate(9.000000, 53.000000)">
            <path d="M63.4507042,6.09122807 C65.915493,6.09122807 67.8873239,8.05614035 67.8873239,10.4140351 C67.8873239,12.8701754 65.915493,14.8350877 63.4507042,14.8350877 C61.084507,14.8350877 59.1126761,12.8701754 59.1126761,10.4140351 C59.1126761,8.05614035 61.084507,6.09122807 63.4507042,6.09122807 M63.4507042,28 C67.0985915,23.8736842 74,16.1122807 74,10.4140351 C74,4.71578947 69.2676056,0 63.4507042,0 C57.7323944,0 53,4.71578947 53,10.4140351 C53,16.1122807 59.9014085,23.8736842 63.4507042,28" id="Fill-1"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default IconLocation;