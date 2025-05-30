import type { SVGProps } from "react";
import { memo } from "react";
const Datashare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285f4"
      fillRule="evenodd"
      d="M19.45 18.47a1.12 1.12 0 1 1 1.15-1.09 1.13 1.13 0 0 1-1.15 1.09m0 1a2.08 2.08 0 1 0-1.45-.63 2.08 2.08 0 0 0 1.47.61Z"
    />
    <path
      fill="#4285f4"
      d="M19.46 4.33A2.07 2.07 0 0 0 18 7.87a2 2 0 0 0 1.47.6 2.08 2.08 0 1 0 0-4.15Zm.8 2.86a1.08 1.08 0 0 1-.81.31 1.11 1.11 0 1 1 1.15-1.08 1.14 1.14 0 0 1-.34.77M15.9 10h-.05v.95h.07a1.11 1.11 0 0 1 0 2.22h-.07v1h.07a2.08 2.08 0 1 0 0-4.15ZM11.32 2C6.43 2 2.46 4 2.46 6.4s4 4.41 8.86 4.41h.1V2Z"
    />
    <path
      fill="#4285f4"
      d="M11.32 12.52a14 14 0 0 1-6.27-1.25 4.45 4.45 0 0 1-2.44-2.38h-.15V12c0 2.43 4 4.4 8.86 4.4h.1v-3.9Z"
    />
    <path
      fill="#4285f4"
      d="M11.32 18.1a14 14 0 0 1-6.27-1.24 4.45 4.45 0 0 1-2.44-2.38h-.15v3.12c0 2.43 4 4.4 8.86 4.4h.1v-3.9Z"
    />
    <path fill="#669df6" d="M13.64 2h2.22v20h-2.22z" />
  </svg>
);
const Memo = memo(Datashare);
export default Memo;
