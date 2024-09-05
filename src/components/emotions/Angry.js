import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgAngry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <G filter="url(#angry_svg__a)">
      <G clipPath="url(#angry_svg__b)">
        <G clipPath="url(#angry_svg__c)">
          <Path fill="#FE7575" d="M38 5H6v32h32z" />
          <Path
            fill="#0B1215"
            d="M17.303 20.245c0 1.295-.74 2.348-1.656 2.348s-1.652-1.053-1.652-2.348.74-2.347 1.652-2.347 1.656 1.049 1.656 2.347M29.667 20.245c0 1.295-.74 2.348-1.652 2.348s-1.656-1.053-1.656-2.348.74-2.347 1.656-2.347 1.652 1.049 1.652 2.347M18.281 18.701a.45.45 0 0 1-.435-.327c-.484-1.652-2.14-2.91-4.112-3.133a.45.45 0 0 1-.398-.502.45.45 0 0 1 .503-.399c2.329.265 4.29 1.783 4.881 3.78a.457.457 0 0 1-.439.585zM25.385 18.701a.45.45 0 0 1-.435-.584c.588-1.998 2.549-3.516 4.878-3.78a.45.45 0 0 1 .502.398.45.45 0 0 1-.398.502c-1.972.223-3.624 1.485-4.111 3.133a.46.46 0 0 1-.436.327zM25.076 27.844a.72.72 0 0 1-.499-.198c-.673-.629-1.596-.997-2.593-1.034-1.105-.048-2.158.331-2.888 1.027a.733.733 0 0 1-1.034-.022.733.733 0 0 1 .022-1.035c1.012-.967 2.456-1.488 3.956-1.432 1.347.052 2.604.558 3.534 1.425a.734.734 0 0 1-.498 1.268"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="angry_svg__b">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
      <ClipPath id="angry_svg__c">
        <Rect width={32} height={32} x={6} y={5} fill="#fff" rx={8} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAngry;
