import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotSee = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.76 14.867a3.12 3.12 0 0 1-.924-2.23A3.16 3.16 0 0 1 12 9.473c.867 0 1.665.35 2.23.925M15.105 13.199a3.16 3.16 0 0 1-2.537 2.542"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.655 17.972c-1.587-1.246-2.931-3.066-3.905-5.335.984-2.279 2.337-4.109 3.934-5.365C8.27 6.016 10.102 5.334 12 5.334c1.909 0 3.739.692 5.336 1.957M19.448 9.49a15.4 15.4 0 0 1 1.802 3.147c-1.967 4.557-5.443 7.302-9.25 7.302-.863 0-1.714-.14-2.532-.413M19.887 4.75 4.113 20.523"
    />
  </Svg>
);
export default SvgNotSee;
