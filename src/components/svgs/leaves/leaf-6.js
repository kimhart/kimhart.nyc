import React from "react"
import GreenGradient from "./gradient-green";

const Leaf6 = (props) => {
  const rotate = props.rotate || 0;
  const width = props.width || 1000;

  return (
    <svg className="leaf" style={{transform: `rotate(${rotate}deg)` }} width={width} viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
    <GreenGradient />
    <path fill={`url('#greenGradient')`} d="M769.432,540.928c-11.868,17.579-33.287,45.089-64.682,69.594c-51.044,39.841-119.102,15.843-151.584,20.909
      c-32.483,5.066-54.137,33.603-53.152,0c0.984-33.604,37.684-39.095,94.915-32.908c57.231,6.187,106.728-9.281,150.037-66.938
      c0.075-0.1,0.15-0.2,0.225-0.299c11.197-14.956,14.667-34.304,9.91-52.371c-2.569-9.758-5.293-19.591-8.162-29.493
      c-11.934-41.19-24.56-80.975-36.959-117.928c-13.107,17.865-33.559,24.352-59.367,44.295
      c-34.029,26.295-26.295,38.669-44.856,51.044c-18.561,12.374-27.842,1.547-18.561-26.546c9.281-28.092,44.857-19.857,77.339-69.354
      c13.714-20.898,20.244-43.898,23.23-63.519c-33.051-92.385-59.837-155.093-59.837-155.093s-79.73,34.692-164.226,103.295
      c-20.054,16.282-31.451,40.939-30.432,66.751l0.022,0.564c2.32,55.735,21.655,69.656,10.054,95.951
      c-11.601,26.295-26.295,0.206-23.202-22.325c3.094-22.532,6.96-22.532,0.774-50.374c-3.889-17.498-6.546-32.245-6.455-46.74
      c-24.669,24.151-48.496,51.203-69.521,81.237c-7.341,10.486-14.468,21.192-21.36,32.063c-13.572,21.412-18.824,47.067-14.891,72.111
      l0.085,0.538c8.507,53.364,18.854,66,37.122,88.166c14.466,17.553,22.892,23.32,26.295,38.669
      c3.186,14.366-16.251,14.172-31.709,1.547c-13.148-10.737-17.603-33.564-30.751-52.125c-11.015-15.549-23.698-37.538-23.229-84.334
      c-27.485,53.224-48.313,108.091-59.024,159.734c-5.506,26.548,2.568,54.087,21.291,73.698l0.454,0.475
      c37.123,38.669,46.403,36.769,71.152,45.453c24.749,8.684,30.162,21.832,17.788,34.206c-12.374,12.374-20.108-1.547-36.349-16.241
      c-16.241-14.694-32.064-15.481-57.231-39.443c-10.665-10.156-18.932-23.496-24.948-35.514c-1.717,49.72,8.85,93.825,35.63,126.847
      c42.105,51.92,96.365,57.718,127.656,55.886c-4.699-60.671-1.409-121.541,8.116-181.616
      c21.071-132.902,73.331-257.54,134.445-376.494c1.604-3.121,6.019-0.379,4.633,2.708
      c-52.574,117.099-95.239,240.279-112.417,367.897c-8.319,61.799-10.383,124.847-4.918,186.998c0.008,0.092,0.021,0.184,0.029,0.277
      c23.689,17.013,136.685,88.522,264.492,7.851c23.351-14.739,42.082-31.806,56.889-50.847
      c-44.771,13.464-145.467,8.151-182.572,12.789c-37.122,4.641-43.31,9.281-58.778,0c-15.468-9.281-6.187-32.482,12.374-35.913
      c18.561-3.431,89.713,29.726,191.8,8.488c0.254-0.053,0.507-0.105,0.759-0.158c39.794-8.332,70.254-40.241,77.662-80.216
      C784.502,655.269,780.879,600.019,769.432,540.928z"/>
    </svg>
  )
}

export default Leaf6;
