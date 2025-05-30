import type { SVGProps } from "react";
import { memo } from "react";
const Arch = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#1793D1"
          d="M127.5 41c-7.789 19.098-12.519 31.607-21.191 50.137 5.317 5.637 11.852 12.176 22.451 19.59-11.395-4.69-19.163-9.385-24.972-14.27C92.688 119.617 75.288 152.594 40 216c27.728-16.008 49.224-25.882 69.257-29.651-.857-3.694-1.315-7.709-1.282-11.877l.021-.876c.44-17.77 9.686-31.433 20.636-30.506 10.95.928 19.474 16.09 19.034 33.86-.083 3.347-.472 6.563-1.132 9.549 19.817 3.878 41.11 13.708 68.466 29.501a9921 9921 0 0 1-14.825-27.408c-7.244-5.614-14.795-12.918-30.207-20.828 10.593 2.752 18.185 5.935 24.097 9.485C147.31 90.2 143.533 78.625 127.5 41"
        />
        <path
          fill="#fff"
          fillOpacity={0.166}
          d="M176.755 145.015c-37.93-51.483-46.722-92.976-48.949-102.882 20.233 46.668 20.095 47.24 48.949 102.882"
        />
        <path
          fill="url(#prefix__c)"
          d="M127.821 41.748c-.973 2.392-1.921 4.713-2.819 6.922-.996 2.446-1.943 4.781-2.884 7.07s-1.874 4.524-2.799 6.73a713 713 0 0 1-2.798 6.58c-.947 2.193-1.899 4.41-2.906 6.664a572 572 0 0 1-3.161 6.943 636 636 0 0 1-3.504 7.456c-.172.359-.38.768-.555 1.132 5.301 5.614 11.827 12.111 22.366 19.482-11.366-4.677-19.126-9.355-24.93-14.227-.301.615-.565 1.164-.875 1.794-.409.83-.9 1.772-1.325 2.628-.746 1.529-1.525 3.1-2.328 4.721l-.898 1.773c-5.072 10.18-11.365 22.366-19.46 37.512 22.193-12.504 46.131-30.544 89.614-15.017-2.18-4.13-4.184-8.002-6.067-11.643a1114 1114 0 0 1-5.255-10.275 819 819 0 0 1-4.529-9.143 620 620 0 0 1-3.93-8.203 508 508 0 0 1-3.461-7.52 476 476 0 0 1-3.097-6.986 512 512 0 0 1-2.842-6.729 644 644 0 0 1-2.713-6.665c-.32-.798-.64-1.629-.961-2.435-2.453-5.759-4.972-11.726-7.883-18.564"
        />
      </g>
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M40 41h175v175H40z" />
      </clipPath>
      <linearGradient
        id="prefix__c"
        x1={127.904}
        x2={104.123}
        y1={61.731}
        y2={133.77}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.275} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Arch);
export default Memo;
