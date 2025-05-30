import type { SVGProps } from "react";
import { memo } from "react";
const Vuetify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#F4F2ED"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <g clipPath="url(#prefix__b)">
        <path
          fill="#1697F6"
          d="m129.353 102.949-34.892 60.569 33.039 57.373 43.76-75.945L215 69h-66.098z"
        />
        <path
          fill="#AEDDFF"
          d="m83.76 144.946 2.291 3.994 32.641-56.675L132.103 69H40z"
        />
        <path
          fill="#1867C0"
          d="M148.902 69c16.539 54.538-21.402 151.891-21.402 151.891l-33.04-57.373z"
        />
        <path
          fill="#7BC6FF"
          d="M132.103 69c-69.685 0-46.051 79.94-46.051 79.94z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M40 69h175v152H40z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Vuetify);
export default Memo;
