import type { SVGProps } from "react";
import { memo } from "react";
const Yew = (props: SVGProps<SVGSVGElement>) => (
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
      <path
        fill="#B3E1CE"
        d="M129.333 191.805c36.819 0 66.667-29.757 66.667-66.464s-29.848-66.463-66.667-66.463-66.666 29.757-66.666 66.463c0 36.707 29.847 66.464 66.666 66.464"
      />
      <path
        stroke="#444"
        strokeLinecap="round"
        strokeWidth={12}
        d="M129.966 128.09 65.333 56.22M129.966 128.09l64.633-71.87M129.966 128.09v74.349"
      />
      <path
        fill="#009A5B"
        stroke="#444"
        strokeWidth={8}
        d="M129.333 146.61c10.31 0 18.667-8.332 18.667-18.61s-8.357-18.61-18.667-18.61c-10.309 0-18.666 8.332-18.666 18.61s8.357 18.61 18.666 18.61Z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Yew);
export default Memo;
