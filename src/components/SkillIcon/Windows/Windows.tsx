import type { SVGProps } from "react";
import { memo } from "react";
const Windows = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#00ADEF"
        d="m40 65.663 70.968-9.665.032 68.455-70.934.404zm70.935 66.677.055 68.515-70.934-9.753-.004-59.221zm8.602-77.607L213.636 41v82.582l-94.099.748zm94.121 78.251-.022 82.211-94.099-13.281-.131-69.083z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Windows);
export default Memo;
