import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMessage = (props) => (
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
      d="m17.903 8.851-4.444 3.613c-.84.666-2.02.666-2.86 0L6.12 8.851"
    />
    <Path
      stroke="#0B1215"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.909 21C19.95 21.008 22 18.51 22 15.438V8.57C22 5.499 19.95 3 16.909 3H7.09C4.05 3 2 5.499 2 8.57v6.868C2 18.51 4.05 21.008 7.091 21z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMessage;
