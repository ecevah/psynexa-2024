import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgPlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <G clipPath="url(#plus-icon_svg__a)">
      <G clipPath="url(#plus-icon_svg__b)">
        <Path
          fill="#0D1717"
          d="M17.665 16.335V8.52a.667.667 0 0 0-1.33 0v7.816l-7.82-.004a.67.67 0 1 0 0 1.338l7.82-.004-.004 7.82a.666.666 0 1 0 1.329 0l.005-7.82h7.816a.667.667 0 0 0 0-1.33z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="plus-icon_svg__a">
        <Path fill="#fff" d="M.03 17 17 .03 33.97 17 17 33.97z" />
      </ClipPath>
      <ClipPath id="plus-icon_svg__b">
        <Path fill="#fff" d="M.03 17 17 .03 33.97 17 17 33.97z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPlusIcon;
