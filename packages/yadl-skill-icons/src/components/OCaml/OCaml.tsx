import type { SVGProps } from "react";
import { memo } from "react";
const OCaml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <rect width={256} height={256} fill="url(#prefix__b)" rx={60} />
      <path
        fill="#fff"
        d="M143.426 232.018c-.547-2.194.548-4.938-.547-7.132-.548-2.195-2.19-2.195-2.737-3.841-2.19-4.389-4.927-9.327-4.927-14.814 0-4.389-1.643-8.778-2.19-13.167v-6.584c0-1.098 0-2.195-.547-3.292 0-.549 0-1.646-.548-1.646l.548-1.646c0-.549 4.926-.549 6.569-.549 2.737 0 4.927 0 7.664.549 5.474 0 9.853 0 15.328-.549 11.496-1.646 16.423-6.584 19.16-8.23 10.401-7.132 15.328-19.751 15.328-19.751 1.642-3.841 1.642-10.974 5.474-13.717 4.379-3.84 11.496-3.292 16.423-5.486 2.737-1.098 4.927-2.195 8.211-1.646 2.19.548 6.022 3.292 7.117-.549l-1.643-1.646c4.38-.549 0-9.876-1.642-12.071-2.737-2.743-6.569-4.389-10.948-5.486-5.475-1.646-10.402-3.292-15.328-2.195-8.759 1.646-8.212-3.292-13.139-3.292-6.021 0-16.97.549-19.16 6.584-1.094 2.743-1.642 2.743-3.284 4.938-1.095 1.646 0 3.292-.548 5.487-.547 2.194-1.642 9.876-2.737 12.619-1.642 4.389-3.832 9.876-7.664 9.876-5.474.548-9.853 1.097-14.233-.549-2.737-1.097-7.116-2.743-9.306-3.292-10.401-4.389-12.044-8.778-12.044-8.778-1.094-1.646-3.832-4.938-4.926-8.779-1.095-4.389-3.285-7.681-3.832-9.876-1.095-2.194-2.738-6.035-4.38-9.876-2.19-4.938-4.927-8.778-7.116-10.424-3.285-2.743-6.022-7.133-12.591-6.035-1.095 0-5.474.548-8.76 3.291-2.189 1.647-2.736 5.487-4.926 8.779-1.095 1.646-3.285 7.133-4.927 11.522-1.095 3.292-1.642 5.486-3.284 6.584-1.095 1.097-2.19 2.194-3.832 1.646l-3.285-1.646c-1.642-1.098-4.927-7.133-7.117-10.973-1.642-3.841-5.474-9.328-7.663-12.07-3.285-4.39-4.927-5.487-9.854-5.487-9.854 0-10.949 5.486-15.328 13.716-2.19 3.841-2.737 9.327-6.57 13.716-1.642 2.195-8.758 12.62-13.685 14.266v75.714-.548c.547-1.098.547-2.195 1.095-2.743 2.19-3.841 6.569-7.682 8.759-12.071 1.095-2.195 2.737-4.389 3.832-7.133.547-1.646 1.095-4.937 2.19-6.583 1.094-2.195 3.284-2.744 5.474-3.292 3.832-.549 6.569 4.938 10.948 7.132 1.642 1.097 10.401 3.841 13.139 4.389 4.379 1.098 8.758 1.646 13.138 2.744 2.19.548 4.38.548 7.116 1.097 2.19 0 10.401.549 10.401 1.097-3.832 2.195-6.569 7.682-8.21 12.071-1.643 4.389-2.738 9.327-4.38 13.168-2.19 4.389-6.57 6.584-6.022 12.07 0 2.195.547 4.389 0 6.584-.547 2.743-1.642 4.389-2.19 7.133-1.095 3.292-2.19 13.716-3.284 16.459l8.758-1.097c1.095-2.195 1.643-12.07 2.19-13.168 1.643-4.938 3.832-8.778 7.117-12.619 3.284-3.841 3.284-8.23 4.927-12.619 2.19-4.938 4.926-8.23 7.664-12.619 4.926-7.681 8.211-18.106 18.065-20.301 1.095 0 7.116 4.39 9.853 7.133 3.285 3.292 6.57 6.584 8.759 10.973 3.832 8.23 7.664 20.301 8.759 26.336.548 3.84 1.095 3.84 3.832 7.132 1.095 1.098 3.285 5.487 4.38 7.133.547 1.646 2.189 5.486 2.737 7.681.547 1.097 2.189 4.938 3.284 8.23h8.212c-3.285-9.327-6.022-18.654-7.117-27.982"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__b"
        x1={127.705}
        x2={127.705}
        y1={0.12}
        y2={257.041}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F29100" />
        <stop offset={1} stopColor="#EC670F" />
      </linearGradient>
      <clipPath id="prefix__a">
        <rect width={256} height={256} fill="#fff" rx={60} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(OCaml);
export default Memo;
