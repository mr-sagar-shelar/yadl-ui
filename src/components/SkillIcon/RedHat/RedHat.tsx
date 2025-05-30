import type { SVGProps } from "react";
import { memo } from "react";
const RedHat = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#E00"
          d="M156.485 137.52c11.375 0 27.847-2.368 27.847-15.941a18 18 0 0 0-.273-3.098l-6.734-29.515c-1.547-6.467-2.913-9.474-14.288-15.121-8.827-4.555-28.029-11.934-33.762-11.934-5.37 0-6.917 6.832-13.196 6.832-6.097 0-10.556-5.101-16.29-5.101-5.46 0-9.009 3.735-11.739 11.387 0 0-7.644 21.59-8.645 24.778a5.6 5.6 0 0 0-.182 1.731c-.091 8.38 32.943 35.891 77.262 35.982m29.576-10.384c1.547 7.469 1.547 8.289 1.547 9.2 0 12.754-14.288 19.859-33.125 19.859-42.59 0-79.81-24.96-79.81-41.448a16.7 16.7 0 0 1 1.365-6.65c-15.29.728-35.128 3.461-35.128 20.952 0 28.695 67.889 64.04 121.581 64.04 41.225 0 51.599-18.675 51.599-33.432 0-11.569-10.01-24.687-28.029-32.521"
        />
        <path
          fill="#000"
          d="M186.061 127.136c1.547 7.47 1.547 8.289 1.547 9.2 0 12.754-14.288 19.859-33.125 19.859-42.59 0-79.81-24.96-79.81-41.448a16.7 16.7 0 0 1 1.364-6.65l3.368-8.29a5.6 5.6 0 0 0-.182 1.731c0 8.381 33.034 35.891 77.262 35.891 11.375 0 27.847-2.368 27.847-15.941a18 18 0 0 0-.273-3.098z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M40 61h175v133H40z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(RedHat);
export default Memo;
