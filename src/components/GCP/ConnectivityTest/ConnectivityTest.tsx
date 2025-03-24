import type { SVGProps } from "react";
import { memo } from "react";
const ConnectivityTest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd" stroke="#4285F4" strokeWidth={2}>
      <path d="M20 4 4 13V6.717M4 21l16-9v6.283" />
    </g>
  </svg>
);
const Memo = memo(ConnectivityTest);
export default Memo;
