import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHome = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 21 23"
    {...props}
  >
    <Path
      stroke="#0A6EBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.657 20.271v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438V9.338a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L1.962 7.443A2.42 2.42 0 0 0 1 9.347v8.715C1 19.96 2.555 21.5 4.473 21.5h1.924c.685 0 1.241-.55 1.241-1.229"
    />
  </Svg>
);
export default SvgHome;
