import type { SVGProps } from "react";
import { memo } from "react";
const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M54.01 50h-2v4h-4v2h4v4h2v-4h4v-2h-4zm7 5c0-4.411-3.588-8-8-8-4.41 0-8 3.589-8 8s3.59 8 8 8c4.412 0 8-3.59 8-8m2 0c0 5.514-4.485 10-10 10-5.513 0-10-4.486-10-10s4.487-10 10-10c5.515 0 10 4.486 10 10m-27 2.97V22.457l-11 4.23V47c.013.414.397 10.38 11 10.971m13-14.27V26.686l-11-4.23v35.507a13.7 13.7 0 0 0 3.237-.6c.135.67.334 1.315.575 1.938-1.465.46-3.07.698-4.811.698-13.56 0-13.997-12.848-14-12.977V26c0-.415.255-.785.64-.934l13-5a1 1 0 0 1 .719 0l13 5c.386.149.64.52.64.934v17.18q-1.031.176-2 .52m-4.254 19.987a12 12 0 0 0 1.817 1.422c-2.755 1.248-5.958 1.879-9.562 1.879-6.327 0-11.371-1.925-14.991-5.721-6.431-6.744-6.03-16.887-6.008-17.315L16.01 22c0-.41.249-.776.629-.93l20-8c.238-.094.504-.094.742 0l20 8c.38.154.629.52.629.93v22l.004.106a12 12 0 0 0-2.003-.712l-.001-20.717-19-7.6-19 7.6v21.322c-.006.143-.375 9.784 5.466 15.898 3.227 3.378 7.78 5.09 13.534 5.09 2.888 0 5.475-.441 7.745-1.3"
      />
    </g>
  </svg>
);
const Memo = memo(Shield);
export default Memo;
