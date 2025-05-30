import type { SVGProps } from "react";
import { memo } from "react";
const DeepComposer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M50.592 31.523a1.504 1.504 0 0 1-2.114.006l-3.775-3.728a1.001 1.001 0 0 0-1.703.711V50c0 3.859-3.14 7-7 7s-7-3.141-7-7 3.141-7 7-7c.901 0 1.783.172 2.624.513A.997.997 0 0 0 40 42.586V22.5c0-.712.501-1.321 1.206-1.466l.061-.008c.067-.01.134-.023.203-.026l.05.002h.01c.401 0 .776.154 1.058.434l8.006 7.957c.285.283.442.66.443 1.062 0 .401-.155.779-.445 1.068m-6.595-11.507a3.47 3.47 0 0 0-2.435-1.014 1.9 1.9 0 0 0-.531.041 1 1 0 0 0-.143.016A3.49 3.49 0 0 0 38 22.5v18.726A9 9 0 0 0 36 41c-4.963 0-9 4.037-9 9 0 4.962 4.037 9 9 9s9-4.038 9-9V30.906l2.072 2.047a3.513 3.513 0 0 0 4.94-.021 3.48 3.48 0 0 0 1.025-2.48 3.48 3.48 0 0 0-1.033-2.478zM66 35.531a18.02 18.02 0 0 1-18 3.204v2.113a19.9 19.9 0 0 0 6.276 1.024c4.15 0 8.265-1.296 11.724-3.795V64c0 1.103-.897 2-2 2H16c-1.102 0-2-.897-2-2V45.281l1.421-2.324C19.563 36.176 27.54 33.044 35 34.856v-2.039c-7.987-1.735-16.414 1.58-21 8.674V16c0-1.103.898-2 2-2h48c1.103 0 2 .897 2 2zM64 12H16c-2.206 0-4 1.794-4 4v48c0 2.205 1.794 4 4 4h48c2.206 0 4-1.795 4-4V16c0-2.206-1.794-4-4-4"
      />
    </g>
  </svg>
);
const Memo = memo(DeepComposer);
export default Memo;
