import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgPapaerclip = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#papaerclip_svg__a)">
      <Path
        stroke="#0B1215"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.172 7-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656l-6.415 6.585a6 6 0 0 0 8.486 8.486L20.5 13"
      />
    </G>
    <Defs>
      <ClipPath id="papaerclip_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPapaerclip;
