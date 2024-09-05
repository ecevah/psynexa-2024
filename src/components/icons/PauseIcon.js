import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPauseIcon = ({ props, color = "#fff" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 38 38"
    {...props}
  >
    <Path
      fill={color}
      d="M21.776 29.553V7.777h6.221v21.776zm-12.443 0V7.777h6.221v21.776z"
    />
  </Svg>
);
export default SvgPauseIcon;
