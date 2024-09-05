import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKey = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.334 2.75H7.665c-3.021 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.689 12a1.852 1.852 0 1 1-1.852-1.852h.003A1.85 1.85 0 0 1 10.689 12"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.692 12h6.318v1.852M14.182 13.852V12"
    />
  </Svg>
);
export default SvgKey;
