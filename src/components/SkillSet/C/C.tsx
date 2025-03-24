import type { SVGProps } from "react";
import { memo } from "react";
const C = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#394AAB" rx={60} />
    <path
      fill="#fff"
      d="M134.001 33c35.143 0 65.827 19.086 82.261 47.456l-.16-.273-41.349 23.808c-8.146-13.793-23.081-23.102-40.213-23.293l-.539-.003c-26.126 0-47.306 21.179-47.306 47.304a47.1 47.1 0 0 0 6.239 23.47c8.154 14.235 23.482 23.837 41.067 23.837 17.692 0 33.108-9.724 41.221-24.111l-.197.345 41.286 23.918c-16.254 28.13-46.517 47.157-81.252 47.536l-1.058.006c-35.255 0-66.026-19.204-82.419-47.724C43.579 161.353 39 145.212 39 127.999 39 75.533 81.532 33 134.001 33"
    />
  </svg>
);
const Memo = memo(C);
export default Memo;
