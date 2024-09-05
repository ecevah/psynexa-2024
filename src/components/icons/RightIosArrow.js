import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRightIosArrow = ({
  props,
  width = 24,
  height = 24,
  color = "#000",
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 5 7 7-7 7"
    />
  </Svg>
);
export default SvgRightIosArrow;
