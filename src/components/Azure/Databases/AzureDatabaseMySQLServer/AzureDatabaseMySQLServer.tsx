import type { SVGProps } from "react";
import { memo } from "react";
const AzureDatabaseMySQLServer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={2.59}
        x2={15.41}
        y1={10.16}
        y2={10.16}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#005ba1" />
        <stop offset={0.07} stopColor="#0060a9" />
        <stop offset={0.36} stopColor="#0071c8" />
        <stop offset={0.52} stopColor="#0078d4" />
        <stop offset={0.64} stopColor="#0074cd" />
        <stop offset={0.82} stopColor="#006abb" />
        <stop offset={1} stopColor="#005ba1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M9 5.14c-3.54 0-6.41-1-6.41-2.32v12.36c0 1.27 2.82 2.3 6.32 2.32H9c3.54 0 6.41-1 6.41-2.32V2.82c0 1.29-2.87 2.32-6.41 2.32"
    />
    <path
      fill="#e8e8e8"
      d="M15.41 2.82c0 1.29-2.87 2.32-6.41 2.32s-6.41-1-6.41-2.32S5.46.5 9 .5s6.41 1 6.41 2.32"
    />
    <path
      fill="#50e6ff"
      d="M13.92 2.63c0 .82-2.21 1.48-4.92 1.48s-4.92-.66-4.92-1.48S6.29 1.16 9 1.16s4.92.66 4.92 1.47"
    />
    <path
      fill="#198ab3"
      d="M9 3a11.6 11.6 0 0 0-3.89.57A11.4 11.4 0 0 0 9 4.11a11.2 11.2 0 0 0 3.89-.58A11.8 11.8 0 0 0 9 3"
    />
    <path
      fill="#f2f2f2"
      d="M12.64 9v1.63h-1a.4.4 0 0 1-.29-.14V9H10v1.78a.92.92 0 0 0 1 .89h1.49l.26-.13s-.11.41-.26.43h-2.38v1h2.66A1.21 1.21 0 0 0 14 11.7V9ZM9.53 9v-.49a.7.7 0 0 0-.48-.77 1.7 1.7 0 0 0-.5-.08.94.94 0 0 0-.91.58l-.78 1.9-1-1.9A.93.93 0 0 0 5 7.66a1.4 1.4 0 0 0-.51.09c-.35.11-.43.34-.43.73v3.31h1.17V9.56l.63 1.57a1.08 1.08 0 0 0 1 .66c.44 0 .62-.26.8-.66l.67-1.51v2.15h1.18V9Z"
    />
  </svg>
);
const Memo = memo(AzureDatabaseMySQLServer);
export default Memo;
