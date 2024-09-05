import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSearch = (props) => (
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
      d="M11.767 20.755a8.989 8.989 0 1 0 0-17.977 8.989 8.989 0 0 0 0 17.977M18.018 18.485 21.542 22"
    />
  </Svg>
);
export default SvgSearch;
