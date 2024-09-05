import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCompass = ({ color, props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 27"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.25 25.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.326 10.485 17.25 9.5l-.985 4.924a2.67 2.67 0 0 1-2.091 2.092L9.25 17.5l.985-4.924a2.67 2.67 0 0 1 2.091-2.09"
    />
  </Svg>
);
export default SvgCompass;
