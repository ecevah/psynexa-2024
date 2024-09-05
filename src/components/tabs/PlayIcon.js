import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlayIcon = ({
  props,
  color = "#fff",
  width = 37.33,
  height = 37.33,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 38 38"
    {...props}
  >
    <Path
      fill={color}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.076 7.391a.933.933 0 0 0-1.41.803v21.613a.933.933 0 0 0 1.41.802l18.236-10.806a.934.934 0 0 0 0-1.606z"
    />
  </Svg>
);
export default SvgPlayIcon;
