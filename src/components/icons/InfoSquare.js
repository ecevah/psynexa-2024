import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfoSquare = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.334.75H5.665C2.644.75.75 2.89.75 5.916v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V5.916C19.25 2.89 17.364.75 14.334.75"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.995 14v-4"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.99 6.204H10"
    />
  </Svg>
);
export default SvgInfoSquare;
