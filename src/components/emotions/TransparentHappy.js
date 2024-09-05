import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgTransparentHappy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <G filter="url(#transparent-happy_svg__a)">
      <G clipPath="url(#transparent-happy_svg__b)">
        <Path fill="#fff" d="M38 5H6v32h32z" />
        <Path
          fill="#0B1215"
          d="M31.055 17.344a.253.253 0 0 0 .387-.212 2.129 2.129 0 1 0-4.256-.004c0 .201.22.317.387.216a3.3 3.3 0 0 1 3.475 0zM15.87 17.344a.253.253 0 0 0 .387-.212A2.129 2.129 0 1 0 12 17.128c0 .201.22.317.387.216a3.3 3.3 0 0 1 1.741-.495c.64 0 1.236.183 1.742.495M21.812 26.754c-2.694 0-5.362-1.042-7.316-2.857a.788.788 0 0 1 1.072-1.154c1.667 1.548 3.94 2.437 6.244 2.437a9.13 9.13 0 0 0 6.083-2.292.79.79 0 0 1 1.113.067.79.79 0 0 1-.067 1.113 10.73 10.73 0 0 1-7.126 2.686z"
        />
      </G>
      <Rect
        width={31}
        height={31}
        x={6.5}
        y={5.5}
        stroke="#0B1215"
        rx={7.5}
        shapeRendering="crispEdges"
      />
    </G>
    <Defs>
      <ClipPath id="transparent-happy_svg__b">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgTransparentHappy;
