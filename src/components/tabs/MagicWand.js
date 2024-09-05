import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgMagicWand = ({ color, props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <G clipPath="url(#magic-wand_svg__a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        d="M12.819 12.431 1.607 23.643M22.42 3.706l-1.44 4.251a.7.7 0 0 0 0 .634l2.691 3.6a.685.685 0 0 1-.566 1.098h-4.491a.74.74 0 0 0-.566.291l-2.503 3.6a.685.685 0 0 1-1.217-.189l-1.337-4.285a.65.65 0 0 0-.446-.446L8.26 10.923a.686.686 0 0 1-.189-1.217l3.669-2.589a.74.74 0 0 0 .291-.566V2.06a.686.686 0 0 1 1.029-.566l3.6 2.692a.7.7 0 0 0 .634.085l4.251-1.44a.686.686 0 0 1 .875.875"
      />
    </G>
    <Defs>
      <ClipPath id="magic-wand_svg__a">
        <Path fill="#fff" d="M.75.5h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMagicWand;
