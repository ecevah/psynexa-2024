import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgTriangle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <G clipPath="url(#triangle_svg__a)">
      <Path fill="#FAFAFA" d="M0 0v30h30C13.432 30 0 16.569 0 0" />
    </G>
    <Defs>
      <ClipPath id="triangle_svg__a">
        <Path fill="#fff" d="M0 30V0h30v30z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgTriangle;
