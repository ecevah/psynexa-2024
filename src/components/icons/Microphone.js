import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMicrophone = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 22v-3.16"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.848a4.07 4.07 0 0 1-4.062-4.08V6.081C8.438 3.827 10.256 2 12.5 2c2.243 0 4.061 1.827 4.061 4.08v4.688c0 2.254-1.818 4.08-4.06 4.08"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 10.8c0 4.44-3.582 8.038-8 8.038-4.42 0-8-3.599-8-8.038M14.569 6.756h1.99M13.57 10.094h2.99"
    />
  </Svg>
);
export default SvgMicrophone;
