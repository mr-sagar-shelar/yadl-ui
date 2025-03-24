import type { SVGProps } from "react";
import { memo } from "react";
const Security = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    baseProfile="tiny"
    overflow="visible"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#85A4E6"
      d="M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5zm0 11h7c-.5 4.1-3.3 7.8-7 8.9zH5V6.3l7-3.1z"
    />
    <path
      fill="#5C85DE"
      d="M12 1v22c5.2-1.3 9-6.4 9-12V5zm7 11c-.5 4.1-3.3 7.8-7 8.9V12z"
    />
    <path
      fill="#3367D6"
      fillRule="evenodd"
      d="M21 12h-2s0 .3-.1.6zM3 12h2v-.6z"
    />
  </svg>
);
const Memo = memo(Security);
export default Memo;
