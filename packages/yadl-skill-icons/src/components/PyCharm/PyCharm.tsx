import type { SVGProps } from "react";
import { memo } from "react";
const PyCharm = (props: SVGProps<SVGSVGElement>) => (
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
          d="M50.445 66.884 40.171 180.41l59.59 34.418 12.499-14.384 87.329-61.986 13.87-28.254-33.391-27.91L114.144 40z"
        />
        <path
          fill="url(#prefix__d)"
          d="m73.048 130.068-25.685 38.014 64.212 32.534 62.843-126.712-4.281-33.733-38.356 33.733z"
        />
        <path
          fill="#09C4EF"
          d="m213.459 110.377-33.391-27.569v59.247l19.692-3.596z"
        />
        <path
          fill="url(#prefix__e)"
          d="m160.205 214.829-69.691-20.206 2.568-13.185 88.87-62.671 11.301-4.281 21.576 82.535z"
        />
        <path fill="#000" d="M181.438 73.562H73.219V181.78h108.219z" />
        <path
          fill="#fff"
          stroke="#000"
          d="M103.528 87.945H83.322v44.692h9.59v-13.356h10.273l2.226-.343 2.569-.684 2.568-1.028 1.712-1.027 1.713-1.37 1.712-1.884 1.712-2.739.857-2.569.342-3.253-.171-3.254-.685-2.91-1.028-2.57-1.198-1.883-1.541-1.54-1.541-1.2L110.891 90l-1.542-.685-1.198-.513-1.541-.343-1.713-.343z"
        />
        <path
          fill="#000"
          stroke="#000"
          d="M101.815 96.678h-8.733v13.699h9.076l1.712-.514 1.712-.685 1.37-1.199 1.028-1.712.513-1.712v-2.226l-.342-1.199-.685-1.37-1.028-1.199-1.198-.856-1.541-.685z"
        />
        <path fill="#fff" d="M123.904 161.575h-40.41v6.507h40.41z" />
        <path
          fill="#fff"
          stroke="#000"
          d="M169.795 110.365v.012c0 5.037-2.21 10.35-5.95 14.561-4.193 4.72-10.296 8.041-17.338 8.041-13.344 0-23.63-9.579-23.63-22.431 0-6.441 2.085-12.304 6.12-16.554 4.033-4.25 10.028-6.902 17.877-6.902a23.31 23.31 0 0 1 16.799 7.136c4.159 4.312 6.545 10.121 6.122 16.137Z"
        />
        <path
          fill="#000"
          d="M160.377 109.863c-.168 7.704-4.966 14.212-14.898 14.212-8.133 0-12.671-6.93-12.671-14.212s5.052-13.527 13.185-13.527 14.555 5.65 14.384 13.527"
        />
        <path
          fill="#000"
          stroke="#000"
          d="m157.294 101.473 6.507-7.363 7.877 8.732v13.357l-7.877 8.733-6.335-6.165z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="prefix__c"
        x1={113.801}
        x2={97.534}
        y1={40}
        y2={215}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2CD788" />
        <stop offset={0.38} stopColor="#24D68E" />
        <stop offset={1} stopColor="#1ED593" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={169.623}
        x2={64.315}
        y1={40.342}
        y2={174.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ADE46C" />
        <stop offset={0.887} stopColor="#59DC7E" />
        <stop offset={1} stopColor="#1FD593" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={99.246}
        x2={215}
        y1={215}
        y2={197.021}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BAE768" />
        <stop offset={0.993} stopColor="#FBF849" />
        <stop offset={1} stopColor="#FAF748" />
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
const Memo = memo(PyCharm);
export default Memo;
