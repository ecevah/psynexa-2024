import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSee = (props) => (
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
      d="M15.162 12.053a3.162 3.162 0 1 1-6.324-.001 3.162 3.162 0 0 1 6.324.001"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 19.355c3.808 0 7.291-2.738 9.252-7.302-1.961-4.564-5.444-7.302-9.252-7.302h.004c-3.808 0-7.291 2.738-9.252 7.302 1.961 4.564 5.444 7.302 9.252 7.302z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSee;
