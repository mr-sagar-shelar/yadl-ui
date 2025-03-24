import type { SVGProps } from "react";
import { memo } from "react";
const GameServers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill="#3367D6"
        d="M3.76 20.48h16.72a.76.76 0 0 1 0 1.52H3.76zM19.72 3v7.6a.76.76 0 0 0 1.52 0V4.52c0-.84-.68-1.52-1.52-1.52"
      />
      <path fill="#5C85DE" d="M19.72 3h-4.56a.76.76 0 0 0 0 1.52h4.56z" />
      <path
        fill="#3367D6"
        d="M21.24 9.84h-6.08a.76.76 0 0 0 0 1.52h6.08zM3 9.84h6.08a.76.76 0 1 1 0 1.52H3z"
      />
      <path
        fill="#3367D6"
        d="M4.52 3v7.6a.76.76 0 1 1-1.52 0V4.52C3 3.68 3.68 3 4.52 3"
      />
      <path fill="#5C85DE" d="M4.52 3h4.56a.76.76 0 1 1 0 1.52H4.52z" />
      <path
        fill="#3367D6"
        d="M19.53 12.88v8.265a.855.855 0 0 0 1.71 0V14.59a1.71 1.71 0 0 0-1.71-1.71"
      />
      <path fill="#5C85DE" d="M19.53 12.88h-4.3a.83.83 0 1 0 0 1.658h4.3z" />
      <path
        fill="#3367D6"
        d="M4.71 12.88v8.265a.855.855 0 0 1-1.71 0V14.59c0-.944.766-1.71 1.71-1.71"
      />
      <path fill="#5C85DE" d="M4.71 12.88h4.3a.83.83 0 1 1 0 1.658h-4.3z" />
      <path
        fill="#3367D6"
        d="M16.68 8.016h-3.344v3.344h-1.672V8.016H8.32V6.344h3.344V3h1.672v3.344h3.344zM15.494 17.014a1.14 1.14 0 1 1 1.612 1.613 1.14 1.14 0 0 1-1.612-1.613M11.314 18.626a1.14 1.14 0 1 1 1.613-1.612 1.14 1.14 0 0 1-1.613 1.612"
      />
      <path
        fill="#5C85DE"
        d="M11.314 14.826a1.14 1.14 0 1 1 1.613-1.612 1.14 1.14 0 0 1-1.613 1.612"
      />
      <path
        fill="#3367D6"
        d="M7.134 18.626a1.14 1.14 0 1 1 1.613-1.612 1.14 1.14 0 0 1-1.613 1.612"
      />
    </g>
  </svg>
);
const Memo = memo(GameServers);
export default Memo;
