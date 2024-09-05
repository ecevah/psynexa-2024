import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SvgNexaMiniLogoBlue = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={160}
    fill="none"
    viewBox="0 0 107 154"
    {...props}
  >
    <Path
      stroke="#0A6EBD"
      strokeLinecap="round"
      strokeWidth={8}
      d="M32.57 122.067v17.071c-1.39 9.38-23.643 8.916-24.57 0V77.883c0-11.965 14.372-19.854 24.57-8.816l16.227 23.301 16.226 23.666c11.59 19.49 31.988 12.53 31.988-1.856v-55.32c0-15.679-34.306-15.679-34.306 0v22.274"
    />
    <Circle cx={80.198} cy={21.352} r={12.852} fill="#0A6EBD" stroke="#fff" />
    <Path
      stroke="#F5F5F7"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M67.835 21.155c4.427 1.813 14.388 3.7 23.242-3.265"
    />
    <Circle cx={80.939} cy={22.093} r={3.214} fill="#fff" />
    <Circle cx={80.198} cy={21.352} r={12.852} stroke="#F5F5F7" />
  </Svg>
);
export default SvgNexaMiniLogoBlue;
