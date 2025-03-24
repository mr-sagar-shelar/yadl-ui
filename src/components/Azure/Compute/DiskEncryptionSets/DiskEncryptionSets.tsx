import type { SVGProps } from "react";
import { memo } from "react";
const DiskEncryptionSets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <defs>
      <radialGradient
        id="prefix__a"
        cx={8.38}
        cy={445.94}
        r={4.05}
        gradientTransform="matrix(1 0 0 1.59 0 -704.99)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5ea0ef" />
        <stop offset={0.11} stopColor="#519aeb" />
        <stop offset={0.51} stopColor="#2588df" />
        <stop offset={0.82} stopColor="#0a7cd7" />
        <stop offset={1} stopColor="#0078d4" />
      </radialGradient>
    </defs>
    <path
      fill="#0078d4"
      d="M2.12.5H4.1v.57H2.12zm14.5.57h.32v.3h.55V.5h-.87zM1.4 16.9h-.28v-.32H.5v.93h.9v-.6zm15.55-.3v.3h-.32v.6h.87v-.9zM1.13 1.36v-.3h.28V.5H.5v.86zM5.07.5h1.97v.57H5.07zM8 .5h1.97v.57H8zm2.96 0h1.97v.57h-1.97zm2.94 0h1.97v.57H13.9zM2.14 16.9H4.1v.57H2.14zm2.94 0h1.97v.57H5.08zm2.95 0H10v.57H8.03zm2.95 0h1.97v.57h-1.97zm2.94 0h1.97v.57h-1.97zm3-14.85h.57v1.97h-.57zm0 2.95h.57v1.97h-.57zm0 2.94h.57V9.9h-.57zm0 2.94h.57v1.97h-.57zm0 2.95h.57v1.97h-.57zM.5 2.03h.57V4H.5zm0 2.95h.57v1.97H.5zm0 2.94h.57V9.9H.5zm0 2.95h.57v1.97H.5zm0 2.93h.57v1.97H.5z"
    />
    <path
      fill="#76bc2d"
      d="M10.3 11a1.5 1.5 0 0 1 0-2.11l.76-.76a12 12 0 0 0-2.67-.29c-3.07 0-5.55 1-5.55 2.28S5.3 12.4 8.38 12.4a11.8 11.8 0 0 0 2.93-.4z"
    />
    <ellipse cx={8.38} cy={5.05} fill="url(#prefix__a)" rx={5.54} ry={2.28} />
    <ellipse cx={8.51} cy={5.02} fill="#005ba1" rx={1.84} ry={0.5} />
    <g fill="#0078d4">
      <path d="M15.58 10.65a1 1 0 0 0 0-1.44l-1.76-1.77a1 1 0 0 0-1.44 0L10.62 9.2a1 1 0 0 0 0 1.44l1.47 1.5a.32.32 0 0 1 .08.2v2.73a.35.35 0 0 0 .1.24l.67.67a.24.24 0 0 0 .33 0l1.02-1.02a.14.14 0 0 0 0-.19l-.3-.28a.13.13 0 0 1 0-.2l.27-.28a.14.14 0 0 0 0-.19l-.27-.27a.14.14 0 0 1 0-.21l.27-.27a.14.14 0 0 0 0-.19l-.38-.4v-.13zM13.1 7.87a.58.58 0 1 1 0 1.13.58.58 0 0 1 0-1.16z" />
      <path d="M12.05 7.1a1.5 1.5 0 0 1 1-.44 1.6 1.6 0 0 1 .65.15 1.2 1.2 0 0 0 .17-.48V5c0 1.25-2.48 2.27-5.54 2.27s-5.5-1-5.5-2.27v1.26c0 1.26 2.48 2.28 5.55 2.28a12.7 12.7 0 0 0 2.48-.24z" />
    </g>
    <g fill="#c3f1ff">
      <path
        d="M12.65 15.1a.13.13 0 0 0 .18 0 .1.1 0 0 0 0-.08v-2.25a.17.17 0 0 0-.06-.11.13.13 0 0 0-.17 0 .07.07 0 0 0 0 .07V15a.11.11 0 0 0 .05.1"
        opacity={0.75}
      />
      <rect
        width={2.89}
        height={0.34}
        x={11.7}
        y={9.79}
        opacity={0.75}
        rx={0.16}
      />
      <rect
        width={2.89}
        height={0.34}
        x={11.7}
        y={10.35}
        opacity={0.75}
        rx={0.16}
      />
    </g>
    <path
      fill="#5e9624"
      d="m11.7 12.42-.42-.42a12.2 12.2 0 0 1-2.9.34c-3.07 0-5.55-1-5.55-2.28v1.27c0 1.26 2.48 2.28 5.55 2.28a11.7 11.7 0 0 0 3.32-.46zM9.87 9.74a5 5 0 0 0-1.36-.17c-1 0-1.84.23-1.84.5s.83.5 1.84.5a4.9 4.9 0 0 0 1.43-.19 1.6 1.6 0 0 1-.07-.65z"
    />
  </svg>
);
const Memo = memo(DiskEncryptionSets);
export default Memo;
