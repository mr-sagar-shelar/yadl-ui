import type { SVGProps } from "react";
import { memo } from "react";
const WebStorm = (props: SVGProps<SVGSVGElement>) => (
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
          fill="url(#prefix__c)"
          d="M63.5 198.25 40 58.25l43.75-18 27.75 16.5L137 43l53.25 20.5-30 151.5z"
        />
        <path
          fill="url(#prefix__d)"
          d="M215 99.25 192.5 43.5l-41-3.5-63.25 60.75 17 78.25L137 201.5l78-46.5-19.25-35.75z"
        />
        <path
          fill="url(#prefix__e)"
          d="m180 91 15.75 28.25 19.25-20-14-34.75z"
        />
        <path fill="#000" d="M181.5 73.5h-108v108h108z" />
        <path
          fill="#fff"
          d="M124.25 161.25h-40.5V168h40.5zM136.75 125.75l5.75-7c4 3.25 8.25 5.5 13.25 5.5 4 0 6.25-1.5 6.25-4.25v-.25c0-2.5-1.5-3.75-9-5.75-9-2.25-14.5-4.75-14.5-13.75V100c0-8.25 6.5-13.5 15.5-13.5 6.5 0 12 2 16.5 5.75l-5 7.5c-4-2.75-7.75-4.5-11.5-4.5s-5.75 1.75-5.75 4v.25c0 3 2 4 9.5 6 9 2.5 14 5.75 14 13.5v.25c0 9-6.75 14-16.25 14-6.75-.25-13.5-2.75-18.75-7.5M128 87.5l-6.75 26-7.5-26h-7.5l-7.75 26-6.75-26H81.5l12.75 44.75h8.25l7.5-26 7.25 26h8.5L138.5 87.5z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="prefix__c"
        x1={102.67}
        x2={147.957}
        y1={43.65}
        y2={206.687}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.285} stopColor="#00CDD7" />
        <stop offset={0.941} stopColor="#2086D7" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={116.8}
        x2={193.413}
        y1={64.336}
        y2={176.677}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.14} stopColor="#FFF045" />
        <stop offset={0.366} stopColor="#00CDD7" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={192.705}
        x2={202.765}
        y1={78.225}
        y2={113.86}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.285} stopColor="#00CDD7" />
        <stop offset={0.941} stopColor="#2086D7" />
      </linearGradient>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M40 40h175v175H40z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(WebStorm);
export default Memo;
