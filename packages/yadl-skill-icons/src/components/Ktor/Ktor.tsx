import type { SVGProps } from "react";
import { memo } from "react";
const Ktor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path fill="#F26636" d="M95.406 34 31 96.46l64.406 62.428V96.46h64.374z" />
    <path
      fill="#6373FF"
      d="m224.17 158.873-64.406-62.429v62.429H95.39l64.374 62.459z"
    />
    <path fill="#27282C" d="M159.78 96.444H95.39v62.444h64.39z" />
  </svg>
);
const Memo = memo(Ktor);
export default Memo;
