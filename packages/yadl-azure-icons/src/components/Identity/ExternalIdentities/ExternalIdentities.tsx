import type { SVGProps } from "react";
import { memo } from "react";
const ExternalIdentities = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <path
      fill="#59b4d9"
      d="M16.814 13.026a.7.7 0 0 1-.7.709H11.28a.7.7 0 0 1-.709-.7V5.081a.7.7 0 0 1 .7-.709h4.81a.7.7 0 0 1 .71.694v7.96Z"
    />
    <path
      fill="#fff"
      d="M11.706 5.79h1.7v1.987h-1.7Zm2.27 0h1.7v1.987h-1.7Zm-2.27 3.122h1.7V10.9h-1.7Zm2.27 0h1.7V10.9h-1.7Z"
    />
    <path
      fill="#0072c6"
      d="M7.429 13.026a.7.7 0 0 1-.7.709H1.9a.7.7 0 0 1-.71-.694v-7.96a.7.7 0 0 1 .7-.709h4.801a.7.7 0 0 1 .71.694v.015"
    />
    <path
      fill="#59b4d9"
      d="M2.321 5.79h1.7v1.987h-1.7Zm2.27 0h1.7v1.987h-1.7Zm-2.27 3.122h1.7V10.9h-1.7Zm2.27 0h1.7V10.9h-1.7Z"
    />
    <path
      fill="#ff8c00"
      d="M9.143 17.5a3.52 3.52 0 0 0 3.493-3.185h-1.047a2.456 2.456 0 0 1-2.428 2.154 2.36 2.36 0 0 1-1.895-.941L8.419 14.3H5.5v3.11l1.054-1.122A3.37 3.37 0 0 0 9.143 17.5M8.989 1.531a2.36 2.36 0 0 1 1.893.943L9.73 3.7h2.924V.589L11.6 1.71A3.37 3.37 0 0 0 9.006.5a3.517 3.517 0 0 0-3.493 3.2h1.045a2.456 2.456 0 0 1 2.431-2.169"
    />
  </svg>
);
const Memo = memo(ExternalIdentities);
export default Memo;
