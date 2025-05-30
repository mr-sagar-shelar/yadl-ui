import type { SVGProps } from "react";
import { memo } from "react";
const PhpStorm = (props: SVGProps<SVGSVGElement>) => (
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
          d="m139 78-8.25-25-61-13L40 73.75l93 47.5z"
        />
        <path
          fill="url(#prefix__d)"
          d="m110 143.5-1.75-52L40 73.75 56.75 174l53.25-.5z"
        />
        <path
          fill="url(#prefix__e)"
          d="m95.25 142.5 3.25-41.25L148 50.5l44.25 8L215 115.25l-23.75 23.5-38.75-6.25-24 25.25z"
        />
        <path
          fill="url(#prefix__f)"
          d="m148 50.5-71 63 13.75 81 59 20.5L215 176z"
        />
        <path fill="#000" d="M181.5 73.5h-108v108h108z" />
        <path
          fill="#fff"
          d="M124.25 161.25h-40.5V168h40.5zM83.25 87.5h18.25c10.75 0 17.25 6.25 17.25 15.5v.25c0 10.5-8 15.75-18.25 15.75H93v13.5h-9.75zM101 110c5 0 7.75-3 7.75-6.75V103c0-4.5-3-6.75-8-6.75h-7.5V110zM121.25 126l5.75-7c4 3.25 8.25 5.5 13.5 5.5 4 0 6.5-1.5 6.5-4.25V120c0-2.5-1.5-3.75-9-5.75-9-2.25-15-4.75-15-13.75v-.25c0-8.25 6.5-13.5 15.75-13.5 6.5 0 12.25 2 16.75 5.75l-5.25 7.5c-4-2.75-8-4.5-11.75-4.5s-5.75 1.75-5.75 4v.25c0 3 2 4 9.75 6 9 2.5 14.25 5.75 14.25 13.5v.25c0 9-6.75 14-16.5 14-6.75-.25-13.5-2.75-19-7.5"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="prefix__c"
        x1={41.395}
        x2={114.868}
        y1={157.114}
        y2={60.064}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#765AF8" />
        <stop offset={0.382} stopColor="#B345F1" />
        <stop offset={0.758} stopColor="#FA3293" />
        <stop offset={0.941} stopColor="#FF318C" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={46.824}
        x2={120.18}
        y1={160.947}
        y2={64.052}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#765AF8" />
        <stop offset={0.382} stopColor="#B345F1" />
        <stop offset={0.758} stopColor="#FA3293" />
        <stop offset={0.941} stopColor="#FF318C" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={167.142}
        x2={125.685}
        y1={156.012}
        y2={57.62}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.183} stopColor="#765AF8" />
        <stop offset={0.238} stopColor="#8655F6" />
        <stop offset={0.345} stopColor="#9F4CF3" />
        <stop offset={0.443} stopColor="#AE47F2" />
        <stop offset={0.522} stopColor="#B345F1" />
      </linearGradient>
      <linearGradient
        id="prefix__f"
        x1={198.164}
        x2={101.744}
        y1={183.347}
        y2={108.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.016} stopColor="#765AF8" />
        <stop offset={0.382} stopColor="#B345F1" />
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
const Memo = memo(PhpStorm);
export default Memo;
