import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 21 22"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.032 11.472c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-1.993 6.144 1.762 3.672 2.074 3.284c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCall;
