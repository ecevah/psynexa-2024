import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.516 7.39v-.934a3.685 3.685 0 0 0-3.685-3.685H6.956a3.685 3.685 0 0 0-3.684 3.685v11.13a3.685 3.685 0 0 0 3.684 3.686h4.885a3.675 3.675 0 0 0 3.675-3.674v-.944M22.31 12.021H10.269M19.381 9.106l2.928 2.915-2.928 2.916"
    />
  </Svg>
);
export default SvgExit;
