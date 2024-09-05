import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDownloadIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#0B1215"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.122 15.436V3.395M15.038 12.508l-2.916 2.928-2.916-2.928"
    />
    <Path
      stroke="#0B1215"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.755 8.128h.933a3.684 3.684 0 0 1 3.684 3.685v4.884a3.675 3.675 0 0 1-3.675 3.675H6.557a3.685 3.685 0 0 1-3.685-3.685v-4.885a3.675 3.675 0 0 1 3.675-3.674h.942"
    />
  </Svg>
);
export default SvgDownloadIcon;
