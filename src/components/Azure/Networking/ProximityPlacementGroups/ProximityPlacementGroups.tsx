import type { SVGProps } from "react";
import { memo } from "react";
const ProximityPlacementGroups = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#949494"
      d="M0 15.6a.16.16 0 0 0 .09.15l1.22.7 2.07 1.2a.18.18 0 0 0 .24-.06l.7-1.22a.16.16 0 0 0 0-.22l-2.5-1.42a.18.18 0 0 1-.08-.15V3.42a.18.18 0 0 1 .08-.15l2.43-1.4a.16.16 0 0 0 .07-.22L3.62.4a.18.18 0 0 0-.24-.06l-2 1.18-1.3.73a.16.16 0 0 0-.09.15z"
    />
    <path
      fill="#a3a3a3"
      d="M4.3 1.63 3.62.4a.18.18 0 0 0-.18-.08.1.1 0 0 0-.08 0l-2 1.18-1.3.75L0 2.3v.08l1.74 1a.18.18 0 0 1 .08-.15l2.43-1.4a.16.16 0 0 0 .07-.22zm0 14.74-.7 1.22a.18.18 0 0 1-.18.08h-.08l-2-1.18-1.3-.75-.06-.06v-.08l1.74-1a.18.18 0 0 0 .08.15l2.43 1.4a.16.16 0 0 1 .06.21z"
    />
    <path
      fill="#949494"
      d="M18 2.4a.16.16 0 0 0-.09-.15l-1.22-.7-2.07-1.2a.18.18 0 0 0-.24.06l-.7 1.22a.15.15 0 0 0 .05.22l2.43 1.4a.18.18 0 0 1 .08.15v11.17a.18.18 0 0 1-.08.15l-2.43 1.4a.16.16 0 0 0-.07.22l.7 1.22a.18.18 0 0 0 .24.06l2-1.18 1.26-.73a.16.16 0 0 0 .09-.15V2.4z"
    />
    <path
      fill="#a3a3a3"
      d="m13.7 16.37.7 1.22a.18.18 0 0 0 .18.08h.08l2-1.18 1.26-.73.1-.06a.1.1 0 0 0 0-.08l-1.74-1a.18.18 0 0 1-.08.15l-2.43 1.4a.17.17 0 0 0-.06.19zm0-14.74L14.4.4a.18.18 0 0 1 .18-.08.1.1 0 0 1 .08 0l2 1.18 1.26.73.1.06a.1.1 0 0 1 0 .08l-1.74 1a.18.18 0 0 0-.08-.15l-2.43-1.37a.16.16 0 0 1-.07-.22"
    />
    <path
      fill="#999"
      d="M8.52 12.9a.29.29 0 0 1-.31.29H3.37a.3.3 0 0 1-.32-.28V5.06a.3.3 0 0 1 .31-.29H8.2a.29.29 0 0 1 .31.29z"
    />
    <path
      fill="#003067"
      d="M3.86 8.37a.62.62 0 0 1 .59-.65h2.72a.63.63 0 0 1 .6.65.63.63 0 0 1-.6.66H4.45a.63.63 0 0 1-.59-.65zm0-1.94a.63.63 0 0 1 .59-.66h2.72a.63.63 0 0 1 .6.66.63.63 0 0 1-.6.65H4.45a.63.63 0 0 1-.59-.65"
    />
    <g fill="#50e6ff">
      <circle cx={4.62} cy={6.43} r={0.44} />
      <circle cx={4.62} cy={8.37} r={0.44} />
    </g>
    <path
      fill="#999"
      d="M15.08 12.9a.29.29 0 0 1-.31.29H9.93a.3.3 0 0 1-.32-.28V5.06a.3.3 0 0 1 .31-.29h4.84a.3.3 0 0 1 .32.28z"
    />
    <path
      fill="#003067"
      d="M10.4 8.37a.64.64 0 0 1 .6-.65h2.72a.63.63 0 0 1 .6.65.63.63 0 0 1-.6.66H11a.63.63 0 0 1-.6-.66m0-1.94a.64.64 0 0 1 .6-.66h2.72a.63.63 0 0 1 .6.66.63.63 0 0 1-.6.65H11a.64.64 0 0 1-.6-.65"
    />
    <g fill="#50e6ff">
      <circle cx={11.18} cy={6.43} r={0.44} />
      <circle cx={11.18} cy={8.37} r={0.44} />
    </g>
  </svg>
);
const Memo = memo(ProximityPlacementGroups);
export default Memo;
