import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0D1717"
      d="M10.5 5.625a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 6.375a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </Svg>
);
export default SvgMore;
