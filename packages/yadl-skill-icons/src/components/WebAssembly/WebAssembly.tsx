import type { SVGProps } from "react";
import { memo } from "react";
const WebAssembly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#654FF0"
        d="M157.281 0v1.38c0 16.214-13.143 29.353-29.352 29.353-16.213 0-29.352-13.143-29.352-29.353V0H0v256h256V0z"
      />
      <path
        fill="#fff"
        d="M59.466 137.96h16.966l11.583 61.687h.209l13.921-61.687h15.87l12.574 62.444h.247l13.202-62.444h16.64l-21.622 90.641h-16.837l-12.47-61.687h-.326l-13.348 61.687h-17.15zm120.34 0h26.747l26.562 90.641h-17.502l-5.777-20.17h-30.469l-4.459 20.17h-17.046zm10.182 22.341-7.4 33.255h23.032l-8.496-33.255z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <rect width={256} height={256} fill="#fff" rx={60} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(WebAssembly);
export default Memo;
