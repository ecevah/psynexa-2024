import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgUncertain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={91}
    fill="none"
    viewBox="0 0 100 91"
    {...props}
  >
    <G clipPath="url(#uncertain_svg__a)">
      <Path fill="#FAFAFA" d="M100 91V61H70c16.569 0 30 13.432 30 30" />
    </G>
    <G clipPath="url(#uncertain_svg__b)">
      <Path fill="#FAFAFA" d="M30 30V0H0c16.569 0 30 13.432 30 30" />
    </G>
    <Path fill="#FAFAFA" d="M30 0h70v61H55c-13.807 0-25-11.193-25-25z" />
    <Defs>
      <ClipPath id="uncertain_svg__a">
        <Path fill="#fff" d="M100 61v30H70V61z" />
      </ClipPath>
      <ClipPath id="uncertain_svg__b">
        <Path fill="#fff" d="M30 0v30H0V0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgUncertain;
