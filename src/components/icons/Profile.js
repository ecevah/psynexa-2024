import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 21"
    {...props}
  >
    <Path
      stroke="#0B1215"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.985 13.846c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948"
      clipRule="evenodd"
    />
    <Path
      stroke="#0B1215"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M7.985 10.506A4.596 4.596 0 1 0 3.389 5.91a4.58 4.58 0 0 0 4.563 4.596z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgProfile;
