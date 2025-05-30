import type { SVGProps } from "react";
import { memo } from "react";
const Rider = (props: SVGProps<SVGSVGElement>) => (
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
          d="M212.057 108.424 93.436 40.792l79.483 121.144 16.187-10.901z"
        />
        <path
          fill="url(#prefix__d)"
          d="m164.947 80.678-14.979-37.161-32.856 33.197 13.287 120.4 31.89 17.094 49.768-29.728z"
        />
        <path
          fill="url(#prefix__e)"
          d="m93.436 40.792-50.493 34.93 18.844 119.163 48.56 19.076 62.814-52.025z"
        />
        <path fill="#000" d="M178.234 75.475H76.766v104.05h101.468z" />
        <path
          fill="#fff"
          d="M126.05 161.192H87.88v6.689h38.17zM128.708 88.357h14.979c12.079 0 20.293 8.424 20.293 19.076 0 10.901-8.214 19.572-20.293 19.572l-14.979.495zm8.456 7.928v23.535h6.523c6.764 0 11.596-4.707 11.596-11.396 0-6.936-4.59-11.644-11.596-11.644zM89.57 88.357h17.395c4.832 0 8.456 1.487 11.113 3.964 2.174 2.23 3.141 5.203 3.141 8.919v.248c0 3.22-.725 5.698-2.174 7.679q-2.175 2.973-5.799 4.46l9.422 13.873h-9.905l-7.972-11.891h-7.007V127.5H89.33zm16.912 19.076c1.933 0 3.624-.495 4.832-1.486s1.691-2.478 1.691-3.964v-.248c0-1.982-.483-3.22-1.691-4.211-1.208-.743-2.658-1.487-4.832-1.487h-8.214v11.149h8.214z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="prefix__c"
        x1={201.16}
        x2={69.201}
        y1={140.181}
        y2={66.335}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD1265" />
        <stop offset={0.483} stopColor="#DD1265" />
        <stop offset={0.942} stopColor="#FDB60D" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={123.673}
        x2={177.688}
        y1={55.934}
        y2={201.386}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.139} stopColor="#087CFA" />
        <stop offset={0.476} stopColor="#DD1265" />
        <stop offset={0.958} stopColor="#087CFA" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={85.013}
        x2={124.998}
        y1={60.434}
        y2={199.003}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.278} stopColor="#DD1265" />
        <stop offset={0.968} stopColor="#FDB60D" />
      </linearGradient>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M42.943 40.792h169.113v173.417H42.943z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Rider);
export default Memo;
