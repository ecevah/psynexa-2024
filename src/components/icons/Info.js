import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <G clipPath="url(#info_svg__a)">
      <G fill="#0D1717" clipPath="url(#info_svg__b)">
        <Path d="M12.5.833a10.667 10.667 0 1 0 0 21.334 10.667 10.667 0 0 0 0-21.334m0 20a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666" />
        <Path d="M12.693 5.447A4.92 4.92 0 0 0 8.88 7.16a.67.67 0 0 0-.214.473.613.613 0 0 0 .634.614.72.72 0 0 0 .473-.194A3.8 3.8 0 0 1 12.66 6.72c1.573 0 2.553 1.013 2.553 2.273v.034c0 1.473-1.173 2.293-3.026 2.433a.532.532 0 0 0-.507.613v1.834a.667.667 0 0 0 .667.6h.073a.667.667 0 0 0 .6-.667v-1.373c2-.28 3.62-1.334 3.62-3.52v-.034c-.02-2-1.58-3.466-3.947-3.466M12.353 17.8a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667" />
      </G>
    </G>
    <Defs>
      <ClipPath id="info_svg__a">
        <Path fill="#fff" d="M.5 0h24v24H.5z" />
      </ClipPath>
      <ClipPath id="info_svg__b">
        <Path fill="#fff" d="M.5-.5h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgInfo;
