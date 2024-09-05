import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgSurprised = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <G filter="url(#surprised_svg__a)">
      <G clipPath="url(#surprised_svg__b)">
        <G clipPath="url(#surprised_svg__c)">
          <Path fill="#C179FF" d="M38 5H6v32h32z" />
          <Path
            fill="#0B1215"
            d="M12.525 14.848a.525.525 0 0 1-.342-.923 6.75 6.75 0 0 1 3.765-1.589.52.52 0 0 1 .57.476.523.523 0 0 1-.477.57 5.7 5.7 0 0 0-3.177 1.34.52.52 0 0 1-.343.126zM31.978 14.848a.52.52 0 0 1-.342-.127 5.7 5.7 0 0 0-3.178-1.34.525.525 0 0 1-.476-.569.52.52 0 0 1 .569-.476 6.77 6.77 0 0 1 3.77 1.59.525.525 0 0 1-.343.922M17.199 20.682c0 1.295-.74 2.348-1.656 2.348s-1.652-1.049-1.652-2.348.74-2.347 1.652-2.347 1.656 1.052 1.656 2.347M30.613 20.682c0 1.295-.74 2.348-1.652 2.348s-1.656-1.049-1.656-2.348.74-2.347 1.656-2.347 1.652 1.052 1.652 2.347M27.067 29.58c.416.085.707-.54.428-.946-1.22-1.797-3.115-2.954-5.243-2.954s-4.022 1.157-5.247 2.954c-.279.41.012 1.03.428.945 1.444-.297 3.081-.461 4.815-.461s3.371.167 4.819.461"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="surprised_svg__b">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
      <ClipPath id="surprised_svg__c">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSurprised;
