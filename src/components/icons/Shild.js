import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShild = (props) => (
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
      d="M11.985 21.606s7.672-2.323 7.672-8.727c0-6.405.278-6.905-.337-7.521-.616-.616-6.33-2.608-7.335-2.608-1.006 0-6.72 1.992-7.334 2.608-.616.616-.338 1.116-.338 7.521s7.672 8.727 7.672 8.727"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.386 11.875 1.892 1.895 3.898-3.9"
    />
  </Svg>
);
export default SvgShild;
