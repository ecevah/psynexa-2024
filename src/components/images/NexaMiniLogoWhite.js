import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SvgNexaMiniLogoWhite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    viewBox="0 0 25 31"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.02 25.16v3.452c-.312 1.897-5.312 1.803-5.52 0V16.225c0-2.42 3.23-4.015 5.52-1.783l3.647 4.712 3.646 4.786c2.604 3.942 7.187 2.534 7.187-.375V12.378c0-3.17-7.708-3.17-7.708 0v4.504"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={0.8}
      d="M14.833 4c1.334.556 4.334 1.133 7-1"
    />
    <Circle cx={18.833} cy={4.333} r={0.6} stroke="#fff" strokeWidth={0.8} />
    <Circle cx={18.5} cy={4} r={3.6} stroke="#fff" strokeWidth={0.8} />
  </Svg>
);
export default SvgNexaMiniLogoWhite;
